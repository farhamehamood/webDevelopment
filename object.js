function product(){
    this.type = "";
    this.instock = 0;
    this.price = 0;
    this.productID = "";
    
    }
    var productArray = new Array()
   
    var productOne = new product()
    productOne.type = "baby solif foods";
    productOne.instock = 10;
    productOne.price = 100;
    productOne.productID = 12345;
    // now below we need to add product above to array ---use push
    productArray.push(productOne)
    
    //next product
    
   
    var productTwo = new product()
    productTwo.type = "Baby cloths";
    productTwo.instock = 20;
    productTwo.price = 500;
    productTwo.productID = 234;
    // now below we need to add product above to array ---use push
    productArray.push(productTwo)
    
    
    //next peoduct
    //create a group object --productone is object
    var productThree = new product()
    productThree.type = "Baby diapers";
    productThree.instock = 20;
    productThree.price = 10;
    productThree.productID = 456;
    // now below we need to add product above to array ---use push
    productArray.push(productThree)
    
    //done with array
    
    //next step calculate price--we crate new function
    
    function submitTotal(){
        var type = document.getElementById("select").value// have to tell what type on drop down menu
        for (i=0; i<productArray.length; i++){
            if (type==productArray[i].type)
            return;
        }
    }
    




    