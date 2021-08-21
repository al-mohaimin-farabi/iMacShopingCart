// commun function to update extra cost
function updateExtraCost(clickedIteam,priceAdded){
    const updatePrice = document.getElementById(clickedIteam);
    updatePrice.innerText = priceAdded;
    calculateTotal('total-cost', 'all-total');
};

// function to update total cost
function getExtraAddedCost(extraCost){
    const extraAdded = document.getElementById(extraCost);
    const extraAddedFigur = extraAdded.innerText;
    return extraAddedFigur;
};

function calculateTotal(subtotal, allTotal){
    const memory = getExtraAddedCost("Memory-Cost");
    const storage = getExtraAddedCost("Storage-Cost");
    const DeliveryCharge = getExtraAddedCost("Delivery-charge");
    const subTotal = parseInt(memory ) + parseInt(storage) + parseInt(DeliveryCharge);

    // update on the html
    document.getElementById(subtotal).innerText = 1299 + subTotal;
    let TotalCost = document.getElementById(allTotal).innerText = 1299 + subTotal;
    // return TotalCost; 
};

// function for coupon checker
function couponCheck(couponCode,allTotal,couponValidation){
    const getCouponCode = document.getElementById('inputed-code').value;
    let getSubTotal = document.getElementById('total-cost').innerText;

    if(getCouponCode == couponCode){
        let calcdiscountedAmount = (getSubTotal * 20) / 100;
        let totalPrice = Math.round(getSubTotal - calcdiscountedAmount)
        document.getElementById(allTotal).innerText = totalPrice;
    }

    else if (getCouponCode != couponCode && couponValidation == false){
        alert("This Coupon Code Is not valid");
        document.getElementById(allTotal).innerText = getSubTotal;
    }

    else{
        calculateTotal('total-cost', 'all-total');
    }
}


// button event
document.getElementById('defult-memory').addEventListener('click',function(){
    updateExtraCost('Memory-Cost',0);
    couponCheck('stevekaku','all-total')
});
document.getElementById('added-memory').addEventListener('click',function(){
    updateExtraCost('Memory-Cost',180);
    couponCheck('stevekaku','all-total')
});
document.getElementById('defult-storage').addEventListener('click',function(){
    updateExtraCost('Storage-Cost',0);
    couponCheck('stevekaku','all-total')
});
document.getElementById('added-storage-stageOne').addEventListener('click',function(){
    updateExtraCost('Storage-Cost',100);
    couponCheck('stevekaku','all-total')
});
document.getElementById('added-storage-stageTwo').addEventListener('click',function(){
    updateExtraCost('Storage-Cost',180);
    couponCheck('stevekaku','all-total')
});
document.getElementById('defult-Delivery').addEventListener('click',function(){
    updateExtraCost('Delivery-charge',0);
    couponCheck('stevekaku','all-total')
});
document.getElementById('fast-Delivery').addEventListener('click',function(){
    updateExtraCost('Delivery-charge',20);
    couponCheck('stevekaku','all-total')
});
document.getElementById('coupon-check').addEventListener('click',function(){
    couponCheck('stevekaku','all-total',false);
});

