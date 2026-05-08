const p1 = {
    xp1 : "Im P1"
};
const p2 = {
    xp1 : "Im P2",
    __proto__:p1
};
const p3 = {
    xp1 : "Im P3", 
    __proto__:p2
};