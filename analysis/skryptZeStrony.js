// tuż po zassaniu skryptu /Content/audio?...
<script >    
    $(document).ready(function () {
        
        $('.openmodal').click(function () {
        var loc = $(this).attr('href');

        $('#modalDialog .modal-title').html($(this).html());
        $('#modalDialog iframe').attr('src', loc);
        $('#modalDialog').modal();
        $('#modalDialog .btn-default').click(function () {
            $('#modalDialog iframe').attr('src', loc);
        });
        return false;
    });
    });
</script>
