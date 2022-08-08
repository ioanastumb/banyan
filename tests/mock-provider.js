import * as SettingsProvider from './../data/settings-provider.js';
import * as FamilyDataProvider from './../data/family-provider.js';

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
        secondFamilyMemberFullName: 'Harry Potter',
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
        secondFamilyMemberFullName: 'Bellatrix Lestrange (nee Black)',
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
        secondFamilyMemberFullName: 'George Weasley',
        commonAncestorFullName: 'Arthur Weasley',
        familyBranch: 'Weasley',
        kinship: 'sibling'
      },
      {
        firstFamilyMemberFullName: 'Fred Weasley',
        secondFamilyMemberFullName: 'George Weasley',
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
        secondFamilyMemberFullName: 'Sirius Black',
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
        secondFamilyMemberFullName: 'James Potter',
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
        secondFamilyMemberFullName: 'Hugo Granger-Weasley',
        commonAncestorFullName: 'Arthur Weasley',
        familyBranch: 'Weasley',
        kinship: 'grandparent'
      },
      {
        firstFamilyMemberFullName: 'Arthur Weasley',
        secondFamilyMemberFullName: 'Hugo Granger-Weasley',
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
        secondFamilyMemberFullName: 'Edward Remus Lupin',
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
        secondFamilyMemberFullName: 'Sirius Black',
        commonAncestorFullName: 'Pollux Black',
        familyBranch: 'Black',
        kinship: 'aunt/uncle'
      }
    ]);

const getGreatGreatGrandAuntOrUncleMock = () =>
  buildSuccessfulResult(
    [
      {
        firstFamilyMemberFullName: 'Cygnus Black II',
        secondFamilyMemberFullName: 'Hugo Granger-Weasley',
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
        secondFamilyMemberFullName: 'Cygnus Black II',
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
        secondFamilyMemberFullName: 'Sirius Black',
        commonAncestorFullName: 'Pollux Black',
        familyBranch: 'Black',
        kinship: 'first cousin'
      }
    ]);

const getFirstCousinsOnceRemovedMock = () =>
  buildSuccessfulResult(
    [
      {
        firstFamilyMemberFullName: 'Draco Malfoy',
        secondFamilyMemberFullName: 'Edward Remus Lupin',
        commonAncestorFullName: 'Cygnus Black III',
        familyBranch: 'Black',
        kinship: 'first cousin once removed'
      }
    ]);

const getErrorResultMock = () => buildErrorResult();

const getSettingsMock = () => SettingsProvider.getSettings();

const getFamilyData = () => FamilyDataProvider.getFamilyData();

export {
  getSettingsMock,
  getFamilyData,
  getNoKinshipMock,
  getSelfMock,
  getSiblingsOneBranch,
  getSiblingsMultipleBranchesMock,
  getParentMock,
  getChildMock,
  getGrandparentMultipleBranchesMock,
  getGreatGreatGreatGreatGrandparentMock,
  getAuntOrUncleMock,
  getGreatGreatGrandAuntOrUncleMock,
  getGreatGreatGrandNieceOrNephewMock,
  getFirstCousinsMock,
  getFirstCousinsOnceRemovedMock,
  getErrorResultMock
}