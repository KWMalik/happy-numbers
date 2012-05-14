var result=0;
for (var a=0; a<10 ; ++a) {
for (var b=0; b<10 ; ++b) {
for (var c=0; c<10 ; ++c) {
for (var d=0; d<10 ; ++d) {
if ((a+b)===(c+d)) {
    ++result;
}
}
}
}
}
console.log(result)
