if (typeof window.ethereum !== 'undefined') {
    const ethereumButton = document.querySelector('.enableEthereumButton');
    const addressSpan = document.querySelector('.address');
    const messageSpan = document.querySelector('.message');
    
    ethereumButton.addEventListener('click', () => {
        //Will Start the metamask extension
        window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((result) => {
            addressSpan.innerHTML = result[0];
        });
    });

    window.ethereum.on('accountsChanged', (accounts) => {
        // Handle the new accounts, or lack thereof.
        // "accounts" will always be an array, but it can be empty.
        addressSpan.innerHTML = accounts[0];
        messageSpan.innerHTML = 'Account has changed!';
    });

    window.ethereum.on('chainChanged', (chainId) => {
        // Handle the new chain.
        // Correctly handling chain changes can be complicated.
        // We recommend reloading the page unless you have good reason not to.
        // window.location.reload();
        messageSpan.innerHTML = 'Network has changed! (chainId: ' + chainId + ')';
    });
}
else{
    alert('Please install metamask!');
}
