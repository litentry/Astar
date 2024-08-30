(function() {var type_impls = {
"pallet_dapp_staking":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DAppTierRewards%3CMD,+NT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking/types.rs.html#1765-1810\">source</a><a href=\"#impl-DAppTierRewards%3CMD,+NT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;MD: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;, NT: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;&gt; <a class=\"struct\" href=\"pallet_dapp_staking/struct.DAppTierRewards.html\" title=\"struct pallet_dapp_staking::DAppTierRewards\">DAppTierRewards</a>&lt;MD, NT&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_claim\" class=\"method\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking/types.rs.html#1787-1809\">source</a><h4 class=\"code-header\">pub fn <a href=\"pallet_dapp_staking/struct.DAppTierRewards.html#tymethod.try_claim\" class=\"fn\">try_claim</a>(\n    &amp;mut self,\n    dapp_id: DAppId\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;(Balance, RankedTier), <a class=\"enum\" href=\"pallet_dapp_staking/enum.DAppTierError.html\" title=\"enum pallet_dapp_staking::DAppTierError\">DAppTierError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Consume reward for the specified dapp id, returning its amount and tier Id.\nIn case dapp isn’t applicable for rewards, or they have already been consumed, returns <code>None</code>.</p>\n</div></details></div></details>",0,"pallet_dapp_staking::types::DAppTierRewardsFor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-DAppTierRewards%3CMD,+NT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking/types.rs.html#1746\">source</a><a href=\"#impl-PartialEq-for-DAppTierRewards%3CMD,+NT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;MD: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;, NT: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"pallet_dapp_staking/struct.DAppTierRewards.html\" title=\"struct pallet_dapp_staking::DAppTierRewards\">DAppTierRewards</a>&lt;MD, NT&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking/types.rs.html#1746\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Self</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","pallet_dapp_staking::types::DAppTierRewardsFor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-DAppTierRewards%3CMD,+NT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking/types.rs.html#1749\">source</a><a href=\"#impl-Clone-for-DAppTierRewards%3CMD,+NT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;MD: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;, NT: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"pallet_dapp_staking/struct.DAppTierRewards.html\" title=\"struct pallet_dapp_staking::DAppTierRewards\">DAppTierRewards</a>&lt;MD, NT&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking/types.rs.html#1749\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","pallet_dapp_staking::types::DAppTierRewardsFor"],["<section id=\"impl-Eq-for-DAppTierRewards%3CMD,+NT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking/types.rs.html#1753\">source</a><a href=\"#impl-Eq-for-DAppTierRewards%3CMD,+NT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;MD: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;, NT: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"pallet_dapp_staking/struct.DAppTierRewards.html\" title=\"struct pallet_dapp_staking::DAppTierRewards\">DAppTierRewards</a>&lt;MD, NT&gt;</h3></section>","Eq","pallet_dapp_staking::types::DAppTierRewardsFor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeInfo-for-DAppTierRewards%3CMD,+NT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking/types.rs.html#1750\">source</a><a href=\"#impl-TypeInfo-for-DAppTierRewards%3CMD,+NT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;MD, NT&gt; TypeInfo for <a class=\"struct\" href=\"pallet_dapp_staking/struct.DAppTierRewards.html\" title=\"struct pallet_dapp_staking::DAppTierRewards\">DAppTierRewards</a>&lt;MD, NT&gt;<div class=\"where\">where\n    BoundedBTreeMap&lt;DAppId, RankedTier, MD&gt;: TypeInfo + 'static,\n    BoundedVec&lt;Balance, NT&gt;: TypeInfo + 'static,\n    MD: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt; + 'static,\n    NT: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt; + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Identity\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Identity\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Identity</a> = <a class=\"struct\" href=\"pallet_dapp_staking/struct.DAppTierRewards.html\" title=\"struct pallet_dapp_staking::DAppTierRewards\">DAppTierRewards</a>&lt;MD, NT&gt;</h4></section></summary><div class='docblock'>The type identifying for which type info is provided. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_info\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking/types.rs.html#1750\">source</a><a href=\"#method.type_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">type_info</a>() -&gt; Type</h4></section></summary><div class='docblock'>Returns the static type identifier for <code>Self</code>.</div></details></div></details>","TypeInfo","pallet_dapp_staking::types::DAppTierRewardsFor"],["<section id=\"impl-EncodeLike-for-DAppTierRewards%3CMD,+NT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking/types.rs.html#1742\">source</a><a href=\"#impl-EncodeLike-for-DAppTierRewards%3CMD,+NT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;MD: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;, NT: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;&gt; EncodeLike for <a class=\"struct\" href=\"pallet_dapp_staking/struct.DAppTierRewards.html\" title=\"struct pallet_dapp_staking::DAppTierRewards\">DAppTierRewards</a>&lt;MD, NT&gt;<div class=\"where\">where\n    BoundedBTreeMap&lt;DAppId, RankedTier, MD&gt;: Encode,\n    BoundedVec&lt;Balance, NT&gt;: Encode,</div></h3></section>","EncodeLike","pallet_dapp_staking::types::DAppTierRewardsFor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-DAppTierRewards%3CMD,+NT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking/types.rs.html#1742\">source</a><a href=\"#impl-Encode-for-DAppTierRewards%3CMD,+NT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;MD: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;, NT: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;&gt; Encode for <a class=\"struct\" href=\"pallet_dapp_staking/struct.DAppTierRewards.html\" title=\"struct pallet_dapp_staking::DAppTierRewards\">DAppTierRewards</a>&lt;MD, NT&gt;<div class=\"where\">where\n    BoundedBTreeMap&lt;DAppId, RankedTier, MD&gt;: Encode,\n    BoundedVec&lt;Balance, NT&gt;: Encode,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking/types.rs.html#1742\">source</a><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>If possible give a hint of expected size of the encoding. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_to\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking/types.rs.html#1742\">source</a><a href=\"#method.encode_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode_to</a>&lt;__CodecOutputEdqy: Output + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    &amp;self,\n    __codec_dest_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut __CodecOutputEdqy</a>\n)</h4></section></summary><div class='docblock'>Convert self to a slice and append it to the destination.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode</a>(&amp;self) -&gt; <a class=\"struct\" href=\"pallet_dapp_staking/struct.Vec.html\" title=\"struct pallet_dapp_staking::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Convert self to an owned vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.using_encoded\" class=\"method trait-impl\"><a href=\"#method.using_encoded\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">using_encoded</a>&lt;R, F&gt;(&amp;self, f: F) -&gt; R<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>]) -&gt; R,</div></h4></section></summary><div class='docblock'>Convert self to a slice and then invoke the given closure with it.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_size\" class=\"method trait-impl\"><a href=\"#method.encoded_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Calculates the encoded size. <a>Read more</a></div></details></div></details>","Encode","pallet_dapp_staking::types::DAppTierRewardsFor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-DAppTierRewards%3CMD,+NT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking/types.rs.html#1745\">source</a><a href=\"#impl-Debug-for-DAppTierRewards%3CMD,+NT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;MD: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;, NT: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;&gt; <a class=\"trait\" href=\"pallet_dapp_staking/trait.Debug.html\" title=\"trait pallet_dapp_staking::Debug\">Debug</a> for <a class=\"struct\" href=\"pallet_dapp_staking/struct.DAppTierRewards.html\" title=\"struct pallet_dapp_staking::DAppTierRewards\">DAppTierRewards</a>&lt;MD, NT&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking/types.rs.html#1745\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"pallet_dapp_staking/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"pallet_dapp_staking/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","pallet_dapp_staking::types::DAppTierRewardsFor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MaxEncodedLen-for-DAppTierRewards%3CMD,+NT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking/types.rs.html#1744\">source</a><a href=\"#impl-MaxEncodedLen-for-DAppTierRewards%3CMD,+NT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;MD: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;, NT: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;&gt; MaxEncodedLen for <a class=\"struct\" href=\"pallet_dapp_staking/struct.DAppTierRewards.html\" title=\"struct pallet_dapp_staking::DAppTierRewards\">DAppTierRewards</a>&lt;MD, NT&gt;<div class=\"where\">where\n    BoundedBTreeMap&lt;DAppId, RankedTier, MD&gt;: MaxEncodedLen,\n    BoundedVec&lt;Balance, NT&gt;: MaxEncodedLen,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.max_encoded_len\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking/types.rs.html#1744\">source</a><a href=\"#method.max_encoded_len\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">max_encoded_len</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Upper bound, in bytes, of the maximum encoded size of this item.</div></details></div></details>","MaxEncodedLen","pallet_dapp_staking::types::DAppTierRewardsFor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-DAppTierRewards%3CMD,+NT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking/types.rs.html#1747\">source</a><a href=\"#impl-Default-for-DAppTierRewards%3CMD,+NT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;MD: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;, NT: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"pallet_dapp_staking/struct.DAppTierRewards.html\" title=\"struct pallet_dapp_staking::DAppTierRewards\">DAppTierRewards</a>&lt;MD, NT&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking/types.rs.html#1747\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","pallet_dapp_staking::types::DAppTierRewardsFor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decode-for-DAppTierRewards%3CMD,+NT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking/types.rs.html#1743\">source</a><a href=\"#impl-Decode-for-DAppTierRewards%3CMD,+NT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;MD: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;, NT: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;&gt; Decode for <a class=\"struct\" href=\"pallet_dapp_staking/struct.DAppTierRewards.html\" title=\"struct pallet_dapp_staking::DAppTierRewards\">DAppTierRewards</a>&lt;MD, NT&gt;<div class=\"where\">where\n    BoundedBTreeMap&lt;DAppId, RankedTier, MD&gt;: Decode,\n    BoundedVec&lt;Balance, NT&gt;: Decode,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking/types.rs.html#1743\">source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode</a>&lt;__CodecInputEdqy: Input&gt;(\n    __codec_input_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut __CodecInputEdqy</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, Error&gt;</h4></section></summary><div class='docblock'>Attempt to deserialise the value from input.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode_into\" class=\"method trait-impl\"><a href=\"#method.decode_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode_into</a>&lt;I&gt;(\n    input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut I</a>,\n    dst: &amp;mut <a class=\"union\" href=\"https://doc.rust-lang.org/1.77.0/core/mem/maybe_uninit/union.MaybeUninit.html\" title=\"union core::mem::maybe_uninit::MaybeUninit\">MaybeUninit</a>&lt;Self&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;DecodeFinished, Error&gt;<div class=\"where\">where\n    I: Input,</div></h4></section></summary><div class='docblock'>Attempt to deserialize the value from input into a pre-allocated piece of memory. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.skip\" class=\"method trait-impl\"><a href=\"#method.skip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">skip</a>&lt;I&gt;(input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut I</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, Error&gt;<div class=\"where\">where\n    I: Input,</div></h4></section></summary><div class='docblock'>Attempt to skip the encoded value from input. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_fixed_size\" class=\"method trait-impl\"><a href=\"#method.encoded_fixed_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_fixed_size</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Returns the fixed encoded size of the type. <a>Read more</a></div></details></div></details>","Decode","pallet_dapp_staking::types::DAppTierRewardsFor"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()