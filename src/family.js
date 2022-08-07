import * as FamilyTree from './family-tree.js';

const processFamilyTree = (familyData) => {
  let family = new Array();
  familyData.familyTree.forEach(ftn => {
    family[ftn.id] = {
      id: ftn.id,
      parents: ftn.parents,
      gender: ftn.gender,
      fullName: ftn.fullName,
      familyBranches: ftn.familyBranches
    }
  });
  return family;
}

const processFamilyBranches = (familyData) => {
  let branches = {};
  familyData.familyBranches.forEach(fb => {
    branches[fb.familyBranchName] = {
      familyBranchName: fb.familyBranchName,
      isMainFamilyBranch: fb.isMainFamilyBranch
    }
  });
  return branches;
}

const checkForSiblingOrSelf = (firstFamilyMemberParentId, secondFamilyMemberParentId) => {
  return firstFamilyMemberParentId === secondFamilyMemberParentId;
}

const checkForParent = (firstFamilyMemberId, commonAncestorId) => {
  return firstFamilyMemberId === commonAncestorId;
}

const checkForChild = (secondFamilyMemberId, commonAncestorId) => {
  return secondFamilyMemberId === commonAncestorId;
}

const checkForAuntOrUncle = (familyTree, firstFamilyMemberId, secondFamilyMemberId, firstFamilyMemberParentId, familyBranch) => {
  const firstFamilyMemberGenerationNumber = FamilyTree.getGenerationNumber(familyTree, firstFamilyMemberId, familyBranch);
  const secondAncestorIdOnSameGeneration = FamilyTree.getAncestorIdOnSameGeneration(familyTree, secondFamilyMemberId, firstFamilyMemberGenerationNumber, familyBranch);
  const secondAncestorOnSameGenerationParent = FamilyTree.getParentByFamilyBranch(familyTree, secondAncestorIdOnSameGeneration, familyBranch);
  return firstFamilyMemberParentId === secondAncestorOnSameGenerationParent.id;
}

const checkForNieceOrNephew = (familyTree, firstFamilyMemberId, secondFamilyMemberId, secondFamilyMemberParentId, familyBranch) => {
  const secondFamilyMemberGenerationNumber = FamilyTree.getGenerationNumber(familyTree, secondFamilyMemberId, familyBranch);
  const firstAncestorIdOnSameGeneration = FamilyTree.getAncestorIdOnSameGeneration(familyTree, firstFamilyMemberId, secondFamilyMemberGenerationNumber, familyBranch);
  const firstAncestorOnSameGenerationParent = FamilyTree.getParentByFamilyBranch(familyTree, firstAncestorIdOnSameGeneration, familyBranch);
  return secondFamilyMemberParentId === firstAncestorOnSameGenerationParent.id;
}

const checkForCousins = (settings, familyTree, firstFamilyMemberId, secondFamilyMemberId, commonAncestorId, generationDifference, familyBranch) => {
  const firstFamilyMemberGenerationNumber = FamilyTree.getGenerationNumber(familyTree, firstFamilyMemberId, familyBranch);
  const secondFamilyMemberGenerationNumber = FamilyTree.getGenerationNumber(familyTree, secondFamilyMemberId, familyBranch);
  const commonAncestorGenerationNumber = FamilyTree.getGenerationNumber(familyTree, commonAncestorId, familyBranch);
  let degree = 0;

  if (2 <= (firstFamilyMemberGenerationNumber - commonAncestorGenerationNumber)) {
    if (firstFamilyMemberGenerationNumber <= secondFamilyMemberGenerationNumber) {
      degree = (firstFamilyMemberGenerationNumber - commonAncestorGenerationNumber) - 1;
    }
    else {
      degree = (secondFamilyMemberGenerationNumber - commonAncestorGenerationNumber) - 1;
    }
  }
  return (settings.cousinSuffixes[generationDifference - 1])
    ? settings.cousinPrefixes[degree - 1] + ' cousin ' + settings.cousinSuffixes[generationDifference - 1]
    : settings.cousinPrefixes[degree - 1] + ' cousin';
}

const getKinshipFilteredByFamilyBranch = (settings, familyTree, firstFamilyMemberId, secondFamilyMemberId, commonAncestorId, familyBranch) => {

  const firstFamilyMemberParentId = FamilyTree.getParentIdByFamilyBranch(familyTree, firstFamilyMemberId, familyBranch);
  const secondFamilyMemberParentId = FamilyTree.getParentIdByFamilyBranch(familyTree, secondFamilyMemberId, familyBranch);
  const generationDifference = FamilyTree.getGenerationDifference(familyTree, firstFamilyMemberId, secondFamilyMemberId, familyBranch);
  const generationPrefix = FamilyTree.getGenerationPrefix(settings, generationDifference);

  if (checkForSiblingOrSelf(firstFamilyMemberParentId, secondFamilyMemberParentId)) {
    return (firstFamilyMemberId != secondFamilyMemberId ? 'sibling' : 'self');
  }

  if (checkForParent(firstFamilyMemberId, commonAncestorId)) {
    return generationPrefix + 'parent';
  }

  if (checkForChild(secondFamilyMemberId, commonAncestorId)) {
    return generationPrefix + 'child';
  }

  if (checkForAuntOrUncle(familyTree, firstFamilyMemberId, secondFamilyMemberId, firstFamilyMemberParentId, familyBranch)) {
    return generationPrefix + 'aunt/uncle';
  }

  if (checkForNieceOrNephew(familyTree, firstFamilyMemberId, secondFamilyMemberId, secondFamilyMemberParentId, familyBranch)) {
    return generationPrefix + 'niece/nephew';
  }

  return checkForCousins(settings, familyTree, firstFamilyMemberId, secondFamilyMemberId, commonAncestorId, generationDifference, familyBranch);
}

const getKinshipByIds = (settings, familyData, firstFamilyMemberId, secondFamilyMemberId) => {
  try {
    const familyTree = processFamilyTree(familyData);
    const familyBranches = processFamilyBranches(familyData);
    let kinships = new Array();

    // get the lowest common ancestor(s) between the two family members
    const ancestors = FamilyTree.getLeastCommonAncestorIds(familyTree, firstFamilyMemberId, secondFamilyMemberId);

    // go through the ancestor list and determine the relationship based on the acestor's family branch(es)
    ancestors.forEach(ancestorId => {
      familyTree[ancestorId].familyBranches.forEach(familyBranch => {
        kinships.push({
          firstFamilyMemberFullName: familyTree[firstFamilyMemberId].fullName,
          secondFamilyMemberFullname: familyTree[secondFamilyMemberId].fullName,
          commonAncestorFullName: familyTree[ancestorId].fullName,
          familyBranch: familyBranch,
          kinship: getKinshipFilteredByFamilyBranch(settings, familyTree, firstFamilyMemberId, secondFamilyMemberId, ancestorId, familyBranch)
        });
      });
    });

    return {
      success: true,
      kinships: kinships,
      error: null
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      kinships: [],
      error: 'An unexpected error occured. Try checking the family member data and input values!'
    }
  }
}

const getKinshipByNames = (settings, familyData, firstFamilyMemberFullName, secondFamilyMemberFullName) => {
  try {
    const familyTree = processFamilyTree(familyData);
    const firstFamilyMemberId = FamilyTree.getFamilyMemberIdFromFullName(familyTree, firstFamilyMemberFullName);
    const secondFamilyMemberId = FamilyTree.getFamilyMemberIdFromFullName(familyTree, secondFamilyMemberFullName);

    if (firstFamilyMemberId == undefined || secondFamilyMemberId == undefined) {
      return {
        success: false,
        kinships: [],
        error: 'Couldn\'t find family members with the given names!\n'
      }
    }
    else {
      let result = getKinshipByIds(settings, familyData, firstFamilyMemberId, secondFamilyMemberId);
      return {
        success: result.success,
        kinships: result.kinships,
        error: result.error
      }
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      kinships: [],
      error: 'An unexpected error occured. Try checking the family member data and input values!'
    }
  }
}

export { getKinshipByNames, getKinshipByIds }