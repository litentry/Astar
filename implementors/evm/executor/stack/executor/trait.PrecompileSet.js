(function() {var implementors = {};
implementors["astar_runtime"] = [{"text":"impl&lt;R&gt; PrecompileSet for <a class=\"struct\" href=\"astar_runtime/struct.AstarNetworkPrecompiles.html\" title=\"struct astar_runtime::AstarNetworkPrecompiles\">AstarNetworkPrecompiles</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Config,<br>&nbsp;&nbsp;&nbsp;&nbsp;Dispatch&lt;R&gt;: Precompile,<br>&nbsp;&nbsp;&nbsp;&nbsp;DappsStakingWrapper&lt;R&gt;: Precompile,<br>&nbsp;&nbsp;&nbsp;&nbsp;Erc20AssetsPrecompileSet&lt;R&gt;: PrecompileSet,&nbsp;</span>","synthetic":false,"types":["astar_runtime::precompiles::AstarNetworkPrecompiles"]}];
implementors["local_runtime"] = [{"text":"impl&lt;R:&nbsp;Config&gt; PrecompileSet for <a class=\"struct\" href=\"local_runtime/struct.LocalNetworkPrecompiles.html\" title=\"struct local_runtime::LocalNetworkPrecompiles\">LocalNetworkPrecompiles</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Config,<br>&nbsp;&nbsp;&nbsp;&nbsp;Dispatch&lt;R&gt;: Precompile,<br>&nbsp;&nbsp;&nbsp;&nbsp;DappsStakingWrapper&lt;R&gt;: Precompile,&nbsp;</span>","synthetic":false,"types":["local_runtime::precompiles::LocalNetworkPrecompiles"]}];
implementors["shibuya_runtime"] = [{"text":"impl&lt;R, C&gt; PrecompileSet for <a class=\"struct\" href=\"shibuya_runtime/struct.ShibuyaNetworkPrecompiles.html\" title=\"struct shibuya_runtime::ShibuyaNetworkPrecompiles\">ShibuyaNetworkPrecompiles</a>&lt;R, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Erc20AssetsPrecompileSet&lt;R&gt;: PrecompileSet,<br>&nbsp;&nbsp;&nbsp;&nbsp;DappsStakingWrapper&lt;R&gt;: Precompile,<br>&nbsp;&nbsp;&nbsp;&nbsp;XcmPrecompile&lt;R, C&gt;: Precompile,<br>&nbsp;&nbsp;&nbsp;&nbsp;Dispatch&lt;R&gt;: Precompile,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Config + Config + Config + AddressToAssetId&lt;&lt;R as Config&gt;::AssetId&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Convert&lt;MultiLocation, &lt;R as Config&gt;::AssetId&gt;,&nbsp;</span>","synthetic":false,"types":["shibuya_runtime::precompiles::ShibuyaNetworkPrecompiles"]}];
implementors["shiden_runtime"] = [{"text":"impl&lt;R, C&gt; PrecompileSet for <a class=\"struct\" href=\"shiden_runtime/struct.ShidenNetworkPrecompiles.html\" title=\"struct shiden_runtime::ShidenNetworkPrecompiles\">ShidenNetworkPrecompiles</a>&lt;R, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Erc20AssetsPrecompileSet&lt;R&gt;: PrecompileSet,<br>&nbsp;&nbsp;&nbsp;&nbsp;DappsStakingWrapper&lt;R&gt;: Precompile,<br>&nbsp;&nbsp;&nbsp;&nbsp;XcmPrecompile&lt;R, C&gt;: Precompile,<br>&nbsp;&nbsp;&nbsp;&nbsp;Dispatch&lt;R&gt;: Precompile,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Config + Config + Config + AddressToAssetId&lt;&lt;R as Config&gt;::AssetId&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Convert&lt;MultiLocation, &lt;R as Config&gt;::AssetId&gt;,&nbsp;</span>","synthetic":false,"types":["shiden_runtime::precompiles::ShidenNetworkPrecompiles"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()