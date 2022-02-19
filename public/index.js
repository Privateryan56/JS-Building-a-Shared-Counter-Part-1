function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');
        async function getIP(){
            let newCount = await fetch('http://localhost:9001/counter');
           const newCountResponse = await newCount.json();
            console.log(newCountResponse.value);
            return newCountResponse;
        }
        getIP().then(function(newCountResponse){
           countContainer.textContent = newCountResponse.value;
           countValue = newCountResponse.value;

        })
    let countValue;

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
        fetch('http://localhost:9001/counter', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                value: countValue
            })
        })
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
        fetch('http://localhost:9001/counter', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                value: countValue
            })
        })
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    countContainer.textContent = countValue;
}
main()
