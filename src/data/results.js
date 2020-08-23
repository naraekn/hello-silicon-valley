const results = [
  {
    id: 1,
    name: 'Google',
    subtitle: '안녕 친구들 해결사가 왔어 🧞‍♂️',
    description: `
      혹시 본투비 리더, 본투비 문제해결사 🦸🏼‍♀️ 라는 말 들어본 적 없나요?
      문제를 인식한 후 새롭고 창의적인 해결책을 모색하고 
      사람들을 끌어들이는데에 능한 당신. 
      게다가 자신이 하는 일을 즐기며 재밌는 인생을 살아가는군요! 
      언제나 how를 고민하며, 문제를 해결하려는 적극적인 자세, 
      세상에 이로운 움직임을 내려는 마인드셋을 가진 당신을 구글이 격하게 환영할거에요! 🏄🏽‍♀️
    `,
    tag: '안녕 친구들 해결사가 왔어, 구글',
    type: 'light',
  },
  {
    id: 2,
    name: 'Netflix',
    subtitle: '성공의 열매는 언제나 달지 🍇 레디 액션 고!',
    description: `
      자기 확신과 효율성으로 똘똘 뭉쳐 있는 당신은 언제나 탁월한 성과를 거둡니다. 
      결승선을 향해 달려가는 것 만큼 당신에게 만족스러운 일이 또 있을까요? 🥂
      자유를 사랑하고, 이에 따른 책임도 확실히 짊어지는 당신은
      직접 나가 몸으로 행동하여 어느 환경 속에서도 굳건히 살아남습니다.
      게다가 일할 땐 빡세게 일하고, 놀 때는 누구보다 즐겁게 노는 사람이군요.
      이런 위트있는 멋쟁이 여우같으니라고. 🦊
      넷플릭스에게 역구독 당해버렸다!
    `,
    tag: '성공의 열매는 언제나 달지, 넷플릭스',
    type: 'light',
  },
  {
    id: 3,
    name: 'Facebook',
    subtitle: '세상을 바꾸는 주인공, 최강 팀플레이어 🙌',
    description: `
      풍부한 아이디어와 다재다능함, 이상적인 세상을 꿈꾸는 비저너리함은 
      당신을 움직이게 하는 원동력입니다. 🌎 
      사람들의 니즈를 헤아릴 줄 알고, 그것에 깊이 공감하며 
      따뜻한 카리스마로 문제를 해결하는 당신.
      특유의 가치관과 전염성있는 열정으로 팀을 단결시키며 동기부여하는 것과
      뜻을 함께하는 사람과 일할 때 진심으로 즐거워하는군요! 🔥
      지금 당장 페이스북과 인연을 맺어보는 것은 어떨까요?
    `,
    tag: '세상을 바꾸는 최강 팀플레이어, 페이스북',
    type: 'light',
  },
  {
    id: 4,
    name: 'Plug and Play',
    subtitle: '황금을 찾아 뛰어드는 탐험가 🌋',
    description: `
      어느 회사도 당신을 담기에는 역부족입니다. 
      당신은 아무래도 창업을 해야 할 관상이군요. 🤔 
      당신의 참신한 생각과 아이디어, 엉뚱한 호기심은 어딜가도 통통 튀어 모두의 관심을 받습니다. 
      언제나 다양한 가능성을 살피며, 유연한 사고를 지닌 당신은
      도무지 도전과 실패를 두려워하지 않는군요. 개척하고 선구하며 세상을 바꾸려는 탐험가여, 
      당장 ‘플러그앤플레이’ 로 뛰어들어가시오! 🏃🏻‍♀️🏃🏻‍♀️
    `,
    tag: '황금을 찾아 뛰어드는 탐험가, 플러그앤플레이',
    type: 'light',
  },
  {
    id: 5,
    name: 'Amazon',
    subtitle: '민첩하고 따뜻한 최강 수비수 🤼‍♀️',
    description: `
      논리정연함과 체계적인 분석능력을 무기로 문제를 해결하는 당신.⛑ 
      아무리 힘들고 어려운 일이 있을지라도 맡은 바 책임을 다합니다. 
      언제나 디테일에 집중하고, 원리원칙과 질서를 준수하며 완벽을 추구하는 성격으로 
      자신에게는 다소 엄격한 태도를 취하고 있지만, 
      내 사람에게만큼은 기대를 뛰어넘고 다 퍼주는 헌신적인 사람입니다.
      나에게는 엄격한, 그러나 나의 고객에게는 누구보다도 스윗한 당신은 
      고객 중심적인 아마존과 최강케미를 자랑할거에요.💓
    `,
    tag: '민첩하고 따뜻한 최강 수비수, 아마존',
    type: 'light',
  },
  {
    id: 6,
    name: 'Intel',
    subtitle: '실리콘밸리의 하늘같은 조상님 납셨다📺',
    description: `
      정해진 방식과 확실한 지침대로 문제를 해결하는 것을 선호하며 
      그 안에서도 성실하고 신중하게 자신의 길을 개척하는 당신. 🎯 
      일과 삶의 균형을 중요시 여기며, 인내심과 부지런함을 겸비하고 있어 따뜻하고 충성스러운, 
      신뢰받는 사람으로 평가받고 있습니다. 
      실리콘밸리의 조상님, 인텔에서 편안히 모셔가겠습니다.🚢
    `,
    tag: '실리콘밸리의 하늘같은 조상님 납셨다, 인텔',
    type: 'light',
  },
  {
    id: 7,
    name: 'Apple',
    subtitle: '이성과 감성의 트랜지스터, 미지의 수수께끼 🔮',
    description: `
      이성과 감성을 동시에 갖춘 당신! 
      조금 조용한듯 하지만 이상한 매력이 넘쳐서 사람들 사이에서 주목받곤 하지 않나요? 🍏
      혁신적이고 창의적이며 새로운 아이디어도 가지고 있지만, 
      이것이 실제로 현실가능성이 있는지 따져볼 줄 아는군요! 
      독창적이고 자율적이며, 논리적이고 완벽을 추구하기 때문에 
      자신의 아이디어와 이론적 지식에 자부심을 가지고 이를 공유할때 가장 즐겁습니다. 
      신비주의 애플에게 나도 모르게 빠져 허우적대고 있을걸요? 🍎
    `,
    tag: '이성과 감성의 트랜지스터, 수수께끼 애플',
    type: 'dark',
  },
  {
    id: 8,
    name: 'Tesla',
    subtitle: '독창적이고 섹시한 매드 지니어스 🦹‍♂️',
    description: `
      혹시 이상한 기분 안 들어요? 어디선가 알 수 없임는 마성의 아우라가 느껴지네….
      냉철하고 이성적인 판단력과 확실한 결단력으로 문제를 해결하는 당신! 🧪
      거대한 체스판을 보며 큰 그림을 그리고, 
      자신의 새로운 지식과 생각을 끊임없이 재평가하며,
      독특하고 실행 가능한 솔루션을 개발하는데 누구보다 열정적입니다.
      언제나 놀라운 혁신을 일으켜 온 인류를 깜짝 놀라게 하고 불가능을 가능케 만드는 당신. 
      오늘 밤 테슬라와 함께 드림카를 타고 날아가볼까요? 슝슝 🚀
    `,
    tag: '섹시한 매드 지니어스, 마성의 테슬라',
    type: 'light',
  },
  {
    id: 9,
    name: 'Microsoft',
    subtitle: '팔방미인 위대한 쇼맨 🎩',
    description: `
      혹시 학창시절 전교회장 아니셨나요? 저요!
      엄친아, 엄친딸이라는 소리 한번쯤 들어보신 적 있죠? 저요! 🙋‍♀️🙋‍♂️
      조직에서의 화합을 도모하면서도 원칙을 만들고 지킬 줄 아는 당신은 
      한결같고 현실적인 지원과 도움을 줄 수 있으며 
      결과적으로 일에서 승리와 명예를 불러오도록 팀을 이끕니다. 
      다양한 일을 도맡아하지만 안정적이고 꾸준한 유지보수로 사랑받는
      마이크로소프트가 당신에게는 제격 아닐런지?  🦸‍♂️
    `,
    tag: '팔방미인 위대한 쇼맨, 마이크로소프트',
    type: 'light',
  },
];

export default results;
