const MockProvider = require('./mock-provider');
const Family = require('./../src/family');
const Helpers = require('./../src/helpers');


const testSuccessfulKinshipByNames = (kinshipUnderTest, firstFamilyMemberFullName, secondFamilyMemberFullName, mockKinships) => {
  let result = Family.getKinshipByNames(
    MockProvider.getSettingsMock(),
    MockProvider.getFamilyData(),
    firstFamilyMemberFullName,
    secondFamilyMemberFullName);

  if (result && result.success && Helpers.arraysEqual(result.kinships, mockKinships)) {
    console.log('Tests passed - ' + kinshipUnderTest);
  }
  else {
    console.log('Tests FAILED - ' + kinshipUnderTest);
  }
}

const testFailedKinshipByName = () => {
  let result = Family.getKinshipByNames(
    MockProvider.getSettingsMock(),
    MockProvider.getFamilyData(),
    'A random sentence that\'s definitely not a valid name',
    'Another one!');

  if (result && !result.success && result.error === MockProvider.getErrorResultMock().error) {
    console.log('Tests passed - TestFailedKinshipByName');
  }
  else {
    console.log('Tests FAILED - TestFailedKinshipByName');
  }
}

const runAllTests = () => {
  testSuccessfulKinshipByNames('TestSelf', 'Harry Potter', 'Harry Potter', MockProvider.getSelfMock().kinships);
  testSuccessfulKinshipByNames('TestSiblingsOneBranch', 'Narcissa Malfoy (nee Black)', 'Bellatrix Lestrange (nee Black)', MockProvider.getSiblingsOneBranch().kinships);
  testSuccessfulKinshipByNames('TestSiblingsMultipleBranches', 'Fred Weasley', 'George Weasley', MockProvider.getSiblingsMultipleBranchesMock().kinships);
  testSuccessfulKinshipByNames('TestParent', 'Walburga Black', 'Sirius Black', MockProvider.getParentMock().kinships);
  testSuccessfulKinshipByNames('TestChild', 'Harry Potter', 'James Potter', MockProvider.getChildMock().kinships);
  testSuccessfulKinshipByNames('TestGrandparentMultipleBranches', 'Arthur Weasley', 'Hugo Granger-Weasley', MockProvider.getGrandparentMultipleBranchesMock().kinships);
  testSuccessfulKinshipByNames('TestGreatGreatGreatGreatGrandparent', 'Phineas Nigellus Black', 'Edward Remus Lupin', MockProvider.getGreatGreatGreatGreatGrandparentMock().kinships);
  testSuccessfulKinshipByNames('TestAuntOrUncle', 'Cygnus Black III', 'Sirius Black', MockProvider.getAuntOrUncleMock().kinships);
  testSuccessfulKinshipByNames('TestGreatGreatGrandAuntOrUncle', 'Cygnus Black II', 'Hugo Granger-Weasley', MockProvider.getGreatGreatGrandAuntOrUncleMock().kinships);
  testSuccessfulKinshipByNames('TestGreatGreatGrandNieceOrNephew', 'Hugo Granger-Weasley', 'Cygnus Black II', MockProvider.getGreatGreatGrandNieceOrNephewMock().kinships);
  testSuccessfulKinshipByNames('TestFirstCousins', 'Bellatrix Lestrange (nee Black)', 'Sirius Black', MockProvider.getFirstCousinsMock().kinships);
  testSuccessfulKinshipByNames('TestFirstCousinsOnceRemoved', 'Draco Malfoy', 'Edward Remus Lupin', MockProvider.getFirstCousinsOnceRemovedMock().kinships);
  testSuccessfulKinshipByNames('TestNoKinship', 'Harry Potter', 'Draco Malfoy', MockProvider.getNoKinshipMock().kinships);

  testFailedKinshipByName();
}

runAllTests();