import ("./ber").then(imp =>{

    var bar = imp.addnum;
    var addnumnew = new bar(4,3);
    var assnumfun = bar(4,3);
    var arr = [
       addnumnew,
       assnumfun
    ]
    sdf();
    console.log(imp);
    console.log(bar);
    console.log(arr);
}

)

