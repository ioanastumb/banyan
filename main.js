import * as SettingsProvider from './data/settings-provider.js';
import * as FamilyDataProvider from './data/family-provider.js';
import * as Family from './src/family.js';

const prettyPrint = (kinships) => {
  let uniqueKinships = new Set();
  kinships.forEach(k => { uniqueKinships.add(k.kinship) });

  let print = '';
  uniqueKinships.forEach(uk => {
    let uniqueKinship = kinships.find(k => k.kinship === uk);
    print = print
      + uniqueKinship.firstFamilyMemberFullName
      + ' is the '
      + uniqueKinship.kinship
      + ' of '
      + uniqueKinship.secondFamilyMemberFullName
      + ' in the '
      + uniqueKinship.familyBranch
      + ' family branch; their common ancestor is '
      + uniqueKinship.commonAncestorFullName + '.\n';
  });
  return print;
}

const getFamilyKinship = (firstFamilyMemberFullName, secondFamilyMemberFullName) => {
  const settings = SettingsProvider.getSettings();
  const familyData = FamilyDataProvider.getFamilyData();

  let result = Family.getKinshipByNames(settings, familyData, firstFamilyMemberFullName, secondFamilyMemberFullName);

  return (!result.success)
    ? result.error
    : (result.kinships.length !== 0)
      ? prettyPrint(result.kinships)
      : 'No family relation found between ' + firstFamilyMemberFullName + ' and ' + secondFamilyMemberFullName + ' (should they be related via a marriage somewhere in the tree? This is not supported yet!)\n';
}

console.log(getFamilyKinship('Harry Potter', 'James Potter'));
console.log(getFamilyKinship('Narcissa Malfoy (nee Black)', 'Bellatrix Lestrange (nee Black)'));
console.log(getFamilyKinship('Bellatrix Lestrange (nee Black)', 'Sirius Black'));
console.log(getFamilyKinship('Arthur Weasley', 'Hugo Granger-Weasley'));
console.log(getFamilyKinship('Phineas Nigellus Black', 'Hugo Granger-Weasley'));