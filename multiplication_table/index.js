<script type="text/ javascript">
function  test(){
    var str = '';
    for (let row = 1; row <= 9; row++) {
        for (let col = 1; col <= row; col++) {
            str += (row + '*' + col + '=' + row * col + ' ');
        }
        str+='\n';
    }
    console.log(str);
}
</script>