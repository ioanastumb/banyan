const SettingsProvider = require('./../data/settings-provider');
const FamilyDataProvider = require('./../data/family-provider');


const buildSuccessfulResult = (kinships) => ({
  success: true,
  kinships: kinships,
  error: null
});

const buildErrorResult = () => ({
  success: false,
  kinships: [],
  error: 'Couldn\'t find family members with the given names!\n'
});

const getNoKinshipMock = () => buildSuccessfulResult([]);

const getSelfMock = () =>
  buildSuccessfulResult(
    [
      {
        firstFamilyMemberFullName: 'Harry Potter',
        secondFamilyMemberFullname: 'Harry Potter',
        commonAncestorFullName: 'Harry Potter',
        familyBranch: 'Potter',
        kinship: 'self'
      }
    ]);

const getSiblingsOneBranch = () =>
  buildSuccessfulResult(
    [
      {
        firstFamilyMemberFullName: 'Narcissa Malfoy (nee Black)',
        secondFamilyMemberFullname: 'Bellatrix Lestrange (nee Black)',
        commonAncestorFullName: 'Cygnus Black III',
        familyBranch: 'Black',
        kinship: 'sibling'
      }
    ]);

const getSiblingsMultipleBranchesMock = () =>
  buildSuccessfulResult(
    [
      {
        firstFamilyMemberFullName: 'Fred Weasley',
        secondFamilyMemberFullname: 'George Weasley',
        commonAncestorFullName: 'Arthur Weasley',
        familyBranch: 'Weasley',
        kinship: 'sibling'
      },
      {
        firstFamilyMemberFullName: 'Fred Weasley',
        secondFamilyMemberFullname: 'George Weasley',
        commonAncestorFullName: 'Arthur Weasley',
        familyBranch: 'Black',
        kinship: 'sibling'
      }
    ]);

const getParentMock = () =>
  buildSuccessfulResult(
    [
      {
        firstFamilyMemberFullName: 'Walburga Black',
        secondFamilyMemberFullname: 'Sirius Black',
        commonAncestorFullName: 'Walburga Black',
        familyBranch: 'Black',
        kinship: 'parent'
      }
    ]);

const getChildMock = () =>
  buildSuccessfulResult(
    [
      {
        firstFamilyMemberFullName: 'Harry Potter',
        secondFamilyMemberFullname: 'James Potter',
        commonAncestorFullName: 'James Potter',
        familyBranch: 'Potter',
        kinship: 'child'
      }
    ]);

const getGrandparentMultipleBranchesMock = () =>
  buildSuccessfulResult(
    [
      {
        firstFamilyMemberFullName: 'Arthur Weasley',
        secondFamilyMemberFullname: 'Hugo Granger-Weasley',
        commonAncestorFullName: 'Arthur Weasley',
        familyBranch: 'Weasley',
        kinship: 'grandparent'
      },
      {
        firstFamilyMemberFullName: 'Arthur Weasley',
        secondFamilyMemberFullname: 'Hugo Granger-Weasley',
        commonAncestorFullName: 'Arthur Weasley',
        familyBranch: 'Black',
        kinship: 'grandparent'
      }
    ]);

const getGreatGreatGreatGreatGrandparentMock = () =>
  buildSuccessfulResult(
    [
      {
        firstFamilyMemberFullName: 'Phineas Nigellus Black',
        secondFamilyMemberFullname: 'Edward Remus Lupin',
        commonAncestorFullName: 'Phineas Nigellus Black',
        familyBranch: 'Black',
        kinship: SettingsProvider.getSettings().useExpandedGrandValues ? 'great great great great grandparent' : '4x great grandparent'
      }
    ]);

const getAuntOrUncleMock = () =>
  buildSuccessfulResult(
    [
      {
        firstFamilyMemberFullName: 'Cygnus Black III',
        secondFamilyMemberFullname: 'Sirius Black',
        commonAncestorFullName: 'Pollux Black (1912 - 1990)',
        familyBranch: 'Black',
        kinship: 'aunt/uncle'
      }
    ]);

const getGreatGreatGrandAuntOrUncleMock = () =>
  buildSuccessfulResult(
    [
      {
        firstFamilyMemberFullName: 'Cygnus Black II',
        secondFamilyMemberFullname: 'Hugo Granger-Weasley',
        commonAncestorFullName: 'Phineas Nigellus Black',
        familyBranch: 'Black',
        kinship: SettingsProvider.getSettings().useExpandedGrandValues ? 'great great grandaunt/uncle' : '2x great grandaunt/uncle'
      }
    ]);

const getGreatGreatGrandNieceOrNephewMock = () =>
  buildSuccessfulResult(
    [
      {
        firstFamilyMemberFullName: 'Hugo Granger-Weasley',
        secondFamilyMemberFullname: 'Cygnus Black II',
        commonAncestorFullName: 'Phineas Nigellus Black',
        familyBranch: 'Black',
        kinship: SettingsProvider.getSettings().useExpandedGrandValues ? 'great great grandniece/nephew' : '2x great grandniece/nephew'
      }
    ]);

const getFirstCousinsMock = () =>
  buildSuccessfulResult(
    [
      {
        firstFamilyMemberFullName: 'Bellatrix Lestrange (nee Black)',
        secondFamilyMemberFullname: 'Sirius Black',
        commonAncestorFullName: 'Pollux Black (1912 - 1990)',
        familyBranch: 'Black',
        kinship: 'first cousin'
      }
    ]);

const getFirstCousinsOnceRemovedMock = () =>
  buildSuccessfulResult(
    [
      {
        firstFamilyMemberFullName: 'Draco Malfoy',
        secondFamilyMemberFullname: 'Edward Remus Lupin',
        commonAncestorFullName: 'Cygnus Black III',
        familyBranch: 'Black',
        kinship: 'first cousin once removed'
      }
    ]);

const getErrorResultMock = () => buildErrorResult();


module.exports = {
  getSettingsMock: SettingsProvider.getSettings,
  getFamilyData: FamilyDataProvider.getFamilyData,
  getNoKinshipMock: getNoKinshipMock,
  getSelfMock: getSelfMock,
  getSiblingsOneBranch: getSiblingsOneBranch,
  getSiblingsMultipleBranchesMock: getSiblingsMultipleBranchesMock,
  getParentMock: getParentMock,
  getChildMock: getChildMock,
  getGrandparentMultipleBranchesMock: getGrandparentMultipleBranchesMock,
  getGreatGreatGreatGreatGrandparentMock: getGreatGreatGreatGreatGrandparentMock,
  getAuntOrUncleMock: getAuntOrUncleMock,
  getGreatGreatGrandAuntOrUncleMock: getGreatGreatGrandAuntOrUncleMock,
  getGreatGreatGrandNieceOrNephewMock: getGreatGreatGrandNieceOrNephewMock,
  getFirstCousinsMock: getFirstCousinsMock,
  getFirstCousinsOnceRemovedMock: getFirstCousinsOnceRemovedMock,
  getErrorResultMock: getErrorResultMock
};