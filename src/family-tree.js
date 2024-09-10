import * as Queue from './queue.js';
import * as Helpers from './helpers.js';

const getAllAncerstorIds = (familyTree, familyMemberId) => {
  const ancestors = new Set();
  let toVisit = new Queue.Queue();

  toVisit.enqueue(familyMemberId);
  ancestors.add(familyMemberId);

  while (!toVisit.isEmpty) {
    let nodeId = toVisit.dequeue();
    if (familyTree[nodeId].parents && !familyTree[nodeId].parents.includes(-1)) {
      familyTree[nodeId].parents.forEach(p => {
        ancestors.add(p);
        toVisit.enqueue(p)
      });
    }
  }

  return ancestors;
}

const getGenerationDifference = (familyTree, firstFamilyMemberId, secondFamilyMemberId, familyBranch) => {
  let difference = getGenerationNumber(familyTree, firstFamilyMemberId, familyBranch) - getGenerationNumber(familyTree, secondFamilyMemberId, familyBranch);
  return Math.abs(difference);
}

const getGenerationPrefix = (settings, generation, grand = false) => {
  if (generation === 1) {
    return '';
  }
  if (generation === 2) {
    return (grand === false) ? 'grand' : 'great';
  }
  if (generation > 2) {
    let value = (grand === false) ? 'grand' : 'great';

    if (settings.useExpandedGrandValues) {
      for (let i = 1; i <= generation - 2; i++) {
        value = 'great ' + value;
      }
    }
    else {
      value = (generation - 2) + 'x great ' + value;
    }

    return value;
  }
}

const getAncestorIdOnSameGeneration = (familyTree, familyMemberId, generationNumber, familyBranch) => {
  if (getGenerationNumber(familyTree, familyMemberId, familyBranch) <= generationNumber) {
    return familyMemberId;
  }

  while (getGenerationNumber(familyTree, familyMemberId, familyBranch) != generationNumber) {
    let parent = getParentByFamilyBranch(familyTree, familyMemberId, familyBranch);
    familyMemberId = parent.id;
  }

  return familyMemberId;
}

const getGenerationNumber = (familyTree, familyMemberId, familyBranch) => {
  let generation = 1;
  let parent = getParentByFamilyBranch(familyTree, familyMemberId, familyBranch);

  while (parent) {
    parent = getParentByFamilyBranch(familyTree, parent.id, familyBranch);
    generation++;
  }

  return generation;
}

const getLeastCommonAncestorIds = (familyTree, firstFamilyMemberId, secondFamilyMemberId) => {
  let family = new Array();

  familyTree.forEach(ftn => {
    family[ftn.id] = 0;
  });

  const firstFamilyMemberAncestors = getAllAncerstorIds(familyTree, firstFamilyMemberId);
  const secondFamilyMemberAncestors = getAllAncerstorIds(familyTree, secondFamilyMemberId);

  const commonAncestors = Helpers.arraysIntersect(Array.from(firstFamilyMemberAncestors), Array.from(secondFamilyMemberAncestors));

  commonAncestors.forEach(ca => {
    if (familyTree[ca].parents && !familyTree[ca].parents.includes(-1)) {
      familyTree[ca].parents.forEach(p => {
        family[p]++;
      });
    }
  });

  return family
    .map((count, id) => {
      if (count === 0 && commonAncestors.includes(id)) {
        return id;
      }
    })
    .filter(id => id !== undefined);
}

const getParentByFamilyBranch = (familyTree, familyMemberId, familyBranch) => {
  try {
    return familyTree.find(ftn => familyTree[familyMemberId].parents
      && familyTree[familyMemberId].parents.includes(ftn.id)
      && ftn.familyBranches.includes(familyBranch));
  }
  catch (error) {
    console.log(error);
  }
}

const getParentIdByFamilyBranch = (familyTree, familyMemberId, familyBranch) => {
  let parent = getParentByFamilyBranch(familyTree, familyMemberId, familyBranch);
  return (parent) ? parent.id : -1;
}

const getFamilyMemberIdFromFullName = (familyTree, familyMemberFullName) => {
  let familyMember = familyTree.find(ftn => ftn.fullName === familyMemberFullName);
  return (familyMember)
    ? familyMember.id
    : undefined;
}

export {
  getAllAncerstorIds,
  getGenerationDifference,
  getGenerationPrefix,
  getAncestorIdOnSameGeneration,
  getGenerationNumber,
  getLeastCommonAncestorIds,
  getParentByFamilyBranch,
  getParentIdByFamilyBranch,
  getFamilyMemberIdFromFullName
}