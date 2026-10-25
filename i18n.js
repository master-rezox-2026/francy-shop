/* =====================================================================
   Francy China Item Online Shop – භාෂා (Language) ගොනුව: English / සිංහල / தமிழ்
   - S(සිංහල මූලය, English, தமிழ்)       : HTML හි ඇති සිංහල පෙළට
   - E(English මූලය, සිංහල, தமிழ்)       : HTML හි ඇති English පෙළට
   - K(key, English, සිංහල, தமிழ்)       : JavaScript පණිවිඩ සඳහා
   අලුත් භාෂාවක් / වචනයක් වෙනස් කිරීමට මෙම ගොනුව පමණක් සංස්කරණය කරන්න.
   ===================================================================== */
(function () {
  const D = {};
  const norm = s => String(s).replace(/\s+/g, ' ').trim();
  const S = (src, en, ta) => { D[norm(src)] = { en, si: norm(src), ta }; };
  const E = (src, si, ta) => { D[norm(src)] = { en: norm(src), si, ta }; };
  const K = (key, en, si, ta) => { D[key] = { en, si, ta }; };

  /* ---------- Header / hero / list ---------- */
  S('🎉 ශ්‍රී ලංකාවේ අංක 1 Pre-Loved Fashion වෙළඳපොළ - නොමිලේ ඇඩ් දමන්න!', '🎉 Sri Lanka\'s #1 Pre-Loved Fashion marketplace – post ads for free!', '🎉 இலங்கையின் நம்பர் 1 பயன்படுத்திய ஃபேஷன் சந்தை – இலவசமாக விளம்பரம் இடுங்கள்!');
  E('Pre-Loved Market', 'Pre-Loved වෙළඳපොළ', 'பயன்படுத்திய பொருட்கள் சந்தை');
  S('ඇඳුම්, සපත්තු, නගරය හෝ වෙළඳනාමය සොයන්න...', 'Search clothes, shoes, city or brand...', 'ஆடைகள், காலணிகள், நகரம் அல்லது பிராண்ட் தேடுங்கள்...');
  S('සොයන්න (උදා: Nike, Denim, Colombo)...', 'Search (e.g. Nike, Denim, Colombo)...', 'தேடுங்கள் (எ.கா: Nike, Denim, Colombo)...');
  S('ඇඩ් එකක් දාන්න', 'Post an Ad', 'விளம்பரம் இடுங்கள்');
  S('ඇඩ් දාන්න', 'Post Ad', 'விளம்பரம் இடு');
  E('Admin Panel', 'පරිපාලක පුවරුව', 'நிர்வாகப் பலகை');
  E('✨ Smart Thrift Shopping', '✨ ස්මාර්ට් Thrift සාප්පු සවාරිය', '✨ ஸ்மார்ட் த்ரிஃப்ட் ஷாப்பிங்');
  S('ඔබට අනවශ්‍ය ඇඳුම්, සපත්තු', 'Turn your unwanted clothes and shoes', 'உங்களுக்குத் தேவையில்லாத ஆடைகள், காலணிகளை');
  S('මුදල් බවට හරවන්න!', 'into cash!', 'பணமாக மாற்றுங்கள்!');
  S('භාවිත කළ උසස් තත්වයේ ඇඳුම් සහ සපත්තු සෘජුවම විකුණන්න සහ මිලදී ගන්න. කිසිදු intermediary ගාස්තුවක් නැත.', 'Buy and sell quality pre-loved clothes and shoes directly. No middleman fees.', 'தரமான பயன்படுத்திய ஆடைகள், காலணிகளை நேரடியாக வாங்கவும் விற்கவும். இடைத்தரகர் கட்டணம் இல்லை.');
  S('සියල්ල (All)', 'All', 'அனைத்தும்');
  S('ඇඳුම් (Clothes)', 'Clothes', 'ஆடைகள்');
  S('සපත්තු (Shoes)', 'Shoes', 'காலணிகள்');
  S('උපාංග (Accessories)', 'Accessories', 'அணிகலன்கள்');
  S('නවතම භාණ්ඩ', 'Latest Items', 'புதிய பொருட்கள்');
  S('සියල්ල', 'All', 'அனைத்தும்');
  S('තෝරාගත් භාණ්ඩ පෙන්වයි', 'Showing selected items', 'தேர்ந்தெடுத்த பொருட்கள் காட்டப்படுகின்றன');
  S('පිළිවෙල:', 'Sort:', 'வரிசை:');
  S('නවතම ඒව (Newest First)', 'Newest First', 'புதியவை முதலில்');
  S('මිල: අඩුම සිට වැඩිම (Price: Low to High)', 'Price: Low to High', 'விலை: குறைவு முதல் அதிகம்');
  S('මිල: වැඩිම සිට අඩුම (Price: High to Low)', 'Price: High to Low', 'விலை: அதிகம் முதல் குறைவு');
  S('කිසිදු භාණ්ඩයක් හමු නොවුනි', 'No items found', 'எந்தப் பொருளும் கிடைக்கவில்லை');
  S('ඔබ සෙවූ පරාමිතීන්ට අදාළ භාණ්ඩ දැනට නොමැත. කරුණාකර වෙනත් නමක් සෙවුම් කරන්න.', 'There are no items matching your search. Please try a different keyword.', 'நீங்கள் தேடியவற்றுக்குப் பொருந்தும் பொருட்கள் தற்போது இல்லை. வேறு சொல்லில் தேடுங்கள்.');
  S('සියලුම භාණ්ඩ පෙන්වන්න', 'Show all items', 'அனைத்துப் பொருட்களையும் காட்டு');
  S('ආරක්ෂිත මිලදී ගැනීමේ උපදෙස්', 'Safe Buying Tips', 'பாதுகாப்பாக வாங்குவதற்கான குறிப்புகள்');
  S('භාණ්ඩය පරික්ෂා කිරීමට පෙර කිසිවිටෙකත් අත්පිට මුදල් නොගෙවන්න.', 'Never pay in advance before inspecting the item.', 'பொருளைப் பரிசோதிப்பதற்கு முன் ஒருபோதும் முன்பணம் செலுத்த வேண்டாம்.');
  S('විකුණුම්කරුගේ WhatsApp අංකයට සෘජුවම සම්බන්ධ වී විස්තර තහවුරු කරගන්න.', 'Contact the seller directly on WhatsApp and confirm the details.', 'விற்பனையாளரின் WhatsApp எண்ணில் நேரடியாகத் தொடர்புகொண்டு விவரங்களை உறுதிப்படுத்துங்கள்.');
  S('Cash on Delivery (COD) කුරියර් පහසුකම් භාවිතා කිරීමට උත්සාහ කරන්න.', 'Try to use Cash on Delivery (COD) courier services.', 'Cash on Delivery (COD) கூரியர் சேவைகளைப் பயன்படுத்த முயலுங்கள்.');

  /* ---------- Footer / legal ---------- */
  S('ශ්‍රී ලාංකිකයන් සඳහාම විශේෂයෙන් සකස් කළ භාවිත කළ ඇඳුම් සහ සපත්තු මිලදී ගැනීමේ සහ විකිණීමේ අංක 1 වේදිකාව.', 'The #1 platform made especially for Sri Lankans to buy and sell pre-loved clothes and shoes.', 'இலங்கையர்களுக்காகவே உருவாக்கப்பட்ட, பயன்படுத்திய ஆடைகள், காலணிகளை வாங்கவும் விற்கவும் உதவும் நம்பர் 1 தளம்.');
  S('ඉක්මන් පිවිසුම්', 'Quick Links', 'விரைவு இணைப்புகள்');
  S('ඇඩ් එකක් පළ කරන්න', 'Post an Ad', 'விளம்பரம் இடுங்கள்');
  S('නීතිමය සහ පද', 'Legal & Terms', 'சட்டம் & நிபந்தனைகள்');
  S('Privacy Policy (රහස්‍යතා ප්‍රතිපත්තිය)', 'Privacy Policy', 'தனியுரிமைக் கொள்கை');
  S('Terms of Service (සේවා කොන්දේසි)', 'Terms of Service', 'சேவை நிபந்தனைகள்');
  S('About Us (අප ගැන)', 'About Us', 'எங்களைப் பற்றி');
  S('Contact Us (සම්බන්ධ වන්න)', 'Contact Us', 'தொடர்புகொள்ள');
  S('සම්බන්ධ කර ගැනීමට', 'Contact', 'தொடர்புக்கு');
  S('විමසීම් සඳහා: support@francychina.lk', 'For enquiries: support@francychina.lk', 'விசாரணைகளுக்கு: support@francychina.lk');
  E('Designed for fast C2C trading.', 'වේගවත් C2C වෙළඳාම සඳහා සැලසුම් කරන ලදී.', 'வேகமான C2C வர்த்தகத்திற்காக வடிவமைக்கப்பட்டது.');
  E('© 2026 Francy China Item Online Shop. All rights reserved.', '© 2026 Francy China Item Online Shop. සියලුම හිමිකම් ඇවිරිණි.', '© 2026 Francy China Item Online Shop. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.');
  S('Francy China Item Online Shop අඩවිය පරිශීලකයින්ගේ රහස්‍යතාවය ඉහළින්ම සුරකියි. අප විසින් ඔබගේ දුරකථන අංකය සහ විස්තර ලබා ගන්නේ C2C මිලදී ගැනීමේ ක්‍රියාවලිය පහසු කිරීම සඳහා පමණි.', 'Francy China Item Online Shop values your privacy. We collect your phone number and details only to make the C2C buying and selling process easier.', 'Francy China Item Online Shop உங்கள் தனியுரிமையை மதிக்கிறது. C2C வாங்கல் விற்றலை எளிதாக்குவதற்காக மட்டுமே உங்கள் தொலைபேசி எண்ணையும் விவரங்களையும் சேகரிக்கிறோம்.');
  S('1. Francy China Item Online Shop යනු විකුණුම්කරුවන් සහ මිලදී ගන්නන් සම්බන්ධ කරන නොමිලේ සපයනු ලබන classifieds වේදිකාවකි.', '1. Francy China Item Online Shop is a free classifieds platform that connects sellers and buyers.', '1. Francy China Item Online Shop என்பது விற்பனையாளர்களையும் வாங்குபவர்களையும் இணைக்கும் இலவச விளம்பரத் தளமாகும்.');
  S('2. නීති විරෝධී හෝ අසැබි දේවල් පළ කිරීම සstrictly තහනම් වේ.', '2. Posting illegal or obscene content is strictly prohibited.', '2. சட்டவிரோதமான அல்லது ஆபாசமான உள்ளடக்கத்தை வெளியிடுவது கண்டிப்பாகத் தடைசெய்யப்பட்டுள்ளது.');
  S('3. ඕනෑම ඇඩ් එකක් Approve කිරීම හෝ Reject කිරීමේ සම්පූර්ණ බලතල Admin සතු වේ.', '3. The Admin has full authority to approve or reject any ad.', '3. எந்த விளம்பரத்தையும் அங்கீகரிக்க அல்லது நிராகரிக்க நிர்வாகிக்கு முழு அதிகாரம் உண்டு.');
  S('Francy China Item Online Shop යනු ශ්‍රී ලංකාවේ භාවිත කළ ඇඳුම් සහ සපත්තු නැවත භාවිතයට ගැනීමට (Sustainable Fashion) දිරිගන්වන C2C Marketplace එකකි.', 'Francy China Item Online Shop is a C2C marketplace that encourages reusing pre-loved clothes and shoes in Sri Lanka (Sustainable Fashion).', 'Francy China Item Online Shop என்பது இலங்கையில் பயன்படுத்திய ஆடைகள், காலணிகளை மீண்டும் பயன்படுத்த ஊக்குவிக்கும் (நிலையான ஃபேஷன்) C2C சந்தையாகும்.');
  S('ඔබගේ ගැටළු සහ උපදෙස් සඳහා අප වෙත විද්‍යුත් තැපෑලක් යොමු කරන්න:', 'For your questions and suggestions, please email us:', 'உங்கள் கேள்விகள், ஆலோசனைகளுக்கு எங்களுக்கு மின்னஞ்சல் அனுப்புங்கள்:');
  E('Email: support@francychina.lk', 'විද්‍යුත් තැපෑල: support@francychina.lk', 'மின்னஞ்சல்: support@francychina.lk');

  /* ---------- Item detail ---------- */
  E('Close', 'වසන්න', 'மூடு');
  E('Sold By', 'විකුණුම්කරු', 'விற்பனையாளர்');
  E('Verified Seller', 'තහවුරු කළ විකුණුම්කරු', 'சரிபார்க்கப்பட்ட விற்பனையாளர்');
  E('Condition:', 'තත්වය:', 'நிலை:');
  E('Location:', 'ස්ථානය:', 'இடம்:');
  E('Francy China Item Online Shop · Pre-loved Deal', 'Francy China Item Online Shop · Pre-loved දීමනාව', 'Francy China Item Online Shop · பயன்படுத்திய பொருள் சலுகை');
  S('විකුණුම්කරු සමඟ සෘජුවම ගනුදෙනු කරන්න', 'Deal directly with the seller', 'விற்பனையாளருடன் நேரடியாக வர்த்தகம் செய்யுங்கள்');
  S('ආරක්ෂිත ගනුදෙනුවට: මුදල් ගෙවීමට පෙර භාණ්ඩය පරීක්ෂා කරන්න. හැකිනම් මුහුණට මුහුණ හමුවී ගනුදෙනු කරන්න.', 'For a safe deal: inspect the item before paying, and meet in person if possible.', 'பாதுகாப்பான வர்த்தகத்திற்கு: பணம் செலுத்தும் முன் பொருளைப் பரிசோதியுங்கள்; முடிந்தால் நேரில் சந்தித்து வர்த்தகம் செய்யுங்கள்.');
  S('WhatsApp හරහා සෘජුවම මිලදී ගන්න', 'Buy directly via WhatsApp', 'WhatsApp மூலம் நேரடியாக வாங்குங்கள்');
  E('Share', 'බෙදාගන්න', 'பகிர்');
  S('භාණ්ඩ විස්තරය (Item description)', 'Item description', 'பொருள் விவரம்');
  S('විකුණුම්කරුට Message එකක් යවන්න', 'Send a message to the seller', 'விற்பனையாளருக்குச் செய்தி அனுப்புங்கள்');
  S('ඔබගේ විස්තර ඇතුළත් කළ පසු WhatsApp ඇප් එක සෘජුවම විවෘත වේ.', 'After you enter your details, WhatsApp will open directly.', 'உங்கள் விவரங்களை உள்ளிட்டதும் WhatsApp நேரடியாகத் திறக்கும்.');
  S('ඔබගේ නම (Buyer Name) *', 'Your Name (Buyer) *', 'உங்கள் பெயர் (வாங்குபவர்) *');
  S('දුරකථන අංකය (Phone) *', 'Phone Number *', 'தொலைபேசி எண் *');
  S('ලිපිනය / නගරය (Delivery Location) *', 'Address / City (Delivery Location) *', 'முகவரி / நகரம் (டெலிவரி இடம்) *');
  S('විශේෂ සටහන් (Optional - Size/Color)', 'Special notes (optional – size/colour)', 'சிறப்புக் குறிப்புகள் (விருப்பம் – அளவு/நிறம்)');
  S('WhatsApp වෙත යොමු වන්න', 'Continue to WhatsApp', 'WhatsApp-க்குச் செல்லுங்கள்');
  S('උදා: කසුන් පෙරේරා', 'e.g. Kasun Perera', 'எ.கா: கசுன் பெரேரா');
  S('උදා: 0771234567', 'e.g. 0771234567', 'எ.கா: 0771234567');
  S('උදා: නුගේගොඩ, කොළඹ', 'e.g. Nugegoda, Colombo', 'எ.கா: நுகேகொட, கொழும்பு');
  S('උදා: Size M ද? Courier කරන්න පුලුවන්ද?', 'e.g. Is it size M? Can you courier it?', 'எ.கா: Size M-ஆ? கூரியர் அனுப்ப முடியுமா?');

  /* ---------- Post / edit ad ---------- */
  S('නව ඇඩ් එකක් පළ කරන්න', 'Post a New Ad', 'புதிய விளம்பரம் இடுங்கள்');
  S('ඔබගේ භාණ්ඩයේ විස්තර ඇතුළත් කරන්න. Admin අනුමැතියෙන් පසු සජීවී වේ.', 'Enter your item details. It goes live after Admin approval.', 'உங்கள் பொருளின் விவரங்களை உள்ளிடுங்கள். நிர்வாகி அங்கீகரித்த பின் நேரலையாகும்.');
  S('භාණ්ඩයේ නම (Title) *', 'Item Title *', 'பொருளின் பெயர் (தலைப்பு) *');
  S('වර්ගය (Category) *', 'Category *', 'வகை *');
  S('තත්වය (Condition) *', 'Condition *', 'நிலை *');
  S('Like New (අලුත් වගේමයි)', 'Like New', 'புத்தம் புதியது போல');
  S('Good (හොඳ තත්වයේ)', 'Good', 'நல்ல நிலை');
  S('Used (පාවිච්චි කළ)', 'Used', 'பயன்படுத்தியது');
  S('මිල LKR (Price) *', 'Price (LKR) *', 'விலை (LKR) *');
  S('නගරය (City) *', 'City *', 'நகரம் *');
  S('WhatsApp අංකය (Seller WhatsApp) *', 'WhatsApp Number (Seller) *', 'WhatsApp எண் (விற்பனையாளர்) *');
  S('ඡායාරූප (Photos) *', 'Photos *', 'புகைப்படங்கள் *');
  S('– උපරිම 6ක්. පළමු එක Main ඡායාරූපයයි.', '– up to 6. The first one is the main photo.', '– அதிகபட்சம் 6. முதலாவது முதன்மைப் படம்.');
  S('★ = Main කරන්න • ✂ = Crop • ✕ = ඉවත් කරන්න', '★ = Make main • ✂ = Crop • ✕ = Remove', '★ = முதன்மை ஆக்கு • ✂ = Crop • ✕ = நீக்கு');
  S('එකතු කරන්න', 'Add', 'சேர்');
  S('හෝ Image URL එකක් (https://...)', 'or an Image URL (https://...)', 'அல்லது பட URL (https://...)');
  S('විස්තරය (Description) *', 'Description *', 'விவரம் *');
  S('ඔබ පළ කරන ඇඩ් එක පරිපාලක (Admin) විසින් පරීක්ෂා කර අනුමත (Approve) කළ පසු වෙබ් අඩවියේ පෙන්වනු ඇත.', 'Your ad will appear on the site after the Admin reviews and approves it.', 'நீங்கள் இடும் விளம்பரத்தை நிர்வாகி சரிபார்த்து அங்கீகரித்த பிறகே தளத்தில் தோன்றும்.');
  S('Preview බලන්න', 'Preview', 'முன்னோட்டம் பார்');
  S('ඇඩ් එක පළ කරන්න (Submit for Approval)', 'Submit for Approval', 'அங்கீகாரத்திற்குச் சமர்ப்பி');
  S('උදා: Mens Denim Jacket (Size L)', 'e.g. Mens Denim Jacket (Size L)', 'எ.கா: Mens Denim Jacket (Size L)');
  S('උදා: Kandy', 'e.g. Kandy', 'எ.கா: Kandy');
  S('භාණ්ඩය පිළිබඳ වැඩිදුර විස්තර, Size, Brand ආදිය ඇතුළත් කරන්න...', 'Add more details about the item – size, brand, etc...', 'பொருளைப் பற்றிய கூடுதல் விவரங்கள், அளவு, பிராண்ட் போன்றவற்றை உள்ளிடுங்கள்...');
  S('ඡායාරූපය Crop කරන්න', 'Crop the photo', 'படத்தை Crop செய்யுங்கள்');
  S('රාමුව ඇදගෙන ගොස් හෝ කොනි අදින්න. පින්තූරය Move කර Zoom (scroll / pinch) කළ හැක.', 'Drag the frame or its corners. You can also move and zoom (scroll / pinch) the picture.', 'சட்டத்தையோ அதன் மூலைகளையோ இழுக்கவும். படத்தை நகர்த்தி Zoom (scroll / pinch) செய்யலாம்.');
  E('Free', 'නිදහස්', 'தனிப்பயன்');
  E('Reset', 'යළි පිහිටුවන්න', 'மீட்டமை');
  E('Zoom in', 'විශාල කරන්න', 'பெரிதாக்கு');
  E('Zoom out', 'කුඩා කරන්න', 'சிறிதாக்கு');
  E('Rotate left', 'වමට කරකවන්න', 'இடப்புறம் சுழற்று');
  E('Rotate right', 'දකුණට කරකවන්න', 'வலப்புறம் சுழற்று');
  S('අවලංගු', 'Cancel', 'ரத்து');
  S('Crop කරන්න', 'Crop', 'Crop செய்');
  S('Preview – ඔබේ ඇඩ් එක පෙනෙන්නේ මෙලෙසයි (තවම පළ කර නැත)', 'Preview – this is how your ad will look (not published yet)', 'முன்னோட்டம் – உங்கள் விளம்பரம் இப்படித் தோன்றும் (இன்னும் வெளியிடப்படவில்லை)');
  S('← ආපසු Edit කරන්න', '← Back to edit', '← திருத்தத்திற்குத் திரும்பு');
  S('හරි, පළ කරන්න', 'OK, submit', 'சரி, சமர்ப்பி');

  /* ---------- Auth ---------- */
  S('ලොග් වන්න (Login)', 'Login', 'உள்நுழை');
  S('ලියාපදිංචි වන්න', 'Register', 'பதிவு செய்');
  S('තහවුරු කිරීමේ Email එක නැවත යවන්න', 'Resend the confirmation email', 'உறுதிப்படுத்தும் மின்னஞ்சலை மீண்டும் அனுப்பு');
  S('විද්‍යුත් තැපෑල (Email)', 'Email', 'மின்னஞ்சல்');
  S('මුරපදය (Password)', 'Password', 'கடவுச்சொல்');
  S('මුරපදය අමතකද? (Forgot Password)', 'Forgot password?', 'கடவுச்சொல்லை மறந்துவிட்டீர்களா?');
  E('Login', 'ලොග් වන්න', 'உள்நுழை');
  S('සම්පූර්ණ නම (Name)', 'Full Name', 'முழு பெயர்');
  E('Register Account', 'ගිණුම සාදන්න', 'கணக்கை உருவாக்கு');
  E('seller@gmail.com', 'seller@gmail.com', 'seller@gmail.com');
  S('කසුන් සංජීව', 'Kasun Sanjeewa', 'கசுன் சஞ்சீவ');
  S('මුරපදය අමතකද?', 'Forgot password?', 'கடவுச்சொல்லை மறந்துவிட்டீர்களா?');
  S('ඔබගේ Email එක දෙන්න. මුරපදය වෙනස් කිරීමේ Link එකක් එයට එවනවා.', 'Enter your email. We will send a password reset link to it.', 'உங்கள் மின்னஞ்சலை உள்ளிடுங்கள். கடவுச்சொல் மாற்றும் இணைப்பை அதற்கு அனுப்புவோம்.');
  S('Reset Link එක එවන්න', 'Send reset link', 'மீட்டமை இணைப்பை அனுப்பு');
  S('← Login වෙත ආපසු', '← Back to login', '← உள்நுழைவுக்குத் திரும்பு');
  S('අලුත් මුරපදය ඇතුළත් කරන්න', 'Enter your new password', 'புதிய கடவுச்சொல்லை உள்ளிடுங்கள்');
  S('අලුත් මුරපදය (අවම අක්ෂර 6)', 'New password (min. 6 characters)', 'புதிய கடவுச்சொல் (குறைந்தது 6 எழுத்துகள்)');
  S('නැවත ඇතුළත් කරන්න', 'Re-enter password', 'மீண்டும் உள்ளிடுங்கள்');
  S('මුරපදය වෙනස් කරන්න', 'Change password', 'கடவுச்சொல்லை மாற்று');

  /* ---------- Profile page ---------- */
  E('← Back to shop', '← සාප්පුවට ආපසු', '← கடைக்குத் திரும்பு');
  E('Logout', 'ඉවත් වන්න', 'வெளியேறு');
  E('My Ads', 'මගේ ඇඩ්ස්', 'என் விளம்பரங்கள்');
  E('Profile Details', 'ප්‍රොෆයිල් විස්තර', 'சுயவிவர விவரங்கள்');
  E('Password', 'මුරපදය', 'கடவுச்சொல்');
  E('Total', 'මුළු ගණන', 'மொத்தம்');
  E('Approved', 'අනුමත', 'அங்கீகரிக்கப்பட்டவை');
  E('Pending', 'බලාපොරොත්තුවෙන්', 'நிலுவையில்');
  E('Rejected', 'ප්‍රතික්ෂේප', 'நிராகரிக்கப்பட்டவை');
  E('Post New Ad', 'නව ඇඩ් එකක් දාන්න', 'புதிய விளம்பரம் இடு');
  E('Your ads', 'ඔබගේ ඇඩ්ස්', 'உங்கள் விளம்பரங்கள்');
  E('Edit or delete your ads here. Editing an ad sends it for Admin approval again.', 'ඔබගේ ඇඩ් මෙතැනින් Edit හෝ Delete කළ හැක. Edit කළ ඇඩ් එකක් නැවත Admin අනුමැතියට යයි.', 'உங்கள் விளம்பரங்களை இங்கே திருத்தலாம் அல்லது நீக்கலாம். திருத்தப்பட்ட விளம்பரம் மீண்டும் நிர்வாகி அங்கீகாரத்திற்குச் செல்லும்.');
  E('Login Email', 'ලොගින් Email', 'உள்நுழைவு மின்னஞ்சல்');
  E('(cannot be changed)', '(වෙනස් කළ නොහැක)', '(மாற்ற முடியாது)');
  E('Name *', 'නම *', 'பெயர் *');
  E('Phone / WhatsApp number', 'දුරකථන / WhatsApp අංකය', 'தொலைபேசி / WhatsApp எண்');
  E('Used to auto-fill new ads.', 'අලුත් ඇඩ් දැමීමේදී මෙය ස්වයංක්‍රීයව පිරවේ.', 'புதிய விளம்பரங்களில் தானாக நிரப்பப்படும்.');
  E('City', 'නගරය', 'நகரம்');
  E('About me (Bio)', 'මා ගැන (Bio)', 'என்னைப் பற்றி (Bio)');
  E('Save details', 'විස්තර සුරකින්න', 'விவரங்களைச் சேமி');
  E('Choose a new password', 'අලුත් මුරපදයක් තෝරන්න', 'புதிய கடவுச்சொல்லைத் தேர்ந்தெடுங்கள்');
  E('Colombo', 'Colombo', 'Colombo');
  E('0771234567', '0771234567', '0771234567');

  /* ---------- Language names (menu) ---------- */
  K('lang.name', 'English', 'සිංහල', 'தமிழ்');
  K('lang.title', 'Language', 'භාෂාව', 'மொழி');

  /* ---------- Labels used in JS ---------- */
  K('cat.ALL', 'All', 'සියල්ල', 'அனைத்தும்');
  K('cat.Clothes', 'Clothes', 'ඇඳුම්', 'ஆடைகள்');
  K('cat.Shoes', 'Shoes', 'සපත්තු', 'காலணிகள்');
  K('cat.Accessories', 'Bags & Accessories', 'බෑග් සහ උපාංග', 'பைகள் மற்றும் அணிகலன்கள்');\n  K('cat.Beauty', 'Beauty & Creams', 'රූපලාවණ්‍ය සහ ක්‍රීම්', 'அழகு மற்றும் கிரீம்கள்');\n  K('cat.Imported', 'China Imports', 'චීනයෙන් ආනයනය කළ භාණ්ඩ', 'சீன இறக்குமதிப் பொருட்கள்');
  K('cond.Like New', 'Like New', 'අලුත් වගේමයි', 'புத்தம் புதியது போல');
  K('cond.Good', 'Good', 'හොඳ තත්වයේ', 'நல்ல நிலை');
  K('cond.Used', 'Used', 'පාවිච්චි කළ', 'பயன்படுத்தியது');
  K('status.APPROVED', 'Approved', 'අනුමත', 'அங்கீகரிக்கப்பட்டது');
  K('status.PENDING', 'Pending', 'බලාපොරොත්තුවෙන්', 'நிலுவையில்');
  K('status.REJECTED', 'Rejected', 'ප්‍රතික්ෂේප', 'நிராகரிக்கப்பட்டது');
  K('items_found', '{n} items found', 'භාණ්ඩ {n} ක් සොයා ගන්නා ලදී', '{n} பொருட்கள் கிடைத்தன');
  K('cfg_missing', '⚠️ Supabase details are not yet entered in config.js.', '⚠️ config.js ගොනුවේ Supabase විස්තර තවම ඇතුළත් කර නැත.', '⚠️ config.js கோப்பில் Supabase விவரங்கள் இன்னும் உள்ளிடப்படவில்லை.');
  K('data_load_error', 'Could not load data.', 'දත්ත ලබාගැනීමේ දෝෂයක්.', 'தரவைப் பெற முடியவில்லை.');
  K('please_wait', 'Please wait...', 'රැඳී සිටින්න...', 'காத்திருங்கள்...');
  K('seller', 'Seller', 'විකුණුම්කරු', 'விற்பனையாளர்');
  K('order', 'Order', 'ඇණවුම', 'ஆர்டர்');
  K('condition_label', 'Condition: {c}', 'තත්වය: {c}', 'நிலை: {c}');
  K('wa.msg', '👋 Hello! I saw your ad on Francy China Item Online Shop.\n\n📦 *Item:* {title}\n💰 *Price:* Rs. {price}\n\n*My details (Buyer):*\n👤 Name: {name}\n📞 Phone: {phone}\n📍 Address: {address}\n{note}\nI would like to buy this item. Please confirm the details!', '👋 හලෝ! මම Francy China Item Online Shop වෙබ් අඩවියෙන් ඔබගේ ඇඩ් එක දැක්කා.\n\n📦 *භාණ්ඩය:* {title}\n💰 *මිල:* Rs. {price}\n\n*මගේ විස්තර (Buyer Details):*\n👤 නම: {name}\n📞 දුරකථන: {phone}\n📍 ලිපිනය: {address}\n{note}\nමම මේ භාණ්ඩය මිලදී ගැනීමට කැමතියි. විස්තර තහවුරු කරන්න!', '👋 வணக்கம்! Francy China Item Online Shop தளத்தில் உங்கள் விளம்பரத்தைப் பார்த்தேன்.\n\n📦 *பொருள்:* {title}\n💰 *விலை:* Rs. {price}\n\n*என் விவரங்கள் (வாங்குபவர்):*\n👤 பெயர்: {name}\n📞 தொலைபேசி: {phone}\n📍 முகவரி: {address}\n{note}\nஇந்தப் பொருளை வாங்க விரும்புகிறேன். விவரங்களை உறுதிப்படுத்துங்கள்!');
  K('wa.note', '📝 Notes: {note}\n', '📝 සටහන්: {note}\n', '📝 குறிப்புகள்: {note}\n');
  K('link_copied', 'Link copied ✔', 'Link එක Copy කළා ✔', 'இணைப்பு நகலெடுக்கப்பட்டது ✔');

  /* photos */
  K('photo.add', 'Add photos', 'ඡායාරූප එකතු කරන්න', 'படங்களைச் சேர்');
  K('photo.main', 'MAIN', 'MAIN', 'முதன்மை');
  K('photo.make_main', 'Make main photo', 'Main ඡායාරූපය කරන්න', 'முதன்மைப் படமாக்கு');
  K('photo.crop', 'Crop', 'Crop', 'Crop');
  K('photo.remove', 'Remove', 'ඉවත් කරන්න', 'நீக்கு');
  K('photo.max_more', 'You can add only {n} more photo(s).', 'තව ඡායාරූප {n} ක් පමණක් එකතු කළ හැක.', 'இன்னும் {n} படங்களை மட்டுமே சேர்க்கலாம்.');
  K('photo.invalid', 'Please choose images (under 20MB).', 'කරුණාකර (20MB ට අඩු) පින්තූර තෝරන්න.', 'தயவுசெய்து (20MB-க்குக் குறைவான) படங்களைத் தேர்ந்தெடுங்கள்.');
  K('photo.url_https', 'The image URL must start with https://', 'Image URL එක https:// න් ආරම්භ විය යුතුයි.', 'பட URL https:// உடன் தொடங்க வேண்டும்.');
  K('photo.max_reached', 'You can add up to {n} photos only.', 'උපරිම ඡායාරූප {n} ක් පමණි.', 'அதிகபட்சம் {n} படங்கள் மட்டுமே.');
  K('photo.recrop_fail', 'This photo cannot be re-cropped. Please upload it again.', 'මේ ඡායාරූපය නැවත Crop කළ නොහැක. අලුතෙන් Upload කරන්න.', 'இந்தப் படத்தை மீண்டும் Crop செய்ய முடியாது. புதிதாகப் பதிவேற்றுங்கள்.');
  K('photo.required', 'Please add at least one photo.', 'කරුණාකර අවම වශයෙන් එක් ඡායාරූපයක් එකතු කරන්න.', 'குறைந்தது ஒரு படத்தைச் சேர்க்கவும்.');
  K('photo.required_preview', 'Add at least one photo before previewing.', 'Preview බැලීමට පෙර අවම වශයෙන් එක් ඡායාරූපයක් එකතු කරන්න.', 'முன்னோட்டம் பார்க்கும் முன் குறைந்தது ஒரு படத்தைச் சேர்க்கவும்.');
  K('post.title_new', 'Post a New Ad', 'නව ඇඩ් එකක් පළ කරන්න', 'புதிய விளம்பரம் இடுங்கள்');
  K('post.title_edit', 'Edit Ad', 'ඇඩ් එක Edit කරන්න', 'விளம்பரத்தைத் திருத்து');
  K('post.btn_new', 'Submit for Approval', 'ඇඩ් එක පළ කරන්න (Submit for Approval)', 'அங்கீகாரத்திற்குச் சமர்ப்பி');
  K('post.btn_edit', 'Save changes (Resubmit for Approval)', 'වෙනස්කම් සුරකින්න (Resubmit for Approval)', 'மாற்றங்களைச் சேமி (மீண்டும் சமர்ப்பி)');
  K('post.confirm_edit', 'After editing, this ad will be hidden from the site until the Admin approves it again. Continue?', 'Edit කළ පසු මේ ඇඩ් එක නැවත Admin අනුමැතිය ලැබෙනතුරු අඩවියෙන් සැඟවේ. ඉදිරියට යන්නද?', 'திருத்திய பின் நிர்வாகி மீண்டும் அங்கீகரிக்கும் வரை இந்த விளம்பரம் தளத்தில் மறைக்கப்படும். தொடரவா?');
  K('post.saved_new', 'Ad submitted ✔ It goes live after Admin approval.', 'ඇඩ් එක යොමු කළා ✔ Admin අනුමැතියෙන් පසු සජීවී වේ.', 'விளம்பரம் சமர்ப்பிக்கப்பட்டது ✔ நிர்வாகி அங்கீகரித்த பின் நேரலையாகும்.');
  K('post.saved_edit', 'Ad updated ✔ It will reappear after Admin approval.', 'ඇඩ් එක Edit කළා ✔ Admin අනුමැතියෙන් පසු නැවත අඩවියේ පෙන්වයි.', 'விளம்பரம் திருத்தப்பட்டது ✔ நிர்வாகி அங்கீகரித்த பின் மீண்டும் தோன்றும்.');
  K('post.save_fail', 'Could not save the ad: {err}', 'ඇඩ් එක සුරැකීමට නොහැකි විය: {err}', 'விளம்பரத்தைச் சேமிக்க முடியவில்லை: {err}');
  K('preview.h1', '1. How it looks in the list', '1. ලැයිස්තුවේ පෙනෙන ආකාරය', '1. பட்டியலில் தோன்றும் விதம்');
  K('preview.h2', '2. Details page', '2. විස්තර පිටුව', '2. விவரப் பக்கம்');

  /* auth / errors */
  K('err.invalid_login', 'Incorrect email or password.', 'Email හෝ මුරපදය වැරදියි.', 'மின்னஞ்சல் அல்லது கடவுச்சொல் தவறு.');
  K('err.not_confirmed', 'Your email has not been confirmed yet. Check your inbox (and Spam) and click the link in the email.', 'ඔබගේ Email එක තවම තහවුරු කර නැත. Inbox (සහ Spam) පරීක්ෂා කර ලිපියේ ඇති Link එක click කරන්න.', 'உங்கள் மின்னஞ்சல் இன்னும் உறுதிப்படுத்தப்படவில்லை. Inbox (மற்றும் Spam) சரிபார்த்து மின்னஞ்சலில் உள்ள இணைப்பைச் சொடுக்குங்கள்.');
  K('err.exists', 'An account already exists with this email. Please login.', 'මේ Email එකෙන් දැනටමත් ගිණුමක් ඇත. Login වන්න.', 'இந்த மின்னஞ்சலில் ஏற்கனவே கணக்கு உள்ளது. உள்நுழையுங்கள்.');
  K('err.rate', 'Please try again in a little while (email sending limit reached).', 'ටික වේලාවකට පසු නැවත උත්සාහ කරන්න (Email යැවීමේ සීමාව ඉක්මවා ඇත).', 'சிறிது நேரம் கழித்து மீண்டும் முயலுங்கள் (மின்னஞ்சல் அனுப்பும் வரம்பு எட்டப்பட்டது).');
  K('err.password', 'The password must be at least 6 characters.', 'මුරපදය අවම වශයෙන් අක්ෂර 6ක් විය යුතුයි.', 'கடவுச்சொல் குறைந்தது 6 எழுத்துகள் இருக்க வேண்டும்.');
  K('err.rls', 'You do not have permission to do this (your account may be blocked).', 'ඔබට මේ ක්‍රියාව කිරීමට අවසර නැත (ගිණුම Block කර ඇති විය හැක).', 'இதைச் செய்ய உங்களுக்கு அனுமதி இல்லை (கணக்கு தடுக்கப்பட்டிருக்கலாம்).');
  K('err.generic', 'Something went wrong. Please try again.', 'දෝෂයක් සිදුවිය. නැවත උත්සාහ කරන්න.', 'ஏதோ தவறு நடந்தது. மீண்டும் முயலுங்கள்.');
  K('err.config', 'Please enter your Supabase details in config.js.', 'config.js හි Supabase විස්තර ඇතුළත් කරන්න.', 'config.js-இல் Supabase விவரங்களை உள்ளிடுங்கள்.');
  K('auth.registered', 'Registration successful! Click the link sent to your email to confirm your account, then login (check Spam too).', 'ලියාපදිංචිය සාර්ථකයි! ඔබගේ Email එකට යවූ Link එක click කර ගිණුම තහවුරු කර පසුව Login වන්න (Spam folder එකත් බලන්න).', 'பதிவு வெற்றி! உங்கள் மின்னஞ்சலுக்கு அனுப்பிய இணைப்பைச் சொடுக்கிக் கணக்கை உறுதிப்படுத்தி, பின்னர் உள்நுழையுங்கள் (Spam-ஐயும் பாருங்கள்).');
  K('auth.forgot_sent', 'A password reset link has been sent to your email (if an account exists). Check Inbox / Spam.', 'මුරපදය වෙනස් කිරීමේ Link එකක් ඔබගේ Email එකට යවන ලදී (ගිණුමක් තිබේ නම්). Inbox / Spam පරීක්ෂා කරන්න.', 'கடவுச்சொல் மாற்றும் இணைப்பு உங்கள் மின்னஞ்சலுக்கு அனுப்பப்பட்டது (கணக்கு இருந்தால்). Inbox / Spam சரிபாருங்கள்.');
  K('auth.pw_mismatch', 'The two passwords do not match.', 'මුරපද දෙක සමාන නොවේ.', 'இரண்டு கடவுச்சொற்களும் பொருந்தவில்லை.');
  K('auth.pw_changed', 'Password changed successfully ✔', 'මුරපදය සාර්ථකව වෙනස් කරන ලදී ✔', 'கடவுச்சொல் வெற்றிகரமாக மாற்றப்பட்டது ✔');
  K('auth.hash_error', 'The link from your email has expired or was already used (email security scanners sometimes open links first). If your account is already confirmed, just login. Otherwise request a new email below. (If it was a password reset link, request a new one via "Forgot password?".)', 'Email එකේ ලැබුණු Link එක කල් ඉකුත් වී හෝ දැනටමත් භාවිතා කර ඇත (Email scanner මෘදුකාංග සමහර විට Link එක කලින් open කරයි). ගිණුම දැනටමත් තහවුරු වී ඇත්නම් කෙලින්ම Login වන්න. නැතහොත් පහළින් අලුත් Email එකක් ඉල්ලන්න. (මුරපදය Reset Link එකක් නම් "මුරපදය අමතකද?" හරහා අලුත් එකක් ඉල්ලන්න.)', 'உங்கள் மின்னஞ்சலில் வந்த இணைப்பு காலாவதியாகிவிட்டது அல்லது ஏற்கனவே பயன்படுத்தப்பட்டுவிட்டது (மின்னஞ்சல் பாதுகாப்பு ஸ்கேனர்கள் சில சமயம் இணைப்பை முதலில் திறக்கும்). கணக்கு ஏற்கனவே உறுதியாகியிருந்தால் நேரடியாக உள்நுழையுங்கள். இல்லையெனில் கீழே புதிய மின்னஞ்சலைக் கோருங்கள். (கடவுச்சொல் மீட்டமை இணைப்பு எனில் "கடவுச்சொல்லை மறந்துவிட்டீர்களா?" மூலம் புதியதைக் கோருங்கள்.)');
  K('auth.need_email', 'First type your email in the box above, then press again.', 'පළමුව ඉහත Email කොටුවේ ඔබගේ Email ලියන්න, ඉන්පසු නැවත ඔබන්න.', 'முதலில் மேலே உள்ள பெட்டியில் மின்னஞ்சலை உள்ளிட்டு, பின்னர் மீண்டும் அழுத்துங்கள்.');
  K('auth.resent', 'The confirmation email has been sent again. Check Inbox / Spam. (Use only the link in the newest email.)', 'තහවුරු කිරීමේ Email එක නැවත යවන ලදී. Inbox / Spam පරීක්ෂා කරන්න. (නවතම Email එකේ Link එක පමණක් භාවිතා කරන්න.)', 'உறுதிப்படுத்தும் மின்னஞ்சல் மீண்டும் அனுப்பப்பட்டது. Inbox / Spam சரிபாருங்கள். (புதிய மின்னஞ்சலில் உள்ள இணைப்பை மட்டும் பயன்படுத்துங்கள்.)');

  /* profile page (JS) */
  K('prof.name_short', 'The name must be at least 2 characters.', 'නම අවම අක්ෂර 2ක් විය යුතුයි.', 'பெயர் குறைந்தது 2 எழுத்துகள் இருக்க வேண்டும்.');
  K('prof.phone_invalid', 'Invalid phone number (9–20 digits).', 'දුරකථන අංකය වැරදියි (ඉලක්කම් 9-20).', 'தவறான தொலைபேசி எண் (9–20 இலக்கங்கள்).');
  K('prof.save_fail', 'Could not save. Please try again.', 'සුරැකීමට නොහැකි විය. නැවත උත්සාහ කරන්න.', 'சேமிக்க முடியவில்லை. மீண்டும் முயலுங்கள்.');
  K('prof.saved', 'Profile details saved ✔', 'ප්‍රොෆයිල් විස්තර සුරැකුණා ✔', 'சுயவிவர விவரங்கள் சேமிக்கப்பட்டன ✔');
  K('myads.empty', 'You have not posted any ads yet.', 'ඔබ තවමත් කිසිදු ඇඩ් එකක් පළ කර නොමැත.', 'நீங்கள் இன்னும் எந்த விளம்பரத்தையும் இடவில்லை.');
  K('myads.edit', 'Edit', 'Edit', 'திருத்து');
  K('myads.delete', 'Delete', 'මකන්න', 'நீக்கு');
  K('myads.view', 'View', 'බලන්න', 'பார்');
  K('myads.confirm_delete', 'Delete this ad?', 'මේ ඇඩ් එක මකන්නද?', 'இந்த விளம்பரத்தை நீக்கவா?');
  K('myads.rejected_note', 'This ad was rejected by the Admin. Edit it and resubmit.', 'මේ ඇඩ් එක Admin විසින් ප්‍රතික්ෂේප කර ඇත. Edit කර නැවත යොමු කරන්න.', 'இந்த விளம்பரத்தை நிர்வாகி நிராகரித்தார். திருத்தி மீண்டும் சமர்ப்பியுங்கள்.');
  K('myads.pending_note', 'Waiting for Admin approval.', 'Admin අනුමැතිය බලාපොරොත්තුවෙන්.', 'நிர்வாகி அங்கீகாரத்திற்காகக் காத்திருக்கிறது.');
  K('myads.deleted', 'Ad deleted.', 'ඇඩ් එක මකා දමන ලදී.', 'விளம்பரம் நீக்கப்பட்டது.');

  window.TL_I18N = D;
  window.TL_NORM = norm;
})();

/* ---------- Extra keys ---------- */
(function () {
  const K = (key, en, si, ta) => { window.TL_I18N[key] = { en, si, ta }; };
  K('doc.title', 'Francy China Item Online Shop – Pre-loved clothes & shoes marketplace', 'Francy China Item Online Shop - භාවිත කළ ඇඳුම් සහ සපත්තු නිල වෙළඳපොළ', 'Francy China Item Online Shop – பயன்படுத்திய ஆடைகள் & காலணிகள் சந்தை');
})();

/* ---------- Ads / Privacy ---------- */
(function () {
  const D = window.TL_I18N, norm = window.TL_NORM;
  const E = (src, si, ta) => { D[norm(src)] = { en: norm(src), si, ta }; };
  E('Advertisement', 'ප්‍රචාරණ දැන්වීම', 'விளம்பரம்');
  E('Francy China Item Online Shop displays advertisements from third-party networks (such as Adsterra). These networks may use cookies to show relevant ads. Advertisers do not receive your account details.', 'Francy China Item Online Shop අඩවියේ තෙවන පාර්ශවීය දැන්වීම් ජාල (Adsterra වැනි) මගින් දැන්වීම් පෙන්වයි. අදාළ දැන්වීම් පෙන්වීමට ඒවා cookies භාවිතා කළ හැක. දැන්වීම්කරුවන්ට ඔබගේ ගිණුම් විස්තර නොලැබේ.', 'Francy China Item Online Shop தளம் மூன்றாம் தரப்பு விளம்பர நெட்வொர்க்குகளின் (Adsterra போன்றவை) விளம்பரங்களைக் காட்டுகிறது. பொருத்தமான விளம்பரங்களைக் காட்ட அவை குக்கீகளைப் பயன்படுத்தலாம். விளம்பரதாரர்களுக்கு உங்கள் கணக்கு விவரங்கள் கிடைக்காது.');
})();
