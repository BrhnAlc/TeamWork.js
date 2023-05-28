Ask Questions 15m
//!1. When is the <link> tag used?
//!1. <link> etiketi ne zaman kullanılır?
//*(CSS dosyalarına bağlantı: <link> etiketi, HTML belgesinin bir veya daha fazla CSS dosyasına bağlanmasını sağlar. Bu sayede stil tanımlamaları ve düzenlemeleri ayrı bir dosyada yapılabilir ve HTML belgesiyle ilişkilendirilebilir.Özetlemek gerekirse, <link> etiketi, HTML belgelerinin dış stil sayfalarına, ikonlara, faviconlara ve diğer kaynaklara bağlanmasını sağlayan bir etikettir.)
 A. When linking style sheets, JavaScript, and icons for mobile apps
 B. When linking style sheets, favicons, and preloading assets
 C. When linking style sheets and favicons
 D. When linking style sheets, external URLs, and favicons


//! 2. The "value" attribute is associated with which set of tags?
//! 2. "Değer(value)" özelliği hangi etiket grubuyla ilişkilidir?
//*("Değer" özelliği, genellikle <input> etiketi grubuyla ilişkilidir. <input> etiketi, kullanıcıdan veri girişi almak veya kullanıcının seçim yapmasını sağlamak için kullanılır. "Değer" özelliği, <input> etiketinin kullanıldığı bağlamda, etiketin varsayılan veya kullanıcı tarafından girilen değerini belirtir.)
 A. <button><input><form>
 B. <li><input><option>
 C. <input><label><meter>
 D. <input><option><textarea>

 //*  3. What is the difference between the <div> and <span> tags?
 //*  3. <div> ve <span> etiketleri arasındaki fark nedir?
 //*(</span><div> ve <span> etiketleri, HTML'de farklı amaçlara hizmet eden iki farklı etikettir.<div> etiketi, blok düzeyinde bir HTML öğesini tanımlamak için kullanılır. Bu etiket, içine aldığı içeriği blok olarak gruplar ve genellikle yeni bir satırda başlar ve sona erer. Örneğin, <div> etiketi, bir sayfayı bölümlere ayırmak veya bir bölümü stillemek için kullanılabilir.<span> etiketi ise içindeki içeriği daha küçük bir öğe veya bir bölüm olarak işaretlemek için kullanılır. Bu etiket genellikle bir metin veya birkaç kelimeyi vurgulamak veya stillemek için kullanılır. <span> etiketi blok düzeyinde değil, iç içe geçmiş içeriklerin içinde kullanılır.Özetle, <div> etiketi blok düzeyinde bir öğeyi tanımlamak için kullanılırken, <span> etiketi daha küçük bir öğeyi veya bir bölümü işaretlemek veya stillemek için kullanılır.)
 A. <div> is used where a generic block-level tag is needed, while <span> is used where a generic inline tag is
 needed.
 B. <div> is used for major divisions on a page, while <span> is used to span across columns.
 C. <div> is the industry-standard default tag, but you could use <span> if you prefer.
 D. <div> is used where a generic inline tag is needed, while <5.> is used where a generic block-level tag is
 needed.
 //!     4. To use flexbox we define a container as a flexbox. What is the CSS to do this?
 //!     4. Esnek kutuyu kullanmak için bir kabı esnek kutu olarak tanımlarız. Bunu yapmak için CSS nedir?
 //*(Esnek kutuları kullanmak için CSS'de "flexbox" kullanılır. Flexbox, CSS3 ile birlikte tanıtılan bir düzen modelidir ve esnek ve duyarlı düzenler oluşturmak için kullanılır Bir öğeyi esnek kutu olarak tanımlamak için aşağıdaki CSS özelliklerini kullanabilirsiniz display: flex Bu özellik, bir öğenin bir esnek kutu olduğunu belirtir. Esnek kutu içindeki öğeleri yatay olarak hizalar flex-direction: row | row-reverse | column | column-reverse Bu özellik, esnek kutu içindeki öğelerin nasıl sıralanacağını belirler. "row" özelliği öğeleri yatay olarak, soldan sağa doğru sıralar. "column" özelliği öğeleri dikey olarak, yukarıdan aşağıya doğru sıralar. "reverse" seçenekleri ise sıralamayı tersine çevirir justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly Bu özellik, esnek kutu içindeki öğelerin yatay yönde nasıl hizalanacağını belirler. Öğeleri soldan başlayarak hizalamak için "flex-start", sağa doğru hizalamak için "flex-end", ortalamak için "center" kullanılabilir. Diğer seçenekler ise öğeleri arasında boşluklar bırakarak hizalamayı düzenler align-items: flex-start | flex-end | center | baseline | stretch Bu özellik, esnek kutu içindeki öğelerin dikey yönde nasıl hizalanacağını belirler. Öğeleri yukarıdan aşağıya doğru hizalamak için "flex-start", aşağıdan yukarıya doğru hizalamak için "flex-end", ortalamak için "center", baz çizgisine göre hizalamak için "baseline" kullanılabilir. "stretch" seçeneği ise öğeleri kutunun tam yüksekliği boyunca uzatır Bu özelliklerin yanı sıra, flexbox modelinde öğelerin boyutlarını, sıralamalarını ve boşluklarını belirlemek için daha fazla özellik bulunmaktadır. Bu özelliklerin kullanımı, esnek kutuları istenen şekilde düzenlemek için daha ayrıntılı bir kontrol sağlar. 
  A. position:absolute;
 B. float:left;
 C. display:flex;
 D. display:block;
 
 //!  5. flex-direction allows you to do what?  //!   5. esnek yön ne yapmanızı sağlar?
 //*(flex-direction özelliği, esnek kutu içindeki öğelerin nasıl sıralanacağını belirlemek için kullanılır. Bu özellik, aşağıdaki değerlerden birini alabilir:row: Öğeleri yatay olarak, soldan sağa doğru sıralar. Bu değer, varsayılan değerdir. row-reverse: Öğeleri yatay olarak, sağdan sola doğru sıralar. column: Öğeleri dikey olarak, yukarıdan aşağıya doğru sıralar. column-reverse: Öğeleri dikey olarak, aşağıdan yukarıya doğru sıralar.flex-direction özelliği, esnek kutu içindeki öğelerin sıralanma şeklini değiştirerek düzenlemeyi sağlar. Bu sayede, öğeleri yatay veya dikey olarak hizalayabilir ve sıralamayı tersine çevirebilirsiniz. Bu özellik, esnek kutuların farklı düzenlerde kullanılmasını sağlayarak esnek ve duyarlı tasarımlar oluşturmanıza yardımcı olur.)  
 A. define the direction of how elements are positioned based on either row or column
 B. define how elements will wrap when the browser width is changed
 C. define how to position elements vertically
 D. defines how position elements horizontally;
 6. the css property "order" for flex items allows you to
 A. specify at what time flex items appear
 B. specify in what order the flex items appear
 C. specify in what direction the flex items appear
 D. none of the above
 7. flex-direction is applied to a flex element not the whole flex box
 A. True
 B. False
 8. What will the value of y be in this code:
 const x = 6 % 2;
 const y = x ? "One" : "Two";
 A. Two 
 B. One
 C. undefined
 D. TRUE
 9. Which statement is used to skip iteration of the loop?
 A. break
 B. pass
 C. skip
 D.continue
 // *10. Which choice is valid example for an arrow function?
 A. (a,b) => c
 B. a, b => {return c;}
 C. a, b => c
 D.{ a, b } => c
 tw-03.md 5/17/2023
 4 / 6
 //!!11. Among the following given JavaScript snipped codes, which is more efficient:
 // Code A
 for (let number = 10; number >= 1; number--) {
  console.log(number);
 }
 // Code B
 let number = 10;
 while (number >=)  {
  console.log(number);
  number++;
 }
 A. Code A
 B. Code B
 C. Same
 D. Can not compare
 12. In JavaScript, what is a block of statement?
 A. Conditional block
 B. block that combines a number of statements into a single compound statement
 C. both conditional block and a single statement
 D. block that contains a single statement
 13. The "function" and " var" are known as:
 A. Keywords
 B. Data types
 C. Declaration statements
 D. Prototypes
 14. In the following given syntax of the switch statement, the Expression is compared with the labels
 using which one of the following operators?
 switch(expression)
 {
  statements
 }
 A. ===
 B. ==
 C. equals
 D. !==
 tw-03.md 5/17/2023
 5 / 6
 15. Which of the following variables takes precedence over the others if the names are the same?
 A. Global variable
 B. The local element
 C. The two of the above
 D. None of the above
 Interview Questions 15m
 1. Who developed JavaScript, and what was the first name of JavaScript?
 2. List some of the disadvantages of JavaScript.
 3. Define anonymous function
 4. In JavaScript what is an argument object?
 5. Name the types of functions
 6. What is CSS Flexbox
 7. Have you used Flexbox & CSS Grid before? What are the differences between them?
 Coding Challenge 15m
 JS-CC-02 Reverse Words
 JS-CC-03 Reverse Strin