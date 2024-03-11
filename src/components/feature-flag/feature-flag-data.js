const dummyApiResponse = {
    showLightAndDarkMode: true,
    showTicTacToeBoard: true,
    showRandomColorGenerator: true,
    showAccordion: true,
    showTreeView: true,
    showTabs : true
  };

  function featureFlagsDataServiceCall() {
    return new Promise((resolve, reject) => {
        if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
        else reject('Error occured!');
    });
  }

  export default featureFlagsDataServiceCall;