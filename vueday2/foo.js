import chi from "./chi.js";
chi.chifun();
console.log(chi,chi.chi);
function ceshi(){
    import("./chi").then(
        chii=>{
            console.log(chii);
            chii.default.chifun();
        }
    ).catch(
        err=>{
            console.log(err);
        }
    )
};
ceshi();