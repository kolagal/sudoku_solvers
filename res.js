function res_food(order) {
   
   
    console.log(order);
    return order;
}
res_food("Biryan, PaneerCurry");

function res_bill(order) {

    console.log(order);
    return(order);
}
res_bill(165+185);

return = {
    "res_food": res_food("Biryani and PaneerCurry"),
    "res_bill" : res_bill(165+185)
};


