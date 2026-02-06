
import { Question, AnimalInfo, AnimalKey } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "무언가를 시도하다 실패했을 때, 나는 어떤 편인가?",
    choices: [
      { text: "실패 원인을 아주 세세하게 분석하고 보완한다.", scores: { RAT: 2, ROOSTER: 1, SNAKE: 1 } },
      { text: "아쉽지만 운이 없었다 생각하고 다음을 기약한다.", scores: { PIG: 2, HORSE: 1, MONKEY: 1 } },
      { text: "곧바로 다시 도전하거나 더 큰 목표를 세운다.", scores: { TIGER: 2, HORSE: 1, DRAGON: 1 } },
      { text: "주변의 위로를 받으며 천천히 기운을 차린다.", scores: { SHEEP: 2, RABBIT: 1, SNAKE: 1 } }
    ]
  },
  {
    id: 2,
    question: "계획해둔 일정이 갑자기 틀어졌을 때",
    choices: [
      { text: "순간적으로 스트레스를 받지만 대안 B를 바로 찾는다.", scores: { RAT: 2, ROOSTER: 1, SNAKE: 1 } },
      { text: "오히려 좋아! 즉흥적인 상황을 즐긴다.", scores: { PIG: 2, HORSE: 1, MONKEY: 1 } },
      { text: "누구 때문인지 확실히 짚고 넘어가야 직성이 풀린다.", scores: { ROOSTER: 2, OX: 1, DOG: 1 } },
      { text: "일단 상황을 지켜보며 흐름에 몸을 맡긴다.", scores: { HORSE: 2, MONKEY: 1, TIGER: 1 } }
    ]
  },
  {
    id: 3,
    question: "처음 가는 모임이나 자리에서 나는",
    choices: [
      { text: "먼저 말을 걸며 분위기를 주도하는 편이다.", scores: { MONKEY: 2, RABBIT: 1, SNAKE: 1 } },
      { text: "누가 말을 걸어줄 때까지 조용히 관찰한다.", scores: { SNAKE: 2, RAT: 1, RABBIT: 1 } },
      { text: "당당하게 내 의견을 피력하며 존재감을 드러낸다.", scores: { TIGER: 2, HORSE: 1, MONKEY: 1 } },
      { text: "주변 사람들을 챙기며 편안하게 해주려 노력한다.", scores: { DOG: 2, RABBIT: 1, OX: 1 } }
    ]
  },
  {
    id: 4,
    question: "중요한 결정을 앞두고 있을 때",
    choices: [
      { text: "가장 현실적이고 손해가 적은 방향을 택한다.", scores: { RAT: 2, SNAKE: 1, ROOSTER: 1 } },
      { text: "내 직관과 에너지가 이끄는 대로 움직인다.", scores: { HORSE: 2, PIG: 1, DRAGON: 1 } },
      { text: "충분한 시간을 두고 끝까지 고민하여 신중히 결정한다.", scores: { OX: 2, DOG: 1, ROOSTER: 1 } },
      { text: "이상적이고 원대한 가치를 보고 결정한다.", scores: { DRAGON: 2, TIGER: 1, SNAKE: 1 } }
    ]
  },
  {
    id: 5,
    question: "팀으로 무언가를 해야 할 때",
    choices: [
      { text: "내가 리더가 되어 방향을 지시하고 이끄는 편이다.", scores: { TIGER: 2, DRAGON: 1, DOG: 1 } },
      { text: "내 역할에만 완벽히 집중하여 결과물을 낸다.", scores: { ROOSTER: 2, RAT: 1, SNAKE: 1 } },
      { text: "팀원들 사이의 의견을 조율하고 화합을 돕는다.", scores: { RABBIT: 2, SHEEP: 1, MONKEY: 1 } },
      { text: "효율적인 시스템이나 추진력을 제공한다.", scores: { HORSE: 2, MONKEY: 1, OX: 1 } }
    ]
  },
  {
    id: 6,
    question: "문제가 생겼다는 걸 알게 되었을 때",
    choices: [
      { text: "차분하게 원인부터 파악하고 해결책을 구상한다.", scores: { SNAKE: 2, RAT: 1, ROOSTER: 1 } },
      { text: "일단 몸으로 부딪쳐서 어떻게든 해결한다.", scores: { HORSE: 2, TIGER: 1, MONKEY: 1 } },
      { text: "주변 전문가나 경험자에게 조언을 구한다.", scores: { ROOSTER: 2, TIGER: 1, SNAKE: 1 } },
      { text: "당황스럽지만 일단 마음을 다스리고 상황을 수용한다.", scores: { RABBIT: 2, SHEEP: 1, DOG: 1 } }
    ]
  },
  {
    id: 7,
    question: "돈이나 보상이 걸린 선택 앞에서",
    choices: [
      { text: "한 번에 큰 것보다 꾸준하고 확실한 수익을 원한다.", scores: { OX: 2, DOG: 1, ROOSTER: 1 } },
      { text: "리스크가 있더라도 큰 성취를 맛보고 싶다.", scores: { DRAGON: 2, TIGER: 1, HORSE: 1 } },
      { text: "작은 이익이라도 놓치지 않으려 꼼꼼히 챙긴다.", scores: { RAT: 2, SNAKE: 1, DOG: 1 } },
      { text: "나 혼자보다는 함께 나누는 즐거움을 고려한다.", scores: { PIG: 2, HORSE: 1, MONKEY: 1 } }
    ]
  },
  {
    id: 8,
    question: "사람 사이에 갈등이 생겼을 때",
    choices: [
      { text: "논리적으로 시시비비를 가려야 한다.", scores: { TIGER: 2, DOG: 1, DRAGON: 1 } },
      { text: "웃음으로 넘기거나 분위기를 전환하려 한다.", scores: { MONKEY: 2, PIG: 1, RABBIT: 1 } },
      { text: "참고 견디며 시간이 해결해주길 기다린다.", scores: { OX: 2, RABBIT: 1, DOG: 1 } },
      { text: "상대방의 감정을 먼저 살피고 공감해준다.", scores: { SHEEP: 2, RABBIT: 1, MONKEY: 1 } }
    ]
  },
  {
    id: 9,
    question: "새로운 기회가 눈앞에 왔을 때",
    choices: [
      { text: "철저히 조사하고 완벽한 타이밍을 기다린다.", scores: { RAT: 2, SNAKE: 1, ROOSTER: 1 } },
      { text: "고민하기보다 일단 긍정적으로 받아들인다.", scores: { PIG: 2, HORSE: 1, MONKEY: 1 } },
      { text: "앞뒤 재지 않고 열정적으로 뛰어든다.", scores: { HORSE: 2, TIGER: 1, DRAGON: 1 } },
      { text: "이 기회가 나에게 주는 의미를 깊게 되새긴다.", scores: { DOG: 2, OX: 1, RABBIT: 1 } }
    ]
  },
  {
    id: 10,
    question: "계획을 세울 때 나는",
    choices: [
      { text: "분 단위까지 세밀하게 계획하는 편이다.", scores: { ROOSTER: 2, RAT: 1, SNAKE: 1 } },
      { text: "큰 그림만 그리고 세부 사항은 유동적으로 둔다.", scores: { DRAGON: 2, TIGER: 1, MONKEY: 1 } },
      { text: "즐겁고 재미있는 요소들을 많이 포함시킨다.", scores: { MONKEY: 2, HORSE: 1, PIG: 1 } },
      { text: "일단 시작하고 상황에 따라 경로를 수정한다.", scores: { HORSE: 2, TIGER: 1, PIG: 1 } }
    ]
  },
  {
    id: 11,
    question: "책임이 무거운 일을 맡았을 때",
    choices: [
      { text: "부담스럽지만 묵묵하게 끝까지 완수한다.", scores: { OX: 2, DOG: 1, DRAGON: 1 } },
      { text: "사람들과 협력하여 짐을 나누어 진다.", scores: { RABBIT: 2, MONKEY: 1, DOG: 1 } },
      { text: "어떻게 하면 가장 효율적으로 끝낼지 잔머리를 쓴다.", scores: { RAT: 2, SNAKE: 1, DOG: 1 } },
      { text: "화려한 결과물로 나의 가치를 증명하려 한다.", scores: { HORSE: 2, ROOSTER: 1, TIGER: 1 } }
    ]
  },
  {
    id: 12,
    question: "사람을 판단할 때 더 중요하게 보는 건",
    choices: [
      { text: "그 사람의 성실함과 도덕적인 태도", scores: { DOG: 2, OX: 1, ROOSTER: 1 } },
      { text: "나와 대화가 얼마나 잘 통하고 재치 있는지", scores: { MONKEY: 2, HORSE: 1, RABBIT: 1 } },
      { text: "그 사람이 가진 능력과 추진력", scores: { ROOSTER: 2, TIGER: 1, DRAGON: 1 } },
      { text: "타인을 대하는 따뜻함과 배려심", scores: { RABBIT: 2, PIG: 1, DOG: 1 } }
    ]
  },
  {
    id: 13,
    question: "스트레스를 받을 때 나는",
    choices: [
      { text: "혼자만의 시간을 가지며 상황을 복기한다.", scores: { SNAKE: 2, RAT: 1, DRAGON: 1 } },
      { text: "맛있는 걸 먹거나 푹 자며 잊어버린다.", scores: { PIG: 2, OX: 1, RABBIT: 1 } },
      { text: "좋아하는 취미 활동이나 수다로 푼다.", scores: { RABBIT: 2, MONKEY: 1, SHEEP: 1 } },
      { text: "격렬한 운동이나 활동으로 에너지를 발산한다.", scores: { HORSE: 2, TIGER: 1, MONKEY: 1 } }
    ]
  },
  {
    id: 14,
    question: "예상하지 못한 문제를 혼자 해결해야 할 때, 나는 어떻게 하는 편인가?",
    choices: [
      { text: "다시 차분히 계산해서 방법을 찾는다", scores: { RAT: 2, SNAKE: 1, ROOSTER: 1 } },
      { text: "일단 밀어붙이며 해결을 시도한다", scores: { TIGER: 2, HORSE: 1, DRAGON: 1 } },
      { text: "우회할 수 있는 다른 방법을 찾는다", scores: { SNAKE: 2, MONKEY: 1, RAT: 1 } },
      { text: "잠시 멈추고 상황이 더 명확해질 때까지 기다린다", scores: { RABBIT: 2, SHEEP: 1, DOG: 1 } }
    ]
  },
  {
    id: 15,
    question: "목표를 세울 때 더 끌리는 건",
    choices: [
      { text: "작지만 확실하게 이룰 수 있는 실질적인 목표", scores: { OX: 2, DOG: 1, ROOSTER: 1 } },
      { text: "세상을 놀라게 할 만한 원대한 포부", scores: { DRAGON: 2, TIGER: 1, SNAKE: 1 } },
      { text: "과정 자체가 즐겁고 행복할 수 있는 일", scores: { PIG: 2, HORSE: 1, MONKEY: 1 } },
      { text: "누군가에게 도움이 될 수 있는 이타적인 목표", scores: { DOG: 2, RABBIT: 1, TIGER: 1 } }
    ]
  },
  {
    id: 16,
    question: "나는 휴일에 주로 ",
    choices: [
      { text: "집에서 밀린 휴식을 취하며 재충전한다.", scores: { PIG: 2, DOG: 1, OX: 1 } },
      { text: "미뤄둔 집안일을 하거나 계획을 세운다.", scores: { ROOSTER: 2, RAT: 1, OX: 1 } },
      { text: "멀리 여행을 가거나 새로운 곳을 탐험한다.", scores: { HORSE: 2, MONKEY: 1, PIG: 1 } },
      { text: "친한 친구들을 만나 즐거운 시간을 보낸다.", scores: { MONKEY: 2, RABBIT: 1, DOG: 1 } }
    ]
  },
  {
    id: 17,
    question: "두 가지 선택지가 있을 때 둘 다 마음에 들지 않는다면",
    choices: [
      { text: "제3의 대안을 직접 만들거나 찾아낸다.", scores: { RAT: 2, SNAKE: 1, DOG: 1 } },
      { text: "그중 덜 나쁜 것을 직관적으로 빨리 고른다.", scores: { PIG: 2, HORSE: 1, MONKEY: 1 } },
      { text: "원칙에 어긋나지 않는 쪽을 신중히 선택한다.", scores: { DOG: 2, RABBIT: 1, OX: 1 } },
      { text: "둘 다 포기하고 새로운 기회를 기다린다.", scores: { HORSE: 2, ROOSTER: 1, TIGER: 1 } }
    ]
  },
  {
    id: 18,
    question: "실패를 겪은 뒤 나는",
    choices: [
      { text: "오답 노트를 쓰듯 철저하게 배운다.", scores: { ROOSTER: 2, RAT: 1, SNAKE: 1 } },
      { text: "경험이라 생각하고 금방 툭툭 털어낸다.", scores: { HORSE: 2, PIG: 1, MONKEY: 1 } },
      { text: "자신을 위로하며 마음의 여유를 먼저 찾는다.", scores: { SHEEP: 2, RABBIT: 1, SNAKE: 1 } },
      { text: "독기를 품고 더 높은 목표를 향해 달려간다.", scores: { TIGER: 2, DRAGON: 1, HORSE: 1 } }
    ]
  }
];

export const ANIMAL_DATA: Record<AnimalKey, AnimalInfo> = {
  RAT: {
    key: 'RAT',
    name: '쥐',
    symbol: '🐀',
    yinYang: '음(陰)',
    element: '수(水)',
    season: '겨울',
    description: '당신은 선택의 순간에 현실적인 이득과 효율을 먼저 취합니다. 상황이 복잡해질수록 데이터와 실질적인 증거를 기준으로 움직이며, 성취를 통해 자신의 능력을 증명하려 합니다.',
    traits: [
      '현실적이고 계산적인 방식으로 결정을 내린다',
      '위기 상황에서 임기응변에 강점을 보인다',
      '장기적인 인내심에는 비교적 약하다',
      '실질적인 결과물을 중요하게 여긴다'
    ],
    worryMessage: '당신은 비슷한 순간마다, 가장 안전하고 효율적인 구멍을 찾아내는 습관이 있어요.',
    bestMatches: ['용', '원숭이'],
    worstMatches: ['말', '양']
  },
  OX: {
    key: 'OX',
    name: '소',
    symbol: '🐂',
    yinYang: '음(陰)',
    element: '토(土)',
    season: '겨울',
    description: '당신은 선택의 순간에 묵묵한 성실함과 신뢰를 먼저 취합니다. 상황이 복잡해질수록 원칙과 과거의 경험을 기준으로 움직이며, 성취보다는 과정의 정직함에 더 반응합니다.',
    traits: [
      '신중하고 일관된 방식으로 결정을 내린다',
      '장기적인 프로젝트나 인내가 필요한 상황에서 강점을 보인다',
      '갑작스러운 변화에 대응하는 속도는 비교적 약하다',
      '책임감과 신의를 중요하게 여긴다'
    ],
    worryMessage: '당신은 비슷한 순간마다, 느리지만 가장 단단한 발자국을 남기고 있네요.',
    bestMatches: ['쥐', '닭'],
    worstMatches: ['양', '말']
  },
  TIGER: {
    key: 'TIGER',
    name: '호랑이',
    symbol: '🐅',
    yinYang: '양(陽)',
    element: '목(木)',
    season: '봄',
    description: '당신은 선택의 순간에 주도권과 강력한 추진력을 먼저 취합니다. 상황이 복잡해질수록 자신의 자존감과 정의를 기준으로 움직이며, 관계보다는 성취를 위해 직진하는 편입니다.',
    traits: [
      '결단력 있고 시원시원한 방식으로 결정을 내린다',
      '모두가 주저하는 돌파구가 필요한 상황에서 강점을 보인다',
      '세밀한 감정 조율이나 타협에는 비교적 약하다',
      '자신의 명예와 리더십을 중요하게 여긴다'
    ],
    worryMessage: '당신은 비슷한 순간마다, 숲을 호령하는 왕처럼 당당하게 나아가고 있군요.',
    bestMatches: ['말', '개'],
    worstMatches: ['원숭이', '뱀']
  },
  RABBIT: {
    key: 'RABBIT',
    name: '토끼',
    symbol: '🐇',
    yinYang: '음(陰)',
    element: '목(木)',
    season: '봄',
    description: '당신은 선택의 순간에 조화로운 관계와 정서적 안정을 먼저 취합니다. 상황이 복잡해질수록 주변의 평판과 평화를 기준으로 움직이며, 성취보다는 사람 사이의 연결에 더 반응합니다.',
    traits: [
      '유연하고 사려 깊은 방식으로 결정을 내린다',
      '갈등을 중재하고 분위기를 편안하게 만드는 상황에서 강점을 보인다',
      '거절하거나 매정한 결단을 내리는 데는 비교적 약하다',
      '마음의 평온과 조화를 중요하게 여긴다'
    ],
    worryMessage: '당신은 비슷한 순간마다, 주변을 살피며 가장 따뜻한 길을 선택하고 있어요.',
    bestMatches: ['양', '돼지'],
    worstMatches: ['닭', '용']
  },
  DRAGON: {
    key: 'DRAGON',
    name: '용',
    symbol: '🐉',
    yinYang: '양(陽)',
    element: '토(土)',
    season: '봄',
    description: '당신은 선택의 순간에 원대한 비전과 창의적인 이상을 먼저 취합니다. 상황이 복잡해질수록 자신의 가치관과 미래의 가능성을 기준으로 움직이며, 현실적인 제약보다는 꿈을 쫓는 편입니다.',
    traits: [
      '독창적이고 대담한 방식으로 결정을 내린다',
      '새로운 패러다임을 제시해야 하는 상황에서 강점을 보인다',
      '일상의 지루한 반복 작업이나 세밀한 관리에는 비교적 약하다',
      '자유로운 영혼과 이상을 중요하게 여긴다'
    ],
    worryMessage: '당신은 비슷한 순간마다, 구름 위를 보며 자신만의 하늘을 그리고 있군요.',
    bestMatches: ['쥐', '원숭이'],
    worstMatches: ['개', '토끼']
  },
  SNAKE: {
    key: 'SNAKE',
    name: '뱀',
    symbol: '🐍',
    yinYang: '음(陰)',
    element: '화(火)',
    season: '여름',
    description: '당신은 선택의 순간에 냉철한 분석과 전략적인 판단을 먼저 취합니다. 상황이 복잡해질수록 인과관계와 본질적인 핵심을 기준으로 움직이며, 감정보다는 논리적인 완결성에 더 반응합니다.',
    traits: [
      '치밀하고 계획적인 방식으로 결정을 내린다',
      '복잡한 문제를 단순화하고 핵심을 찌르는 상황에서 강점을 보인다',
      '직설적인 화법으로 인한 오해를 푸는 데는 비교적 약하다',
      '지적인 깊이와 완벽함을 중요하게 여긴다'
    ],
    worryMessage: '당신은 비슷한 순간마다, 껍질을 벗듯 불필요한 것을 쳐내고 핵심만 보고 있네요.',
    bestMatches: ['소', '닭'],
    worstMatches: ['돼지', '호랑이']
  },
  HORSE: {
    key: 'HORSE',
    name: '말',
    symbol: '🐎',
    yinYang: '양(陽)',
    element: '화(火)',
    season: '여름',
    description: '당신은 선택의 순간에 자유로운 활동성과 즉각적인 실행을 먼저 취합니다. 상황이 복잡해질수록 자신의 직관과 에너지가 이끄는 곳을 기준으로 움직이며, 역동적인 성취를 선호합니다.',
    traits: [
      '정열적이고 행동 중심적인 방식으로 결정을 내린다',
      '빠른 실행력이 요구되거나 새로운 시작을 해야 하는 상황에서 강점을 보인다',
      '한 곳에 정착하여 꾸준히 마무리하는 데는 비교적 약하다',
      '자유와 열정적인 도전을 중요하게 여긴다'
    ],
    worryMessage: '당신은 비슷한 순간마다, 멈추지 않고 드넓은 초원을 달리고 싶어 하네요.',
    bestMatches: ['호랑이', '개'],
    worstMatches: ['쥐', '소']
  },
  SHEEP: {
    key: 'SHEEP',
    name: '양',
    symbol: '🐑',
    yinYang: '음(陰)',
    element: '토(土)',
    season: '여름',
    description: '당신은 선택의 순간에 포용력 있는 배려와 예술적 감수성을 먼저 취합니다. 상황이 복잡해질수록 공동체의 평화와 자신의 감수성을 기준으로 움직이며, 투쟁보다는 순응과 화합을 택합니다.',
    traits: [
      '부드럽고 이해심 깊은 방식으로 결정을 내린다',
      '사람들을 다독이고 정서적인 지지를 주는 상황에서 강점을 보인다',
      '주도적으로 환경을 바꾸거나 독해지는 데는 비교적 약하다',
      '정서적 교감과 안정감을 중요하게 여긴다'
    ],
    worryMessage: '당신은 비슷한 순간마다, 가시 돋친 세상에서 가장 보드라운 털을 내어주고 있군요.',
    bestMatches: ['토끼', '돼지'],
    worstMatches: ['소', '쥐']
  },
  MONKEY: {
    key: 'MONKEY',
    name: '원숭이',
    symbol: '🐒',
    yinYang: '양(陽)',
    element: '금(金)',
    season: '가을',
    description: '당신은 선택의 순간에 기발한 재치와 다재다능한 사교성을 먼저 취합니다. 상황이 복잡해질수록 재미와 효율적인 요령을 기준으로 움직이며, 고지식한 원칙보다는 유연한 대처에 더 반응합니다.',
    traits: [
      '영리하고 변화무쌍한 방식으로 결정을 내린다',
      '교착 상태에서 생각지 못한 돌파구를 찾는 상황에서 강점을 보인다',
      '진지한 분위기나 깊은 인내심 유지에는 비교적 약하다',
      '지적인 유희와 타인과의 소통을 중요하게 여긴다'
    ],
    worryMessage: '당신은 비슷한 순간마다, 가장 즐겁고 영리한 지름길을 찾아내고 있네요.',
    bestMatches: ['쥐', '용'],
    worstMatches: ['호랑이', '뱀']
  },
  ROOSTER: {
    key: 'ROOSTER',
    name: '닭',
    symbol: '🐓',
    yinYang: '음(陰)',
    element: '금(金)',
    season: '가을',
    description: '당신은 선택의 순간에 체계적인 완벽함과 분명한 자기 주관을 먼저 취합니다. 상황이 복잡해질수록 규율과 세부적인 완성도를 기준으로 움직이며, 성취를 위해 자신을 엄격히 관리하는 편입니다.',
    traits: [
      '분석적이고 체계적인 방식으로 결정을 내린다',
      '복잡한 일을 정리하고 완벽한 마무리를 지어야 하는 상황에서 강점을 보인다',
      '융통성을 발휘하거나 허술함을 견디는 데는 비교적 약하다',
      '자신의 전문성과 정확성을 중요하게 여긴다'
    ],
    worryMessage: '당신은 비슷한 순간마다, 새벽을 깨우듯 가장 명확한 답을 외치고 싶어 하네요.',
    bestMatches: ['소', '뱀'],
    worstMatches: ['토끼', '개']
  },
  DOG: {
    key: 'DOG',
    name: '개',
    symbol: '🐕',
    yinYang: '양(陽)',
    element: '토(土)',
    season: '가을',
    description: '당신은 선택의 순간에 정의로운 의리와 신의를 먼저 취합니다. 상황이 복잡해질수록 옳고 그름에 대한 가치관을 기준으로 움직이며, 자신의 이익보다는 관계와 약속에 더 반응합니다.',
    traits: [
      '직직하고 정직한 방식으로 결정을 내린다',
      '신뢰가 필요한 파트너십이나 원칙 고수가 필요한 상황에서 강점을 보인다',
      '지나친 경계심이나 융통성 없는 태도에는 비교적 약하다',
      '충성심과 도덕적 결백함을 중요하게 여긴다'
    ],
    worryMessage: '당신은 비슷한 순간마다, 비바람이 불어도 자신이 믿는 가치를 지키고 있군요.',
    bestMatches: ['호랑이', '말'],
    worstMatches: ['용', '닭']
  },
  PIG: {
    key: 'PIG',
    name: '돼지',
    symbol: '🐖',
    yinYang: '양(陽)',
    element: '수(水)',
    season: '겨울',
    description: '당신은 선택의 순간에 긍정적인 낙천성과 포용력 있는 너그러움을 먼저 취합니다. 상황이 복잡해질수록 현재의 행복과 공동의 만족을 기준으로 움직이며, 결과보다는 함께하는 즐거움을 선호합니다.',
    traits: [
      '여유롭고 낙관적인 방식으로 결정을 내린다',
      '경색된 분위기를 풀고 사람들 사이의 벽을 허무는 상황에서 강점을 보인다',
      '치열한 경쟁이나 세세한 숫자를 다루는 데는 비교적 약하다',
      '인생의 풍요로움과 사람 간의 정을 중요하게 여긴다'
    ],
    worryMessage: '당신은 비슷한 순간마다, 모든 걸 품어주는 넓은 대지처럼 웃고 있네요.',
    bestMatches: ['토끼', '양'],
    worstMatches: ['뱀', '원숭이']
  }
};
