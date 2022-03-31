1-Inicio
2-Declarar os sujeitos para a travessia
3-Sujeito:Homem,Lobo,Cabra,Alfafa
4-Declarar os objetos de interação para viagem
5-Objetos:Rio,Barco,Terra1,Terra2
6-Declarar capacidade do barco, sendo essa de 2 passageiros, também declarar que ele tem a função de
navegação e função de Deixar, movendo sujeito de Terra1 para Terra2
7-Declarar que o barco só terá ações se ao menos o Homem estiver nele
8-Declarar que se o barco tiver ação, a seguintes reações vão acontecer caso os criterios ocorrerem:
	a.Se Lobo e Cabra estiverem em Terra1 ou Terra2, Lobo come Cabra, fim de jogo
	b.Se Cabra e Alfafa estiverem em Terra1 ou Terra2, Cabra come Alfafa, fim de jogo
	c.De qualquer outra forma o percurso continua
9-Declarar que se Homem,Lobo,Cabra e Alfafa estiverem em Terra2, a Travessia acabou

Resolução:

1-Adcionar Homem no Barco
2-Adcionar Cabra no Barco
3-Executar ação de navegação(T1->T2)
4-Deixar Cabra em Terra2
5-Executar ação de navegação(T1<-T2)
6-Adcionar Lobo no Barco
7-Executar ação de navegação(T1->T2)
8-Deixar Lobo em Terra2
9-Adcionar Cabra no Barco
10-Executar ação de navegação(T1<-T2)
11-Deixar Cabra em Terra1
12-Adcionar Alfafa no Barco
13-Executar ação de navegação(T1->T2)
14-Deixar Alfafa em Terra2
15-Executar ação de navegação(T1<-T2)
16-Adicionar Cabra no Barco
17-Executar ação de navegação(T1->T2)
18-Deixar Cabra em Terra2
19-Deixar Homem em Terra2
20-Conclusão