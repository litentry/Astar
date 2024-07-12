(function() {var implementors = {
"pallet_evm_precompile_assets_erc20":[["impl&lt;Runtime, Instance&gt; PrecompileSet for <a class=\"struct\" href=\"pallet_evm_precompile_assets_erc20/struct.Erc20AssetsPrecompileSet.html\" title=\"struct pallet_evm_precompile_assets_erc20::Erc20AssetsPrecompileSet\">Erc20AssetsPrecompileSet</a>&lt;Runtime, Instance&gt;<div class=\"where\">where\n    Instance: 'static,\n    Runtime: Config&lt;Instance&gt; + Config + Config + <a class=\"trait\" href=\"pallet_evm_precompile_assets_erc20/trait.AddressToAssetId.html\" title=\"trait pallet_evm_precompile_assets_erc20::AddressToAssetId\">AddressToAssetId</a>&lt;<a class=\"type\" href=\"pallet_evm_precompile_assets_erc20/type.AssetIdOf.html\" title=\"type pallet_evm_precompile_assets_erc20::AssetIdOf\">AssetIdOf</a>&lt;Runtime, Instance&gt;&gt;,\n    Runtime::RuntimeCall: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Call&lt;Runtime, Instance&gt;&gt;,\n    &lt;Runtime::RuntimeCall as Dispatchable&gt;::RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,\n    <a class=\"type\" href=\"pallet_evm_precompile_assets_erc20/type.BalanceOf.html\" title=\"type pallet_evm_precompile_assets_erc20::BalanceOf\">BalanceOf</a>&lt;Runtime, Instance&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt; + Codec,\n    &lt;&lt;Runtime as Config&gt;::RuntimeCall as Dispatchable&gt;::RuntimeOrigin: OriginTrait,\n    <a class=\"type\" href=\"pallet_evm_precompile_assets_erc20/type.AssetIdOf.html\" title=\"type pallet_evm_precompile_assets_erc20::AssetIdOf\">AssetIdOf</a>&lt;Runtime, Instance&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div>"]],
"precompile_utils":[["impl&lt;R: Config, P: <a class=\"trait\" href=\"precompile_utils/precompile_set/trait.PrecompileSetFragment.html\" title=\"trait precompile_utils::precompile_set::PrecompileSetFragment\">PrecompileSetFragment</a>&gt; PrecompileSet for <a class=\"struct\" href=\"precompile_utils/precompile_set/struct.PrecompileSetBuilder.html\" title=\"struct precompile_utils::precompile_set::PrecompileSetBuilder\">PrecompileSetBuilder</a>&lt;R, P&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()