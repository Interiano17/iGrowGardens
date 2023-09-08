    var checkout = [];

    var item1 = {col1:"Maceta Rokita Inteligente", col2:1800};
    var item2 = {col1:"Maceta Akuaraíz", col2:1500};
    var item3 = {col1:"Maceta Inteligente", col2:2000};
    var item4 = {col1:"Maceta Air Grower", col2:3450};
    var item5 = {col1:"Maceta con luz LED", col2:2500};
    var item6 = {col1:"Regadora", col2:1400};

    function loadCheckout(){
        var retrievedData = sessionStorage.getItem("list1");
        var checkout2 = JSON.parse(retrievedData);
        var rows = "";

        checkout2.map((row)=>{
        var row = '<tr><td>'+row.col1+'</td><td>'+row.col2+'</td><td><a href="#" class="removeButton" onclick="deleteRow(this)">Eliminar</a></td></tr>';
        rows = rows+row;
        console.log(row.col2);
        })

    var tbody = document.querySelector('#tableExpenses');
    tbody.innerHTML = rows; 
    
    let sum = 0;

    for (let i = 0; i < checkout2.length; i++ ) {
        sum += checkout2[i].col2;
    }

    var price = document.querySelector('#subtotal');
    price.innerHTML = sum;
    }
    
    function deleteRow(r) {
        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("fullTableExpenses").deleteRow(i);
        
        let retrievedItems = sessionStorage.getItem("list1");
        let checkout2 = JSON.parse(retrievedItems);
        var checkoutArray = checkout2;

        checkoutArray.splice(i-1, 1);

        sessionStorage.setItem("list1", JSON.stringify(checkoutArray));

        loadCheckout();
      }

    function addItem() {
        alert("Item agregado al carrito de compras");
        checkout.push(item1);
        console.log(checkout);

        let retrievedItems = sessionStorage.getItem("list1");
        let checkout2 = JSON.parse(retrievedItems);

        console.log(checkout2);

        if(checkout2 == null){
            sessionStorage.setItem("list1", JSON.stringify(checkout));
        }else{
            let retrievedItems = sessionStorage.getItem("list1");
            let checkout2 = JSON.parse(retrievedItems);
            var checkoutArray = checkout2;
            checkoutArray.push(item1);
            sessionStorage.setItem("list1", JSON.stringify(checkoutArray));
        }
    }

    function addItem2() {
        alert("Item agregado al carrito de compras");
        checkout.push(item2);
        console.log(checkout);

        let retrievedItems = sessionStorage.getItem("list1");
        let checkout2 = JSON.parse(retrievedItems);

        console.log(checkout2);

        if(checkout2 == null){
            sessionStorage.setItem("list1", JSON.stringify(checkout));
        }else{
            let retrievedItems = sessionStorage.getItem("list1");
            let checkout2 = JSON.parse(retrievedItems);
            var checkoutArray = checkout2;
            checkoutArray.push(item2);
            sessionStorage.setItem("list1", JSON.stringify(checkoutArray));
        }
    }

    function addItem3() {
        alert("Item agregado al carrito de compras");
        checkout.push(item3);
        console.log(checkout);

        let retrievedItems = sessionStorage.getItem("list1");
        let checkout2 = JSON.parse(retrievedItems);

        console.log(checkout2);

        if(checkout2 == null){
            sessionStorage.setItem("list1", JSON.stringify(checkout));
        }else{
            let retrievedItems = sessionStorage.getItem("list1");
            let checkout2 = JSON.parse(retrievedItems);
            var checkoutArray = checkout2;
            checkoutArray.push(item3);
            sessionStorage.setItem("list1", JSON.stringify(checkoutArray));
        }
    }

    function addItem4() {
        alert("Item agregado al carrito de compras");
        checkout.push(item4);
        console.log(checkout);

        let retrievedItems = sessionStorage.getItem("list1");
        let checkout2 = JSON.parse(retrievedItems);

        console.log(checkout2);

        if(checkout2 == null){
            sessionStorage.setItem("list1", JSON.stringify(checkout));
        }else{
            let retrievedItems = sessionStorage.getItem("list1");
            let checkout2 = JSON.parse(retrievedItems);
            var checkoutArray = checkout2;
            checkoutArray.push(item4);
            sessionStorage.setItem("list1", JSON.stringify(checkoutArray));
        }
    }

    function addItem5() {
        alert("Item agregado al carrito de compras");
        checkout.push(item5);
        console.log(checkout);

        let retrievedItems = sessionStorage.getItem("list1");
        let checkout2 = JSON.parse(retrievedItems);

        console.log(checkout2);

        if(checkout2 == null){
            sessionStorage.setItem("list1", JSON.stringify(checkout));
        }else{
            let retrievedItems = sessionStorage.getItem("list1");
            let checkout2 = JSON.parse(retrievedItems);
            var checkoutArray = checkout2;
            checkoutArray.push(item5);
            sessionStorage.setItem("list1", JSON.stringify(checkoutArray));
        }
    }

    function addItem6() {
        alert("Item agregado al carrito de compras");
        checkout.push(item6);
        console.log(checkout);

        let retrievedItems = sessionStorage.getItem("list1");
        let checkout2 = JSON.parse(retrievedItems);

        console.log(checkout2);

        if(checkout2 == null){
            sessionStorage.setItem("list1", JSON.stringify(checkout));
        }else{
            let retrievedItems = sessionStorage.getItem("list1");
            let checkout2 = JSON.parse(retrievedItems);
            var checkoutArray = checkout2;
            checkoutArray.push(item6);
            sessionStorage.setItem("list1", JSON.stringify(checkoutArray));
        }
    }