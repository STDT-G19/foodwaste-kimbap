// recipes.js

const recipes = {
  "빵가루": {
    category: "퓨전김밥",
    name: "Kimbap Croquette",
    image: "gimbap_croquette.jpg",
    topic_kr: "김밥을 속재료로 활용한 바삭한 고로케",
    ingredients_kr: "김밥, 밀가루, 계란, 빵가루, 식용유",
    steps_kr: [
      "1. 김밥을 단단히 눌러 모양을 유지합니다.",
      "2. 밀가루 → 계란물 → 빵가루 순으로 입힙니다.",
      "3. 노릇하게 튀겨 완성합니다."
    ],
    topic_en: "Croquettes with a twist—the filling is gimbap for an extra flavorful bite!",
    ingredients_en: "Gimbap, flour, beaten eggs, breadcrumbs, oil",
    steps_en: [
      "1. Press gimbap firmly to maintain shape.",
      "2. Coat with flour → beaten eggs → breadcrumbs.",
      "3. Deep-fry until crispy and golden brown."
    ],
    reference: "https://blog.naver.com/cookbad/220145102408"
  },
  "카레": {
    category: "볶음/기타",
    name: "I-curry-boy",
    image: "gimbap_curry.jpg",
    topic_kr: "김밥과 카레가 어우러진 간단한 볶음밥",
    ingredients_kr: "김밥, 올리브오일, 마늘, 카레가루",
    steps_kr: [
      "1. 김밥을 잘게 썰어줍니다.",
      "2. 팬에 기름을 두르고 마늘을 볶습니다.",
      "3. 김밥을 넣고 잘게 부수며 볶습니다.",
      "4. 카레 육수를 부어 약불로 볶아 마무리합니다."
    ],
    topic_en: "Simple yet delicious fried rice made with gimbap and curry powder.",
    ingredients_en: "Gimbap, olive oil, garlic, curry powder",
    steps_en: [
      "1. Finely chop gimbap.",
      "2. Heat olive oil and fry garlic.",
      "3. Add gimbap and break it apart while stirring.",
      "4. Pour in curry broth and sauté over low heat."
    ],
    reference: "https://www.10000recipe.com/recipe/4496052"
  },
  "피자 치즈": {
    category: "오븐요리",
    name: "Gimbap Pizza Cheese Bake",
    image: "gimbap_pizza.jpg",
    topic_kr: "남은 김밥을 활용한 치즈 가득한 오븐 요리",
    ingredients_kr: "김밥 2~3줄, 피자 치즈, 토마토소스, 파슬리, 올리브오일, 후추",
    steps_kr: [
      "1. 김밥을 1~2cm 두께로 썹니다.",
      "2. 팬에 기름을 두르고 김밥을 깝니다.",
      "3. 토마토소스를 펴 바르고 치즈와 후추, 파슬리를 뿌립니다.",
      "4. 오븐 또는 에어프라이어에 구워 완성합니다."
    ],
    topic_en: "Transform leftover gimbap into a cheesy, savory bake with tomato sauce.",
    ingredients_en: "Leftover gimbap, pizza cheese, tomato sauce, parsley, olive oil, black pepper",
    steps_en: [
      "1. Slice gimbap into rounds.",
      "2. Oil a pan and layer gimbap slices.",
      "3. Spread tomato sauce and top with cheese and seasoning.",
      "4. Bake until cheese is golden and bubbly."
    ],
    reference: "https://hls3790.tistory.com/"
  },
  "튀김": {
    category: "퓨전김밥",
    name: "Gimbap Arancini",
    image: "gimbap_arancini.jpg",
    topic_kr: "남은 김밥으로 만드는 이탈리안 퓨전 아란치니",
    ingredients_kr: "김밥 2~3줄, 모짜렐라 큐브, 밀가루, 계란, 빵가루, 식용유, 토마토소스",
    steps_kr: [
      "1. 김밥을 잘게 썰어 으깹니다.",
      "2. 모짜렐라를 속에 넣고 동그랗게 빚습니다.",
      "3. 밀가루 → 계란 → 빵가루 순으로 묻힙니다.",
      "4. 기름에 튀기고 소스와 함께 제공합니다."
    ],
    topic_en: "Crispy, cheesy Korean-Italian fusion balls using leftover gimbap",
    ingredients_en: "Gimbap, mozzarella cubes, flour, eggs, breadcrumbs, oil, tomato sauce",
    steps_en: [
      "1. Chop and mash gimbap.",
      "2. Insert cheese, form into a ball.",
      "3. Coat in flour, egg, and breadcrumbs.",
      "4. Deep-fry and serve with sauce."
    ],
    reference: "https://www.10000recipe.com/recipe/6833166"
  },
  "돈까스": {
    category: "프라이팬 요리",
    name: "Fried Gimbap Cutlet",
    image: "gimbap_cutlet.jpg",
    topic_kr: "남은 김밥을 돈까스처럼 튀긴 바삭한 레시피",
    ingredients_kr: "김밥 2~3줄, 밀가루, 계란, 빵가루, 식용유",
    steps_kr: [
      "1. 김밥을 통째로 또는 적당히 자릅니다.",
      "2. 밀가루 → 계란 → 빵가루 순으로 입힙니다.",
      "3. 170~180도에서 노릇하게 튀깁니다.",
      "4. 소스와 함께 제공합니다."
    ],
    topic_en: "Crispy gimbap cutlet fried katsu-style",
    ingredients_en: "Leftover gimbap, flour, eggs, breadcrumbs, oil",
    steps_en: [
      "1. Slice gimbap or keep whole.",
      "2. Dredge in flour, dip in egg, coat with breadcrumbs.",
      "3. Deep-fry until golden brown.",
      "4. Serve with tonkatsu sauce."
    ],
    reference: "https://blog.naver.com/yangi282/220446497942"
  },
  "김밥 떡볶이": {
    category: "국물요리",
    name: "Gimbap Tteokbokki",
    image: "gimbap_tteokbokki.jpg",
    topic_kr: "김밥을 떡볶이 국물에 찍어먹는 것보다 진한 맛이 나는 김밥떡볶이",
    ingredients_kr: "쌀떡, 어묵, 깻잎, 진간장, 올리고당, 김밥, 양파, 아마씨가루, 멸치채소국물",
    steps_kr: [
      "1. 멸치채소국물을 만든다.",
      "2. 고추장, 진간장, 양파 넣고 끓인다.",
      "3. 떡, 대파 흰부분, 어묵을 넣는다.",
      "4. 김밥을 넣는다.",
      "5. 깻잎, 대파 초록부분을 넣는다.",
      "6. 아마씨가루 또는 참깨 뿌린다."
    ],
    topic_en: "Rather than dipping the gimbap in the soup, it tastes darker",
    ingredients_en: "Rice cake, fish cake, perilla leaves, soy sauce, oligosaccharide, gimbap, onion, flaxseed powder, anchovy broth",
    steps_en: [
      "1. Make anchovy vegetable soup.",
      "2. Add pepper paste, soy sauce, and onions to the soup and boil.",
      "3. Add rice cakes, white green onion, and fish cake.",
      "4. Add gimbap.",
      "5. Add perilla leaves and green onion tops.",
      "6. Sprinkle flaxseed powder or sesame seeds."
    ],
    reference: "https://www.10000recipe.com/recipe/6971094"
  },
  "김밥 오꼬노미야끼": {
    category: "프라이팬 요리",
    name: "Gimbap Okonomiyaki",
    image: "gimbap_okonomiyaki.jpg",
    topic_kr: "김밥을 오꼬노미야끼 스타일로 만든 맛있는 술안주",
    ingredients_kr: "김밥, 계란, 가쓰오부시, 데리야끼소스, 마요네즈",
    steps_kr: [
      "1. 계란을 풀어준다.",
      "2. 김밥을 한입 크기로 썰고 계란옷 입힌다.",
      "3. 팬에 구워준다.",
      "4. 데리야끼소스, 마요네즈, 가쓰오부시 올린다."
    ],
    topic_en: "Delicious snack made of gimbap in Okonomiyaki style",
    ingredients_en: "Gimbap, eggs, katsuobushi, teriyaki sauce, mayonnaise",
    steps_en: [
      "1. Beat the eggs.",
      "2. Slice gimbap, coat with egg.",
      "3. Pan-fry on medium heat.",
      "4. Top with sauces and katsuobushi."
    ],
    reference: "https://blog.naver.com/luckygirl50/223117150205"
  },
  "김밥죽": {
    category: "국물요리",
    name: "Gimbap Porridge",
    image: "gimbap_porridge.jpg",
    topic_kr: "남은 딱딱한 김밥으로 만들 수 있는 색다른 별미 김밥죽",
    ingredients_kr: "참기름, 대파, 신김치, 다진 마늘, 고춧가루, 멸치 액젓, 국간장, 물, 김밥, 멸치 코인 육수, 쇠고기 다시다, 콩나물, 깨소금, 김가루",
    steps_kr: [
      "1. 참기름에 대파, 김치 볶고 양념 넣기.",
      "2. 물과 김밥 넣고 풀어주기.",
      "3. 육수, 김치국물, 다시다 넣기.",
      "4. 콩나물, 대파 추가 후 깨소금, 김가루로 마무리."
    ],
    topic_en: "Unique delicacy made with leftover hard gimbap",
    ingredients_en: "Sesame oil, green onion, sour kimchi, minced garlic, red pepper powder, anchovy sauce, soy sauce, water, gimbap, broth coin, dashida, bean sprouts, sesame salt, seaweed",
    steps_en: [
      "1. Stir-fry green onion, kimchi in sesame oil, add seasonings.",
      "2. Add water and gimbap and loosen rice.",
      "3. Add broth, kimchi juice, dashida.",
      "4. Add sprouts, green onion, finish with sesame and seaweed."
    ],
    reference: "https://www.youtube.com/shorts/VhrvL-Lf0pM"
  },
  "김밥 라자냐": {
    category: "오븐요리",
    name: "Kimbap Lasagna",
    image: "gimbap_lasagna.jpg",
    topic_kr: "김밥을 얇게 잘라 라자냐 시트처럼 쌓아 만든 오븐 요리",
    ingredients_kr: "김밥, 토마토소스, 모짜렐라 치즈, 파마산 치즈, 바질",
    steps_kr: [
      "1. 김밥을 1cm 두께로 썰기.",
      "2. 오븐용 그릇에 소스→김밥→치즈 순으로 쌓기.",
      "3. 위에 치즈와 바질 뿌리기.",
      "4. 180도에서 10~15분 굽기."
    ],
    topic_en: "Baked dish where sliced gimbap is stacked like lasagna sheets",
    ingredients_en: "Kimbap, tomato sauce, mozzarella cheese, parmesan cheese, basil",
    steps_en: [
      "1. Slice gimbap 1cm thick.",
      "2. Layer sauce, gimbap, cheese in oven dish.",
      "3. Top with cheese and basil.",
      "4. Bake at 180°C for 10–15 mins."
    ],
    reference: "https://www.10000recipe.com/recipe/6947878"
  },
  "김밥 크림 그라탕": {
    category: "오븐요리",
    name: "Kimbap Cream Gratin",
    image: "gimbap_gratin.jpg",
    topic_kr: "크리미한 화이트소스와 어우러지는 김밥 베이크 스타일",
    ingredients_kr: "김밥, 버터, 밀가루, 우유, 소금, 후추, 치즈",
    steps_kr: [
      "1. 팬에 버터 녹이고 밀가루 넣어 볶기.",
      "2. 우유 넣어 화이트소스 만들기.",
      "3. 소금·후추 간하고 김밥 섞기.",
      "4. 오븐용 그릇에 담고 치즈 뿌려 180도에서 굽기."
    ],
    topic_en: "Baked kimbap dish with creamy white sauce",
    ingredients_en: "Kimbap, butter, flour, milk, salt, pepper, cheese",
    steps_en: [
      "1. Melt butter, stir in flour, add milk for sauce.",
      "2. Season and mix with sliced gimbap.",
      "3. Put in oven dish, top with cheese.",
      "4. Bake at 180°C for 10 mins."
    ],
    reference: "https://blog.naver.com/aaaaajyy/220491239585"
  }
};
