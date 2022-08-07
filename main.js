const SettingsProvider = require('./data/settings-provider');
const FamilyDataProvider = require('./data/family-provider');
const Family = require('./src/family');


const prettyPrint = (kinships) => {
  let print = '';
  kinships.forEach(k => {
    print = print
      + k.firstFamilyMemberFullName
      + ' is the '
      + k.kinship
      + ' of '
      + k.secondFamilyMemberFullname
      + ' in the '
      + k.familyBranch
      + ' family branch; their common ancestor is '
      + k.commonAncestorFullName + '.\n';
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