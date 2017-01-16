(function(){
    angular
            .module('footballFacts')
            .factory('DataService', DataFactory);
    
    function DataFactory(){
        var dataObj = {
            footballData: footballData,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };
        
        return dataObj;
    };
    
    var quizQuestions  = [
        {
            type: "text",
            text: "Who one is a sweeper?",
            possibilities: [
                {
                    answer: "Zinedine Zidane"
                },
                {
                    answer: "Franz Beckenbauer"
                },
                {
                    answer: "Maradona"
                },
                {
                    answer: "Johan Cruyff"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Who has the most goals scored?",
            possibilities: [
                {
                    answer: "Maradona"
                },
                {
                    answer: "Alfredo Di Stéfano"
                },
                {
                    answer: "Pele"
                },
                {
                    answer: "Eusébio"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which one is Alfredo Di Stéfano's picture?",
            possibilities: [
                {
                    answer: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Feyenoord_tegen_PEC,_met_afscheid_Johan_Cruyff_%3B_Johan_Cruyff_op_de_schouders_van_Wijnstekers_en_Brand.jpg"
                },
                {
                    answer: "http://ichef.bbci.co.uk/onesport/cps/480/mcs/media/images/72087000/jpg/_72087825_2673104.jpg"
                },
                {
                    answer: "https://i.ytimg.com/vi/K-4cgoIqC6E/maxresdefault.jpg"
                },
                {
                    answer: "http://i.telegraph.co.uk/multimedia/archive/02559/Alfredo-Di-Stefano_2559799b.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Whose nickname is The king of football?",
            possibilities: [
                {
                    answer: "Pele"
                },
                {
                    answer: "Ronaldo"
                },
                {
                    answer: "Zinedine Zidane"
                },
                {
                    answer: "Eusébio"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Who one has 427 appearances for Bayern Munich?",
            possibilities: [
                {
                    answer: "Alfredo Di Stéfano"
                },
                {
                    answer: "Johan Cruyff"
                },
                {
                    answer: "Franz Beckenbauer"
                },
                {
                    answer: "Ronaldo"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Who one won the European Cup thrice with Ajax?",
            possibilities: [
                {
                    answer: "Johan Cruyff"
                },
                {
                    answer: "Eusébio"
                },
                {
                    answer: "Zinedine Zidane"
                },
                {
                    answer: "Franz Beckenbauer"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Who won the World Cup and became FIFA World Player in 1998?",
            possibilities: [
                {
                    answer: "Hristo Stoichkov"
                },
                {
                    answer: "Maradona"
                },
                {
                    answer: "Ronaldo"
                },
                {
                    answer: "Zinedine Zidane"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which one is Ronaldo?",
            possibilities: [
                {
                    answer: "http://2.bp.blogspot.com/-KYaMsyPjVok/Ur6t9JoesSI/AAAAAAAAB_0/BSMG-bPN-iA/s640/Top+five+Real+Madrid+players+of+all+time.jpg"
                },
                {
                    answer: "http://img.fifa.com/mm/photo/classic/players/02/72/96/32/2729632_xbig-lnd.jpg"
                },
                {
                    answer: "https://i.ytimg.com/vi/B3hh9nis_-8/maxresdefault.jpg"
                },
                {
                    answer: "http://cdn-football365.365.co.za/wp-content/uploads/2016/02/16174830/Johan-Cruyffs-Ajax-farewe-007.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Who one is known as The Hand of God?",
            possibilities: [
                {
                    answer: "Maradona"
                },
                {
                    answer: "Johan Cruyff"
                },
                {
                    answer: "Pele"
                },
                {
                    answer: "Zinedine Zidane"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Who scored his 15th World Cup goal and became record holder of scoring the most goals at World Cups?",
            possibilities: [
                {
                    answer: "Maradona"
                },
                {
                    answer: "Eusébio"
                },
                {
                    answer: "Pele"
                },
                {
                    answer: "Ronaldo"
                }
            ],
            selected: null,
            correct: null
        }
    ];
    
    var footballData = [
        {
            name: "Pelé",
            image_url: "https://provenquality.cdn.speedyrails.net/wp-content/uploads/2013/09/Pele-001.jpg",
            born: "23 October 1940",
            nationality: "Brazil",
            goals: "785",
            position: "Forward",
            description: "The king of football - Pelé was a Brazilian football player who scored more than 1000 goals in his career and became 3 times winner of the World Cup with Brazil. He played most of his career at Santos where he won the Copa libertadores and Intercontinental Cup twice. Pele was known to be great in all aspects of the game, he was great in shooting, heading, dribbling, passing and even defending although he was an attacker. He´s greatness in football makes him the number 2 on our list."
        },
        {
            name: "Maradona",
            image_url: "http://talksport.com/sites/default/files/field/image/201308/diego-maradona.jpg",
            born: "30 October 1960",
            nationality: "Argentina",
            goals: "306",
            position: "Attacking midfielder",
            description: "Diego Maradona winner of the 1986 World Cup and two Italian Championships with Napoli is the number one on our list of best football players ever. Maradona almost single handedly won the World Cup with Argentina in 1986. He became most famous for his two goals against England in the quarter finals. The first goal was made with his hands and would be called - The Hand of God. The second was a goal of outstanding class and would be voted Goal of the Century in 2002. Thanks to Maradona Napoli won their only two Serie A Championships so far and won the UEFA Cup in 1989. At his time with Napoli Maradona looked like somebody from another planet, he was just unstoppable. Maradona was a great dribbler but could also give great passes to his teammates. He is the number 1 on our list because he could win with a team that would normally not even have a change of winning."
        },
        {
            name: "Johan Cruyff",
            image_url: "http://www.telegraph.co.uk/content/dam/football/2016/03/26/Johan_Cruyff-xlarge_trans++7h1vaxr3_vN2F8kBMx6-_5ErNGtP_3mpTUENtG7E3eU.jpg",
            born: "25 April 1947",
            nationality: "Netherlands",
            goals: "323",
            position: "Forward",
            description: "Johan Cruyff, player of the 1974 Dutch 'Total Football' team is the number 3 on our list. Cruyff was well known for his insight of the game which gave him the ability to give great passes to his teammates. Cruyff had the ability of a great technique he could dribble very well and had a very fast acceleration, he could suddenly change direction and pass a defender. Cruyff was a total footballer, he could play on any position but he often played as centre forward however he could suddenly change position during a game by going to the wing or drop deep. Cruyff won the European Cup thrice with Ajax and was nine times champion of The Netherlands, he won La Liga with Barcelona once and was voted European Player of the Century in 1999. "
        },
        {
            name: "Franz Beckenbauer",
            image_url: "https://i.ytimg.com/vi/K-4cgoIqC6E/maxresdefault.jpg",
            born: "11 September 1945",
            nationality: "Germany",
            goals: "97",
            position: "Sweeper",
            description: "The number 4 on our list is a defender, Beckenbauer. Der Kaiser introduced a new style of playing as an attacking sweeper. He would often make a rush from his own penalty area to the penalty area of the opponent by dribbling and making short combinations with his teammates. Despite being a defender he scored 60 goals in 427 appearances for Bayern Munich. He won the World Cup in 1974 in his homeland as a captain of Germany. In 1999 he was voted second place behind Cruyff as European Footballer of the Century."
        },
        {
            name: "Alfredo Di Stéfano",
            image_url: "http://i.telegraph.co.uk/multimedia/archive/02559/Alfredo-Di-Stefano_2559799b.jpg",
            born: "4 July 1926",
            nationality: "Argentina",
            goals: "399",
            position: "Forward",
            description: "Alfredo Di Stéfano played at Real Madrid during the 1950s and 1960s which at that time was the most successful club in the world. He led his team to five consecutive European Cup victories during the period of 1956-1960, scoring in each final. He became eight times Spanish Championship winner and received the Ballon d'Or twice. Di Stéfano was a forward but could play almost anywhere on the pitch, he could help defending and later setting up an attack or scoring goals. He had a great stamina, tactical sense and vision. Di Stéfano was born in Argentina but played also games for Colombia and Spain. Despite being one of the greatest players of all time he never played at a World Cup due to various political reasons. "
        },
        {
            name: "Ronaldo",
            image_url: "http://thesefootballtimes.co/wp-content/uploads/2015/09/ronaldo-top-goal-scorers-1410062923.jpg",
            born: "18 September 1976",
            nationality: "Brazil",
            goals: "309",
            position: "Striker",
            description: "One brilliant player of the late 90s and early 21st century, Ronaldo Luis Nazário de Lima O Fenômeno was on his way to win the 1998 World Cup when an convulsive fit hindered him to win the final. Four years later he took revenge by scoring twice in the final against Germany and winning the tournament. Ronaldo a striker, always did where he was best at, scoring goals. At the 2006 World Cup Ronaldo scored his 15th World Cup goal and became record holder of scoring the most goals at World Cups."
        },
        {
            name: "Zinedine Zidane",
            image_url: "http://static.goal.com/361900/361917.jpg",
            born: "23 June 1972",
            nationality: "France",
            goals: "126",
            position: "	Attacking midfielder",
            description: "Three times FIFA World Player of the Year and World Cup winner of 1998, Zinedine Zidane was one of the greatest players of the last decade. Zidane most famous of his short first touch of the ball, his ball control and 360 roulette move was a real playmaker . His tactical vision made it possible to organize a team and give brilliant passes to his teammates. Zidane was successful with the French Team (World Cup 1998 winner, 2006 runner-up, European Champion 2000) and with his club team by winning the UEFA Champions League twice with Juventus and once with Real Madrid. "
        },
        {
            name: "Eusébio",
            image_url: "http://www.gazzettaworld.com/wp-content/uploads/2016/07/Eusebio.jpg",
            born: "25 January 1942",
            nationality: "Portugal",
            goals: "464",
            position: "Striker",
            description: "Eusebio was a Portugese striker who was born in Mozambique. He played most of his career at Benfica with which he won the European Cup in 1962. Eusebio scored two goals in the 5-3 final against Madrid. He scored a total of 733 goals in 745 games in his career. Eusebio was known for his great dribbles, powerful shots and fast acceleration. At the World Cup in 1966 Eusebio helped his team to become third. In the quarter-final match against North Korea, Portugal was behind 3-0 after 25 minutes. Then Eusebio did the impossible and scored four goals. Portugal had won with 5-3 and Portugal went through to the semi-final in which they lost with 2-1 from England, Eusebio scoring the goal for Portugal. Portugal finished third by winning from Russia with 2-1 and Eusebio scoring another goal. "
        }
    ];
    
    var correctAnswers = [1, 2, 3, 0, 2, 0, 3, 2, 0, 3];
})();