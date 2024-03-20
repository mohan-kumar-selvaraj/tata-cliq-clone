var categoriesArray = [
  [
    '<tr>  <th><a href="women.html" style="color:black;">Shop All Ethnic Wear</a></th>  <th><a href="#">Shorts</a></th>  <td><a href="#" style="color:black;">Lingerie & Lounge Sets</a></td>  <td><a href="#" style="color:black;">Bags, Wallets & Clutches</a></td>   </tr>',
    '<tr>  <th><a href="#">Kurtis & Kurtas</a></th>  <th><a href="#">Jackets & Blazers</a></th>  <th><a href="#">Bras</a></th>  <th><a href="#">Handbags</a></th>   </tr>',
    '<tr>  <th><a href="#">Suits</a></th>  <th><a href="#">Leggings</a></th>  <th><a href="#">Panties</a></th>  <td><a href="#">Tote Bags</a></td>   </tr>',
    '<tr>  <td><a href="women.html">Sarees</a></td>  <td><a href="#">Capris</a></td>  <td><a href="#">Lingerie Sets</a></td>  <td><a href="#">Sling Bags</a></td>   </tr>',
    '<tr>  <td><a href="#">Lehengas</a></td>  <td><a href="#">Jumpsuits</a></td>  <td><a href="#">Camisoles</a></td>  <td><a href="#">Backpacks</a></td>   </tr>',
    '<tr>  <td><a href="#">Bottoms</a></td>  <td><a href="#">Shrugs</a></td>  <td><a href="#">Sleepwear & Robes</a></td>  <td><a href="#">Wallets</a></td>   </tr>',
    '<tr>  <td><a href="#">Blouses & Fabrics</a></td>  <td><a href="#">Sweaters</a></td>  <td><a href="#">Shapewear</a></td>  <td><a href="#">Clutches</a></td>   </tr>',
    '<tr>  <td><a href="#">Dupattas</a></td>  <td><a href="#">Sweatshirts</a></td>  <td><a href="#">Swimwear</a></td>  <td><a href="#">Premium Handbags</a></td>   </tr>',
    '<tr>  <td><a href="#">Blouses & Dress material</a></td>  <td><a href="#">Leggings</a></td>  <td><a href="#">Sports Shoes</a></td>  <td><a href="#">Clutches</a></td>   </tr>',
    '<tr>  <th><a href="#" style="color:black;">Shop All Western Wear</a></th>  <td><a href="#" style="color:black;">Activewear & Sportswear</a></td>  <td><a href="#" style="color:black;">Shop All Footwear</a></td>  <td><a href="#" style="color:black;">Jewellery</a></td>   </tr>',
    '<tr>  <td><a href="#">Tops & T-shirts</a></td>  <td><a href="#">T-shirts</a></td>  <th><a href="#">Casual Footwear</a></th>  <th><a href="#">Gold</a></th>   </tr>',
    '<tr>  <td><a href="#">Dresses</a></td>  <td><a href="#">Shorts</a></td>  <td><a href="#">Boots</a></td>  <td><a href="#">Diamond</a></td>   </tr>',
    '<tr>  <td><a href="#">Jeans</a></td>  <td><a href="#">Sets</a></td>  <td><a href="#">Sneakers</a></td>  <td><a href="#">Silver</a></td>   </tr>',
    '<tr>  <td><a href="#">Shirts</a></td>  <td><a href="#">Jackets</a></td>  <td><a href="#">Flip Flops</a></td>  <td><a href="#">Fashion Jewellery</a></td>   </tr>',
    '<tr>  <td><a href="#">Skirts</a></td>  <td><a href="#">Innerwear</a></td>  <td><a href="#">Ethnic Footwear</a></td>  <td><a href="#">Smart</a></td>   </tr>',
  ],
  [
    '<tr>  <th><a href="#" style="color:black;">Tops</a></th>  <td><a href="#">Joggers</a></td>  <th><a href="#">Sneakers</a></th>  <td><a href="#" style="color:black;">Bags, Backpacks & Wallets</a></td>   </tr>',
    '<tr>  <td><a href="mens.html">T-shirts</a></td>  <td><a href="#">Trackpants</a></td>  <td><a href="#">Formal Shoes</a></td>  <td><a href="#">Backpacks </a></td>   </tr>',
    '<tr>  <td><a href="#">Polo T-shirts</a></td>  <td><a href="#" style="color:black;">Activewear</a></td>  <td><a href="#">Running Shoes</a></td>  <td><a href="#">Wallets</a></td>   </tr>',
    '<tr>  <td><a href="#">Shirts</a></td>  <td><a href="#">T-shirts & Jerseys</a></td>  <td><a href="#">Training Shoes</a></td>  <th><a href="#">Messenger Bags</a></th>   </tr>',
    '<tr>  <td><a href="#">Formal Shirts</a></td>  <td><a href="#">Sports Shorts</a></td>  <td><a href="#">Sports Shoes</a></td>  <td><a href="#">Crossbody Bags</a></td>   </tr>',
    '<tr>  <td><a href="#">Sweatshirts</a></td>  <td><a href="#">Sports Jackets</a></td>  <td><a href="#">Boots</a></td>  <td><a href="#" style="color:black;">Fashion Accessories</a></td>   </tr>',
    '<tr>  <td><a href="#">Jackets</a></td>  <td><a href="#">Joggers</a></td>  <td><a href="#">Flip Flops</a></td>  <td><a href="#">Belts</a></td>   </tr>',
    '<tr>  <td><a href="ProductPage.html">Suits</a></td>  <th><a href="#" style="color:black;">Innerwear</a></th>  <th><a href="#">Sandals & Floaters</a></th>  <td><a href="#">Ties</a></td>   </tr>',
    `<tr>  <td><a href="#">Blazers</a></td>  <th><a href="#">Boxes</a></th>  <th><a href="#" style="color:black;">Watches</a></th>  <td><a href="#">Cufflinks</a></td>   </tr>`,
    '<tr>  <th><a href="#" style="color:black;">Bottoms</a></th>  <th><a href="#">Briefs</a></th>  <td><a href="#">Smartwatches</a></td>  <th><a href="#">Sunglasses</a></th>   </tr>',
    '<tr>  <td><a href="#">Jeans</a></td>  <td><a href="#">Trunks</a></td>  <td><a href="#">Work Watches</a></td>  <td><a href="#">Caps</a></td>   </tr>',
    '<tr>  <td><a href="#">Chinos</a></td>  <td><a href="#">Vests</a></td>  <td><a href="#">Casual Watches</a></td>  <td><a href="#" style="color:black;">Sports & Fitness</a></td>   </tr>',
    '<tr>  <th><a href="#">Trousers</a></th>  <td><a href="#">Night Suits</a></td>  <td><a href="#">Party Watches</a></td>  <th><a href="#">Fitness Equipment</a></th>   </tr>',
    '<tr>  <td><a href="#">Formal Trousers</a></td>  <td><a href="#" style="color:black;">Footwear</a></td>  <th><a href="#">Digitalwatches</a></th>  <td><a href="#">Sports Equipment</a></td>   </tr>',
    '<tr>  <td><a href="#">Shorts</a></td>  <td><a href="#">Casual Shoes</a></td>  <td><a href="#">Multifunctional Watches</a></td>  <td><a href="#">Threadmill</a></td>   </tr>',
  ],
  [
    '<tr>  <th><a href="women.html" style="color:black;">Shop All Ethnic Wear</a></th>  <th><a href="#">Shorts</a></th>  <td><a href="#" style="color:black;">Lingerie & Lounge Sets</a></td>  <td><a href="#" style="color:black;">Bags, Wallets & Clutches</a></td>   </tr>',
    '<tr>  <th><a href="#">Kurtis & Kurtas</a></th>  <th><a href="#">Jackets & Blazers</a></th>  <th><a href="#">Bras</a></th>  <th><a href="#">Handbags</a></th>   </tr>',
    '<tr>  <th><a href="#">Suits</a></th>  <th><a href="#">Leggings</a></th>  <th><a href="#">Panties</a></th>  <td><a href="#">Tote Bags</a></td>   </tr>',
    '<tr>  <td><a href="women.html">Sarees</a></td>  <td><a href="#">Capris</a></td>  <td><a href="#">Lingerie Sets</a></td>  <td><a href="#">Sling Bags</a></td>   </tr>',
    '<tr>  <td><a href="#">Lehengas</a></td>  <td><a href="#">Jumpsuits</a></td>  <td><a href="#">Camisoles</a></td>  <td><a href="#">Backpacks</a></td>   </tr>',
    '<tr>  <td><a href="#">Bottoms</a></td>  <td><a href="#">Shrugs</a></td>  <td><a href="#">Sleepwear & Robes</a></td>  <td><a href="#">Wallets</a></td>   </tr>',
    '<tr>  <td><a href="#">Blouses & Fabrics</a></td>  <td><a href="#">Sweaters</a></td>  <td><a href="#">Shapewear</a></td>  <td><a href="#">Clutches</a></td>   </tr>',
    '<tr>  <td><a href="#">Dupattas</a></td>  <td><a href="#">Sweatshirts</a></td>  <td><a href="#">Swimwear</a></td>  <td><a href="#">Premium Handbags</a></td>   </tr>',
    '<tr>  <td><a href="#">Blouses & Dress material</a></td>  <td><a href="#">Leggings</a></td>  <td><a href="#">Sports Shoes</a></td>  <td><a href="#">Clutches</a></td>   </tr>',
    '<tr>  <th><a href="#" style="color:black;">Shop All Western Wear</a></th>  <td><a href="#" style="color:black;">Activewear & Sportswear</a></td>  <td><a href="#" style="color:black;">Shop All Footwear</a></td>  <td><a href="#" style="color:black;">Jewellery</a></td>   </tr>',
    '<tr>  <td><a href="#">Tops & T-shirts</a></td>  <td><a href="#">T-shirts</a></td>  <th><a href="#">Casual Footwear</a></th>  <th><a href="#">Gold</a></th>   </tr>',
    '<tr>  <td><a href="#">Dresses</a></td>  <td><a href="#">Shorts</a></td>  <td><a href="#">Boots</a></td>  <td><a href="#">Diamond</a></td>   </tr>',
    '<tr>  <td><a href="#">Jeans</a></td>  <td><a href="#">Sets</a></td>  <td><a href="#">Sneakers</a></td>  <td><a href="#">Silver</a></td>   </tr>',
    '<tr>  <td><a href="#">Shirts</a></td>  <td><a href="#">Jackets</a></td>  <td><a href="#">Flip Flops</a></td>  <td><a href="#">Fashion Jewellery</a></td>   </tr>',
    '<tr>  <td><a href="#">Skirts</a></td>  <td><a href="#">Innerwear</a></td>  <td><a href="#">Ethnic Footwear</a></td>  <td><a href="#">Smart</a></td>   </tr>',
  ],
  [
    '<tr>  <th><a href="#" style="color:black;">Tops</a></th>  <td><a href="#">Joggers</a></td>  <th><a href="#">Sneakers</a></th>  <td><a href="#" style="color:black;">Bags, Backpacks & Wallets</a></td>   </tr>',
    '<tr>  <td><a href="mens.html">T-shirts</a></td>  <td><a href="#">Trackpants</a></td>  <td><a href="#">Formal Shoes</a></td>  <td><a href="#">Backpacks </a></td>   </tr>',
    '<tr>  <td><a href="#">Polo T-shirts</a></td>  <td><a href="#" style="color:black;">Activewear</a></td>  <td><a href="#">Running Shoes</a></td>  <td><a href="#">Wallets</a></td>   </tr>',
    '<tr>  <td><a href="#">Shirts</a></td>  <td><a href="#">T-shirts & Jerseys</a></td>  <td><a href="#">Training Shoes</a></td>  <th><a href="#">Messenger Bags</a></th>   </tr>',
    '<tr>  <td><a href="#">Formal Shirts</a></td>  <td><a href="#">Sports Shorts</a></td>  <td><a href="#">Sports Shoes</a></td>  <td><a href="#">Crossbody Bags</a></td>   </tr>',
    '<tr>  <td><a href="#">Sweatshirts</a></td>  <td><a href="#">Sports Jackets</a></td>  <td><a href="#">Boots</a></td>  <td><a href="#" style="color:black;">Fashion Accessories</a></td>   </tr>',
    '<tr>  <td><a href="#">Jackets</a></td>  <td><a href="#">Joggers</a></td>  <td><a href="#">Flip Flops</a></td>  <td><a href="#">Belts</a></td>   </tr>',
    '<tr>  <td><a href="ProductPage.html">Suits</a></td>  <th><a href="#" style="color:black;">Innerwear</a></th>  <th><a href="#">Sandals & Floaters</a></th>  <td><a href="#">Ties</a></td>   </tr>',
    `<tr>  <td><a href="#">Blazers</a></td>  <th><a href="#">Boxes</a></th>  <th><a href="#" style="color:black;">Watches</a></th>  <td><a href="#">Cufflinks</a></td>   </tr>`,
    '<tr>  <th><a href="#" style="color:black;">Bottoms</a></th>  <th><a href="#">Briefs</a></th>  <td><a href="#">Smartwatches</a></td>  <th><a href="#">Sunglasses</a></th>   </tr>',
    '<tr>  <td><a href="#">Jeans</a></td>  <td><a href="#">Trunks</a></td>  <td><a href="#">Work Watches</a></td>  <td><a href="#">Caps</a></td>   </tr>',
    '<tr>  <td><a href="#">Chinos</a></td>  <td><a href="#">Vests</a></td>  <td><a href="#">Casual Watches</a></td>  <td><a href="#" style="color:black;">Sports & Fitness</a></td>   </tr>',
    '<tr>  <th><a href="#">Trousers</a></th>  <td><a href="#">Night Suits</a></td>  <td><a href="#">Party Watches</a></td>  <th><a href="#">Fitness Equipment</a></th>   </tr>',
    '<tr>  <td><a href="#">Formal Trousers</a></td>  <td><a href="#" style="color:black;">Footwear</a></td>  <th><a href="#">Digitalwatches</a></th>  <td><a href="#">Sports Equipment</a></td>   </tr>',
    '<tr>  <td><a href="#">Shorts</a></td>  <td><a href="#">Casual Shoes</a></td>  <td><a href="#">Multifunctional Watches</a></td>  <td><a href="#">Threadmill</a></td>   </tr>',
  ],
  [
    '<tr>  <th><a href="women.html" style="color:black;">Shop All Ethnic Wear</a></th>  <th><a href="#">Shorts</a></th>  <td><a href="#" style="color:black;">Lingerie & Lounge Sets</a></td>  <td><a href="#" style="color:black;">Bags, Wallets & Clutches</a></td>   </tr>',
    '<tr>  <th><a href="#">Kurtis & Kurtas</a></th>  <th><a href="#">Jackets & Blazers</a></th>  <th><a href="#">Bras</a></th>  <th><a href="#">Handbags</a></th>   </tr>',
    '<tr>  <th><a href="#">Suits</a></th>  <th><a href="#">Leggings</a></th>  <th><a href="#">Panties</a></th>  <td><a href="#">Tote Bags</a></td>   </tr>',
    '<tr>  <td><a href="women.html">Sarees</a></td>  <td><a href="#">Capris</a></td>  <td><a href="#">Lingerie Sets</a></td>  <td><a href="#">Sling Bags</a></td>   </tr>',
    '<tr>  <td><a href="#">Lehengas</a></td>  <td><a href="#">Jumpsuits</a></td>  <td><a href="#">Camisoles</a></td>  <td><a href="#">Backpacks</a></td>   </tr>',
    '<tr>  <td><a href="#">Bottoms</a></td>  <td><a href="#">Shrugs</a></td>  <td><a href="#">Sleepwear & Robes</a></td>  <td><a href="#">Wallets</a></td>   </tr>',
    '<tr>  <td><a href="#">Blouses & Fabrics</a></td>  <td><a href="#">Sweaters</a></td>  <td><a href="#">Shapewear</a></td>  <td><a href="#">Clutches</a></td>   </tr>',
    '<tr>  <td><a href="#">Dupattas</a></td>  <td><a href="#">Sweatshirts</a></td>  <td><a href="#">Swimwear</a></td>  <td><a href="#">Premium Handbags</a></td>   </tr>',
    '<tr>  <td><a href="#">Blouses & Dress material</a></td>  <td><a href="#">Leggings</a></td>  <td><a href="#">Sports Shoes</a></td>  <td><a href="#">Clutches</a></td>   </tr>',
    '<tr>  <th><a href="#" style="color:black;">Shop All Western Wear</a></th>  <td><a href="#" style="color:black;">Activewear & Sportswear</a></td>  <td><a href="#" style="color:black;">Shop All Footwear</a></td>  <td><a href="#" style="color:black;">Jewellery</a></td>   </tr>',
    '<tr>  <td><a href="#">Tops & T-shirts</a></td>  <td><a href="#">T-shirts</a></td>  <th><a href="#">Casual Footwear</a></th>  <th><a href="#">Gold</a></th>   </tr>',
    '<tr>  <td><a href="#">Dresses</a></td>  <td><a href="#">Shorts</a></td>  <td><a href="#">Boots</a></td>  <td><a href="#">Diamond</a></td>   </tr>',
    '<tr>  <td><a href="#">Jeans</a></td>  <td><a href="#">Sets</a></td>  <td><a href="#">Sneakers</a></td>  <td><a href="#">Silver</a></td>   </tr>',
    '<tr>  <td><a href="#">Shirts</a></td>  <td><a href="#">Jackets</a></td>  <td><a href="#">Flip Flops</a></td>  <td><a href="#">Fashion Jewellery</a></td>   </tr>',
    '<tr>  <td><a href="#">Skirts</a></td>  <td><a href="#">Innerwear</a></td>  <td><a href="#">Ethnic Footwear</a></td>  <td><a href="#">Smart</a></td>   </tr>',
  ],
  [
    '<tr>  <th><a href="#" style="color:black;">Tops</a></th>  <td><a href="#">Joggers</a></td>  <th><a href="#">Sneakers</a></th>  <td><a href="#" style="color:black;">Bags, Backpacks & Wallets</a></td>   </tr>',
    '<tr>  <td><a href="mens.html">T-shirts</a></td>  <td><a href="#">Trackpants</a></td>  <td><a href="#">Formal Shoes</a></td>  <td><a href="#">Backpacks </a></td>   </tr>',
    '<tr>  <td><a href="#">Polo T-shirts</a></td>  <td><a href="#" style="color:black;">Activewear</a></td>  <td><a href="#">Running Shoes</a></td>  <td><a href="#">Wallets</a></td>   </tr>',
    '<tr>  <td><a href="#">Shirts</a></td>  <td><a href="#">T-shirts & Jerseys</a></td>  <td><a href="#">Training Shoes</a></td>  <th><a href="#">Messenger Bags</a></th>   </tr>',
    '<tr>  <td><a href="#">Formal Shirts</a></td>  <td><a href="#">Sports Shorts</a></td>  <td><a href="#">Sports Shoes</a></td>  <td><a href="#">Crossbody Bags</a></td>   </tr>',
    '<tr>  <td><a href="#">Sweatshirts</a></td>  <td><a href="#">Sports Jackets</a></td>  <td><a href="#">Boots</a></td>  <td><a href="#" style="color:black;">Fashion Accessories</a></td>   </tr>',
    '<tr>  <td><a href="#">Jackets</a></td>  <td><a href="#">Joggers</a></td>  <td><a href="#">Flip Flops</a></td>  <td><a href="#">Belts</a></td>   </tr>',
    '<tr>  <td><a href="ProductPage.html">Suits</a></td>  <th><a href="#" style="color:black;">Innerwear</a></th>  <th><a href="#">Sandals & Floaters</a></th>  <td><a href="#">Ties</a></td>   </tr>',
    `<tr>  <td><a href="#">Blazers</a></td>  <th><a href="#">Boxes</a></th>  <th><a href="#" style="color:black;">Watches</a></th>  <td><a href="#">Cufflinks</a></td>   </tr>`,
    '<tr>  <th><a href="#" style="color:black;">Bottoms</a></th>  <th><a href="#">Briefs</a></th>  <td><a href="#">Smartwatches</a></td>  <th><a href="#">Sunglasses</a></th>   </tr>',
    '<tr>  <td><a href="#">Jeans</a></td>  <td><a href="#">Trunks</a></td>  <td><a href="#">Work Watches</a></td>  <td><a href="#">Caps</a></td>   </tr>',
    '<tr>  <td><a href="#">Chinos</a></td>  <td><a href="#">Vests</a></td>  <td><a href="#">Casual Watches</a></td>  <td><a href="#" style="color:black;">Sports & Fitness</a></td>   </tr>',
    '<tr>  <th><a href="#">Trousers</a></th>  <td><a href="#">Night Suits</a></td>  <td><a href="#">Party Watches</a></td>  <th><a href="#">Fitness Equipment</a></th>   </tr>',
    '<tr>  <td><a href="#">Formal Trousers</a></td>  <td><a href="#" style="color:black;">Footwear</a></td>  <th><a href="#">Digitalwatches</a></th>  <td><a href="#">Sports Equipment</a></td>   </tr>',
    '<tr>  <td><a href="#">Shorts</a></td>  <td><a href="#">Casual Shoes</a></td>  <td><a href="#">Multifunctional Watches</a></td>  <td><a href="#">Threadmill</a></td>   </tr>',
  ],
  [
    '<tr>  <th><a href="women.html" style="color:black;">Shop All Ethnic Wear</a></th>  <th><a href="#">Shorts</a></th>  <td><a href="#" style="color:black;">Lingerie & Lounge Sets</a></td>  <td><a href="#" style="color:black;">Bags, Wallets & Clutches</a></td>   </tr>',
    '<tr>  <th><a href="#">Kurtis & Kurtas</a></th>  <th><a href="#">Jackets & Blazers</a></th>  <th><a href="#">Bras</a></th>  <th><a href="#">Handbags</a></th>   </tr>',
    '<tr>  <th><a href="#">Suits</a></th>  <th><a href="#">Leggings</a></th>  <th><a href="#">Panties</a></th>  <td><a href="#">Tote Bags</a></td>   </tr>',
    '<tr>  <td><a href="women.html">Sarees</a></td>  <td><a href="#">Capris</a></td>  <td><a href="#">Lingerie Sets</a></td>  <td><a href="#">Sling Bags</a></td>   </tr>',
    '<tr>  <td><a href="#">Lehengas</a></td>  <td><a href="#">Jumpsuits</a></td>  <td><a href="#">Camisoles</a></td>  <td><a href="#">Backpacks</a></td>   </tr>',
    '<tr>  <td><a href="#">Bottoms</a></td>  <td><a href="#">Shrugs</a></td>  <td><a href="#">Sleepwear & Robes</a></td>  <td><a href="#">Wallets</a></td>   </tr>',
    '<tr>  <td><a href="#">Blouses & Fabrics</a></td>  <td><a href="#">Sweaters</a></td>  <td><a href="#">Shapewear</a></td>  <td><a href="#">Clutches</a></td>   </tr>',
    '<tr>  <td><a href="#">Dupattas</a></td>  <td><a href="#">Sweatshirts</a></td>  <td><a href="#">Swimwear</a></td>  <td><a href="#">Premium Handbags</a></td>   </tr>',
    '<tr>  <td><a href="#">Blouses & Dress material</a></td>  <td><a href="#">Leggings</a></td>  <td><a href="#">Sports Shoes</a></td>  <td><a href="#">Clutches</a></td>   </tr>',
    '<tr>  <th><a href="#" style="color:black;">Shop All Western Wear</a></th>  <td><a href="#" style="color:black;">Activewear & Sportswear</a></td>  <td><a href="#" style="color:black;">Shop All Footwear</a></td>  <td><a href="#" style="color:black;">Jewellery</a></td>   </tr>',
    '<tr>  <td><a href="#">Tops & T-shirts</a></td>  <td><a href="#">T-shirts</a></td>  <th><a href="#">Casual Footwear</a></th>  <th><a href="#">Gold</a></th>   </tr>',
    '<tr>  <td><a href="#">Dresses</a></td>  <td><a href="#">Shorts</a></td>  <td><a href="#">Boots</a></td>  <td><a href="#">Diamond</a></td>   </tr>',
    '<tr>  <td><a href="#">Jeans</a></td>  <td><a href="#">Sets</a></td>  <td><a href="#">Sneakers</a></td>  <td><a href="#">Silver</a></td>   </tr>',
    '<tr>  <td><a href="#">Shirts</a></td>  <td><a href="#">Jackets</a></td>  <td><a href="#">Flip Flops</a></td>  <td><a href="#">Fashion Jewellery</a></td>   </tr>',
    '<tr>  <td><a href="#">Skirts</a></td>  <td><a href="#">Innerwear</a></td>  <td><a href="#">Ethnic Footwear</a></td>  <td><a href="#">Smart</a></td>   </tr>',
  ],
  [
    '<tr>  <th><a href="#" style="color:black;">Tops</a></th>  <td><a href="#">Joggers</a></td>  <th><a href="#">Sneakers</a></th>  <td><a href="#" style="color:black;">Bags, Backpacks & Wallets</a></td>   </tr>',
    '<tr>  <td><a href="mens.html">T-shirts</a></td>  <td><a href="#">Trackpants</a></td>  <td><a href="#">Formal Shoes</a></td>  <td><a href="#">Backpacks </a></td>   </tr>',
    '<tr>  <td><a href="#">Polo T-shirts</a></td>  <td><a href="#" style="color:black;">Activewear</a></td>  <td><a href="#">Running Shoes</a></td>  <td><a href="#">Wallets</a></td>   </tr>',
    '<tr>  <td><a href="#">Shirts</a></td>  <td><a href="#">T-shirts & Jerseys</a></td>  <td><a href="#">Training Shoes</a></td>  <th><a href="#">Messenger Bags</a></th>   </tr>',
    '<tr>  <td><a href="#">Formal Shirts</a></td>  <td><a href="#">Sports Shorts</a></td>  <td><a href="#">Sports Shoes</a></td>  <td><a href="#">Crossbody Bags</a></td>   </tr>',
    '<tr>  <td><a href="#">Sweatshirts</a></td>  <td><a href="#">Sports Jackets</a></td>  <td><a href="#">Boots</a></td>  <td><a href="#" style="color:black;">Fashion Accessories</a></td>   </tr>',
    '<tr>  <td><a href="#">Jackets</a></td>  <td><a href="#">Joggers</a></td>  <td><a href="#">Flip Flops</a></td>  <td><a href="#">Belts</a></td>   </tr>',
    '<tr>  <td><a href="ProductPage.html">Suits</a></td>  <th><a href="#" style="color:black;">Innerwear</a></th>  <th><a href="#">Sandals & Floaters</a></th>  <td><a href="#">Ties</a></td>   </tr>',
    `<tr>  <td><a href="#">Blazers</a></td>  <th><a href="#">Boxes</a></th>  <th><a href="#" style="color:black;">Watches</a></th>  <td><a href="#">Cufflinks</a></td>   </tr>`,
    '<tr>  <th><a href="#" style="color:black;">Bottoms</a></th>  <th><a href="#">Briefs</a></th>  <td><a href="#">Smartwatches</a></td>  <th><a href="#">Sunglasses</a></th>   </tr>',
    '<tr>  <td><a href="#">Jeans</a></td>  <td><a href="#">Trunks</a></td>  <td><a href="#">Work Watches</a></td>  <td><a href="#">Caps</a></td>   </tr>',
    '<tr>  <td><a href="#">Chinos</a></td>  <td><a href="#">Vests</a></td>  <td><a href="#">Casual Watches</a></td>  <td><a href="#" style="color:black;">Sports & Fitness</a></td>   </tr>',
    '<tr>  <th><a href="#">Trousers</a></th>  <td><a href="#">Night Suits</a></td>  <td><a href="#">Party Watches</a></td>  <th><a href="#">Fitness Equipment</a></th>   </tr>',
    '<tr>  <td><a href="#">Formal Trousers</a></td>  <td><a href="#" style="color:black;">Footwear</a></td>  <th><a href="#">Digitalwatches</a></th>  <td><a href="#">Sports Equipment</a></td>   </tr>',
    '<tr>  <td><a href="#">Shorts</a></td>  <td><a href="#">Casual Shoes</a></td>  <td><a href="#">Multifunctional Watches</a></td>  <td><a href="#">Threadmill</a></td>   </tr>',
  ],
];

var navWomen = document.getElementById("navWomen");
var navMen = document.getElementById("navMen");
var navTv = document.getElementById("navTv");
var navMobile = document.getElementById("navMobile");
var navElectronics = document.getElementById("navElectronics");
var navKid = document.getElementById("navKid");
var navBea = document.getElementById("navBeauty");
var navHome = document.getElementById("navHome");
var displayArrow = 0;
var discatarr = [
  "navCat1",
  "navCat2",
  "navCat3",
  "navCat4",
  "navCat5",
  "navCat6",
  "navCat7",
  "navCat8",
];
var discatarr2 = [
  "navWomen",
  "navMen",
  "navTv",
  "navMobile",
  "navElectronics",
  "navKid",
  "navHome",
  "navBeauty",
];

function arrowdis(displayArrow) {
  for (var d = 0; d < 8; d++) {
    if (displayArrow == d) {
      var distemp = document.getElementById(discatarr[d]);
      distemp.style.display = "block";
      var distemp1 = document.getElementById(discatarr2[d]);
      distemp1.style.color = "black";
    } else {
      var distemp = document.getElementById(discatarr[d]);
      distemp.style.display = "none";
      var distemp1 = document.getElementById(discatarr2[d]);
      distemp1.style.color = "gray";
    }
  }
}

// document.querySelector("#cateTable").style.fontSize= "14px";

// document.querySelector("#listCat").style.fontSize= "18px";

var cateTable = document.querySelector("#cateTable");

navWomen.onmouseover = function () {
  cateTable.innerHTML = categoriesArray[0].join("");
  displayArrow = 0;
  arrowdis(displayArrow);
};
navMen.onmouseover = function () {
  cateTable.innerHTML = categoriesArray[1].join("");
  displayArrow = 1;
  arrowdis(displayArrow);
};
navTv.onmouseover = function () {
  cateTable.innerHTML = categoriesArray[2].join("");
  displayArrow = 2;
  arrowdis(displayArrow);
};
navMobile.onmouseover = function () {
  cateTable.innerHTML = categoriesArray[3].join("");
  displayArrow = 3;
  arrowdis(displayArrow);
};
navElectronics.onmouseover = function () {
  cateTable.innerHTML = categoriesArray[4].join("");
  displayArrow = 4;
  arrowdis(displayArrow);
};
navKid.onmouseover = function () {
  cateTable.innerHTML = categoriesArray[5].join("");
  displayArrow = 5;
  arrowdis(displayArrow);
};
navHome.onmouseover = function () {
  cateTable.innerHTML = categoriesArray[6].join("");
  displayArrow = 6;
  arrowdis(displayArrow);
};
navBea.onmouseover = function () {
  cateTable.innerHTML = categoriesArray[7].join("");
  displayArrow = 7;
  arrowdis(displayArrow);
};

var blockshowCat = document.getElementById("blockshowCat");

var cate = document.querySelector(".cat");

cate.onmouseover = function () {
  cateTable.innerHTML = categoriesArray[0].join("");
  cate.style.color = "black";
  cate.style.backgroundColor = "white";
  var aroiconc = document.querySelector("#farc");
  aroiconc.style.transform = "rotate(180deg)";
  aroiconc.style.padding = "5px";
  displayArrow = 0;
  arrowdis(displayArrow);
};
cate.onmouseout = function () {
  cate.style.color = "white";
  cate.style.backgroundColor = "#212121";
  var aroiconc = document.querySelector("#farc");
  aroiconc.style.transform = "rotate(0deg)";
};

blockshowCat.onmouseover = function () {
  cate.style.color = "black";
  cate.style.backgroundColor = "white";
  var aroiconc = document.querySelector("#farc");
  aroiconc.style.transform = "rotate(180deg)";
};
blockshowCat.onmouseout = function () {
  cate.style.color = "white";
  cate.style.backgroundColor = "#212121";
  var aroiconc = document.querySelector("#farc");
  aroiconc.style.transform = "rotate(0deg)";
};

document.querySelector(".logoHolder").addEventListener("click", homepageFun);

function homepageFun() {
  window.location.href = "index.html";
}

// var searchBar =document.getElementById("search")
// searchBar.addEventListener("click", changeSearch)
// var btxxn='<button onclick="crosSearch()" id="times"><i class="fal fa-times id="times"></i></button>'
// var intext='<input type="text" placeholder="" id="onEffet">'+btxxn

// function changeSearch(){
// searchBar.innerHTML=intext

// }

// function crosSearch(){

// intext='<input type="text" placeholder="Search" id="beforeEfc"><i class="far fa-search"></i>'

// }

// window.addEventListener('load', (event) => {

//   var cart=JSON.parse(localStorage.getItem("cartlist")) || [];
//   //  fav.push(data);
//   if(cart.length!==0) {
//     document.getElementById("cartCounter2").style.display="block"
//    document.getElementById("cartCounter2").textContent=cart.length;}
//     else{
//       document.getElementById("cartCounter2").style.display="none"
//     }

//    var fav=JSON.parse(localStorage.getItem("favlist")) || [];
//    if(fav.length!==0) {
//     document.getElementById("cartCounter1").style.display="block"
//    document.getElementById("cartCounter1").textContent=fav.length;}
//     else{
//       document.getElementById("cartCounter1").style.display="none"
//     }
//    //  fav.push(data);
//     document.getElementById("cartCounter1").textContent=fav.length;
// });

// // Home
// document.getElementById("logo").addEventListener("click",function(){
// window.location.href="index.html"
// })

// document.getElementById("nav2ContentImg1").addEventListener("click",function(){
//   window.location.href="wishlist.html"
// })
// // Clear=================

// // cart--------------------
// document.getElementById("nav2ContentImg2").addEventListener("click",function(){
//   var cartitems=JSON.parse(localStorage.getItem("cartlist")) || []
//   if(cartitems.length==0) {
//     window.location.href="emptycart.html"
//   }
//   else{
//     window.location.href="cart.html"
//   }

// })
