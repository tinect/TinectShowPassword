{extends file='parent:frontend/index/index.tpl'}

{block name="frontend_index_header_javascript_tracking"}
    {$smarty.block.parent}

    <script>
        let showPasswordTexts = {
            show: '{s namespace="TinectShowPassword" name="show"}anzeigen{/s}',
            hide: '{s namespace="TinectShowPassword" name="hide"}verstecken{/s}'
        };
    </script>
{/block}
