(function() {var implementors = {
"pallet_evm_precompile_dapp_staking_v3":[["impl&lt;R&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_dapp_staking_v3/struct.DappStakingV3Precompile.html\" title=\"struct pallet_evm_precompile_dapp_staking_v3::DappStakingV3Precompile\">DappStakingV3Precompile</a>&lt;R&gt;<div class=\"where\">where\n    R: Config + Config + Config&lt;AccountId = AccountId&gt;,\n    BlockNumberFor&lt;R&gt;: IsType&lt;BlockNumber&gt;,\n    &lt;R::RuntimeCall as Dispatchable&gt;::RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;R::AccountId&gt;&gt;,\n    R::RuntimeCall: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Call&lt;R&gt;&gt;,</div>"]],
"pallet_evm_precompile_dispatch_lockdrop":[["impl&lt;Runtime, DispatchValidator, DecodeLimit&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_dispatch_lockdrop/struct.DispatchLockdrop.html\" title=\"struct pallet_evm_precompile_dispatch_lockdrop::DispatchLockdrop\">DispatchLockdrop</a>&lt;Runtime, DispatchValidator, DecodeLimit&gt;<div class=\"where\">where\n    Runtime: Config,\n    &lt;Runtime::RuntimeCall as Dispatchable&gt;::RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,\n    Runtime::RuntimeCall: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo,\n    &lt;Runtime as Config&gt;::AccountId: IsType&lt;AccountId32&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.array.html\">32</a>]&gt;,\n    DispatchValidator: DispatchValidateT&lt;&lt;Runtime as Config&gt;::AccountId, &lt;Runtime as Config&gt;::RuntimeCall&gt;,\n    DecodeLimit: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;,</div>"]],
"pallet_evm_precompile_sr25519":[["impl&lt;Runtime: Config&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_sr25519/struct.Sr25519Precompile.html\" title=\"struct pallet_evm_precompile_sr25519::Sr25519Precompile\">Sr25519Precompile</a>&lt;Runtime&gt;"]],
"pallet_evm_precompile_substrate_ecdsa":[["impl&lt;Runtime: Config&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_substrate_ecdsa/struct.SubstrateEcdsaPrecompile.html\" title=\"struct pallet_evm_precompile_substrate_ecdsa::SubstrateEcdsaPrecompile\">SubstrateEcdsaPrecompile</a>&lt;Runtime&gt;"]],
"pallet_evm_precompile_unified_accounts":[["impl&lt;R, UA&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_unified_accounts/struct.UnifiedAccountsPrecompile.html\" title=\"struct pallet_evm_precompile_unified_accounts::UnifiedAccountsPrecompile\">UnifiedAccountsPrecompile</a>&lt;R, UA&gt;<div class=\"where\">where\n    R: Config + Config,\n    &lt;R as Config&gt;::AccountId: IsType&lt;AccountId32&gt;,\n    UA: UnifiedAddressMapper&lt;R::AccountId&gt;,</div>"]],
"pallet_evm_precompile_xcm":[["impl&lt;Runtime, C&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_xcm/struct.XcmPrecompile.html\" title=\"struct pallet_evm_precompile_xcm::XcmPrecompile\">XcmPrecompile</a>&lt;Runtime, C&gt;<div class=\"where\">where\n    Runtime: Config + Config + Config + Config + AddressToAssetId&lt;&lt;Runtime as Config&gt;::AssetId&gt;,\n    &lt;&lt;Runtime as Config&gt;::RuntimeCall as Dispatchable&gt;::RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,\n    &lt;Runtime as Config&gt;::AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.array.html\">32</a>]&gt;,\n    &lt;Runtime as Config&gt;::RuntimeCall: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Call&lt;Runtime&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Call&lt;Runtime&gt;&gt; + Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo,\n    <a class=\"type\" href=\"pallet_evm_precompile_xcm/type.XBalanceOf.html\" title=\"type pallet_evm_precompile_xcm::XBalanceOf\">XBalanceOf</a>&lt;Runtime&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u128.html\">u128</a>&gt;,\n    &lt;Runtime as Config&gt;::CurrencyId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&lt;Runtime as Config&gt;::AssetId&gt;,\n    C: MaybeEquivalence&lt;Location, &lt;Runtime as Config&gt;::AssetId&gt;,</div>"]],
"pallet_evm_precompile_xvm":[["impl&lt;R, XC&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_xvm/struct.XvmPrecompile.html\" title=\"struct pallet_evm_precompile_xvm::XvmPrecompile\">XvmPrecompile</a>&lt;R, XC&gt;<div class=\"where\">where\n    R: Config,\n    &lt;&lt;R as Config&gt;::RuntimeCall as Dispatchable&gt;::RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;R::AccountId&gt;&gt;,\n    XC: XvmCall&lt;R::AccountId&gt;,</div>"]],
"precompile_utils":[]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()