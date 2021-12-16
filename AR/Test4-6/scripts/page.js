//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.0.20
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================

var allInitQuestionFunctions = new Array (
    InitQuestion1,
    InitQuestion2,
    InitQuestion3,
    InitQuestion4,
    InitQuestion5,
    InitQuestion6,
    InitQuestion7,
    InitQuestion8,
    InitQuestion9,
    InitQuestion10,
    InitQuestion11,
    InitQuestion12,
    InitQuestion13,
    InitQuestion14,
    InitQuestion15,
    InitQuestion16,
    InitQuestion17,
);



$(document).ready(function ()
{
	const questionIndex = 0;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	
});

$(window).on("beforeunload", function ()
{
	PageUnload();
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion1()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 0;
    var weight = DecodeNumber('I0wUsA0bUBQ=', 605, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Supongamos una conexi�n TCP entre dos hosts A y B, en el que A es el primero que env�a un segmento TCP SYN con n�mero de secuencia ISN=421. �Qu� valor llevar� el n�mero de acuse de recibo que env�e B a A como respuesta?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Iv6INXCEtGw=', 444, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "421";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gqjn2b8dN5Q=', 446, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Un n�mero inicial elegido al azar.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('uKgAz+7u6LU=', 806, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "422.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('uKgAz+7u6LU=', 808, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Ninguna de las anteriores.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion2()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 1;
    var weight = DecodeNumber('h2xoMVhLes8=', 1006, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Marque cu�les de las siguientes afirmaciones son verdaderas respecto a las opciones que pueden usarse con el protocolo TCP.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('h2xoMVhLes8=', 1008, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "La opci�n de retransmisi�n selectiva permite que un receptor notifique un rango de seg- mentos que se han perdido.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jPAhfIYIKb4=', 1010, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "El factor de escala permite que pueda haber m�s segmentos en tr�nsito por la red sin asentir en redes en que el campo de tama�o de la ventana queda peque�o por su n�mero de bits.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jPAhfIYIKb4=', 1012, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "La opci�n SACK se usa para que sea el receptor el que hace el control de congesti�n.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('L5xD53IJKtk=', 1014, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "La opci�n SACK permite al receptor enviar al emisor bloques de ACKs para los segmentos recibidos correctamente.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('gS91JNC7pSw=', 374, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "La opci�n MSS permite negociar el tama�o m�ximo de los segmentos a intercambiar.";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion3()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 2;
    var weight = DecodeNumber('gS91JNC7pSw=', 374, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Marque cuales de las siguientes funciones realiza TCP a nivel de transporte";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ZGcFfaM/5sg=', 376, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Control de flujo.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('PWiC/m+61Iw=', 737, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Detecci�n de errores.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('PWiC/m+61Iw=', 739, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Compresi�n de la informaci�n.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('WONgPy/nb7E=', 741, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Control de congesti�n.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('WONgPy/nb7E=', 743, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Fragmentaci�n.";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion4()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 3;
    var weight = DecodeNumber('EnLc1wWpbjM=', 580, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "�Qu� relaci�n existe entre el ISN (Initial Sequence Number) elegido por el cliente y el servidor en una conexi�n TCP?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('EnLc1wWpbjM=', 582, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "El ISN elegido por el servidor es el mismo que el cliente m�s el n�mero de datos del primer segmento.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('dNFLd1Dzy04=', 584, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "El servidor elige un ISN siempre superior al del emisor.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('RJN9vG5Eh3A=', 586, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "El emisor elige el ISN al azar y el receptor usa ese mismo ISN+1.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('wf4Re8auguE=', 946, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "No guardan relaci�n alguna ya que ambos se eligen al azar.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion5()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 4;
    var weight = DecodeNumber('HTKprK3HbHY=', 948, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "�Qu� indica el campo �tama�o de ventana� en la cabecera de un segmento TCP?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('PeaE0sjgXCQ=', 950, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "El tama�o disponible en el buffer de recepci�n del receptor.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OYFiSBLojwY=', 789, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "El n�mero m�ximo de bytes que puede enviar el emisor sin asentir supuesto que no hay problemas de congesti�n.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('OYFiSBLojwY=', 791, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "La cantidad de bytes que nos quedan en el buffer pendientes de enviar al receptor.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('cHaFXfmFF3A=', 793, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "La cantidad de bytes que lleva ese segmento.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion6()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 5;
    var weight = DecodeNumber('1ZuAIFig4ac=', 154, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "�Cu�l es la ventaja fundamental de Fast Retransmit en TCP?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('1ZuAIFig4ac=', 156, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Mejora el rendimiento al permitir una mejor estimaci�n del RTO.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VwhAuhEBYok=', 158, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Permite al emisor detectar p�rdidas antes de que se produzcan.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5VKwGE61NP4=', 160, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Permite recuperar segmentos perdidos antes de que expire el RTO del emisor.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion7()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 6;
    var weight = DecodeNumber('GW/dXA5AOD8=', 522, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "El timeout de retransmisi�n en TCP (RTO) NO depende de:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('EKNer+Pp6Ts=', 524, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "El valor de la ventana de congesti�n.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('EKNer+Pp6Ts=', 526, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "El valor medio de RTT.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rXTCSfToAHY=', 365, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "La variabilidad del RTT en la conexi�n.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion8()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 7;
    var weight = DecodeNumber('C1aanFVdLJg=', 369, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Respecto al control de congesti�n en Frame Relay, indique cu�l de las siguientes afirmaciones es verdadera supuesto que el CIR y el EIR de un circuito virtual son mayores que cero:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('J5UDOUhnAE0=', 371, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Un conmutador activa el bit DE=1 de las tramas a partir de que el tr�fico cursado por el CV sea mayor al CIR.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('r/Bj5E/Ecx4=', 732, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Un conmutador activa el bit DE=1 de las tramas a partir de que el tr�fico cursado por el CV sea mayor al CIR, s�lo si detecta congesti�n.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('JqmLNfWSe1w=', 734, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Ninguna de las anteriores.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('IRUpgiaxzhQ=', 736, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Un conmutador activa el bit DE=1 de las tramas a partir de que el tr�fico cursado por el CV sea mayor al CIR+EIR.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('cR2v7DHtR9Q=', 738, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Un conmutador activa el bit DE=1 de las tramas s�lo si detecta congesti�n independiente- mente del CIR.";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion9()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 8;
    var weight = DecodeNumber('orjBICttd0o=', 96, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Indique cuales de las siguientes afirmaciones sobre la prevenci�n de congesti�n son correctas:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('orjBICttd0o=', 98, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "El proceso por el cual un host autoregula el volumen de tr�fico que env�a a la red para respetar un acuerdo previo se denomina control de admisi�n.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Ka+p8q1dGvc=', 100, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "El proceso por el cual un host autoregula el volumen de tr�fico que env�a a la red para respetar un acuerdo previo se denomina conformado de tr�fico.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Ho6iWyOLTyU=', 939, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Un leaky bucket es un ejemplo de mecanismo de conformado de tr�fico.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Ho6iWyOLTyU=', 941, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "El conformado de tr�fico permite reducir el retardo que experimenta el tr�fico en la red.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('SD09f/wyX3c=', 943, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "La vigilancia que hace un router de que un host cumple el contrato acordado se llama control de admisi�n.";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion10()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 9;
    var weight = DecodeNumber('eDfgaRz0dZo=', 497, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = " Indique cu�les de las siguientes afirmaciones sobre cubetas son ciertas.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('eDfgaRz0dZo=', 499, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "La tasa de salida de paquetes seg�n un token bucket es siempre constante.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('oA2RZjqNlKE=', 501, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Una configuraci�n habitual suele ser un leaky bucket a la salida de un token bucket siendo la tasa de generaci�n de tokens superior a la de salida del token bucket.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('yqB3auba3Hg=', 503, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Un token bucket puede enviar tr�fico a una tasa superior a la de generaci�n de tokens.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('vuXrXNL9OuY=', 864, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Un leaky bucket siempre transmite a la misma tasa supuesto que hay datos en el cubo.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion11()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 10;
    var weight = DecodeNumber('7WpH4+tw4GM=', 866, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Respecto al mecanismo ECN (Explicit Congestion Notification) para control de congesti�n con TCP qu� afirmaciones son verdaderas:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('sJrDCJZ47ds=', 868, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "En caso de congesti�n, el emisor necesitar�a al menos un RTT para darse cuenta.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('KEwiNvFk62Y=', 706, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Requiere la participaci�n de los routers intermedios y tambi�n de los hosts participantes en la conexi�n.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KEwiNvFk62Y=', 708, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Si un host no soporta ECN pero el otro s�, podr�a usarse ECN s�lo en un sentido de la comunicaci�n.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Bi3N/HFYSvc=', 710, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Los routers intermedios han de modificar un bit de la cabecera TCP para indicar congesti�n.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion12()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 11;
    var weight = DecodeNumber('W7Kh7UqZ0wo=', 1071, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Respecto al conformado y vigilancia de tr�fico en ATM indique las afirmaciones correctas:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('W7Kh7UqZ0wo=', 1073, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Aunque un flujo ABR haya reservado un caudal m�nimo (MCR), si hay una alta demanda de los circuitos de tipo CBR y VBR, entonces el flujo ABR podr�a recibir menos del MCR.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('iSY3QwHl63g=', 1075, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "El tr�fico ABR intenta aprovechar lo que dejan disponible el resto de categor�as en un mismo enlace.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('n1MqiAxWH3U=', 1077, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Para el tr�fico VBR se emplean dos cubetas, una para controlar la tasa media y otra para controlar que el exceso sobre la media no supere lo acordado.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('awCtI7ngCj8=', 438, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Para los circuitos CBR se emplea un token bucket ya que el tr�fico es a r�fagas.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion13()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 12;
    var weight = DecodeNumber('cqjFHMc4UCQ=', 440, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "�Cu�l es la ventaja fundamental de RED?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Iv6INXCEtGw=', 442, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Permite que nunca entremos en colapso por congesti�n ya que antes de que se llene el buffer descarta paquetes.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4vYbe/updD0=', 280, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Permite que los emisores transmitan a una tasa m�s alta ya que les avisa cuando va a haber congesti�n.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('BB2LtLiw0zA=', 282, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Permite aprovechar mejor el ancho de banda de un enlace al desincronizar las fuentes TCP.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion14()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 13;
    var weight = DecodeNumber('5fkKi0LRJBE=', 286, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Indique cuales de las siguientes funciones deber�a de incorporar un router para poder ofrecer calidad de servicio:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('5fkKi0LRJBE=', 288, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Encaminar datagramas por el camino m�s corto.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('yBi+pGIDsdI=', 649, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Gestionar los paquetes encolados en funci�n de su prioridad.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('oboSdO9pBtg=', 651, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Clasificar datagramas en funci�n de las pol�ticas del administrador.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('oboSdO9pBtg=', 653, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Cifrar las comunicaciones entre routers inseguros.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('Z+dPKJGMeOU=', 655, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Capacidad de conformar tr�fico en funci�n de los recursos disponibles.";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion15()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 14;
    var weight = DecodeNumber('sq6qNOUJtJk=', 491, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Indique las afirmaciones verdaderas con respecto a IntServ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('EtOAlYJyYLc=', 493, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "El protocolo RSVP requiere de mensajes peri�dicos para mantener una reserva activa.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('EtOAlYJyYLc=', 495, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Es una soluci�n muy escalable con respecto al n�mero de usuarios porque los routers apli- can la misma pol�tica a grupos de flujos en lugar de a flujos individuales.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('eDfgaRz0dZo=', 497, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Una especificaci�n de flujo (flowspec) consta de dos partes: las caracter�sticas del flujo (TSpec) y los recursos solicitados (RSpec).";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Fs7il0xD5d0=', 858, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "La categor�a de servicio de carga controlada es ideal para aplicaciones con estrictos requi- sitos de retardo y que funcionan a una tasa constante (CBR).";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('9eQfBSw3l94=', 860, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Se emplea control de admisi�n para garantizar que una solicitud de QoS para un flujo puede satisfacerse antes de ser aceptada.";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion16()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 15;
    var weight = DecodeNumber('SFQxGswyJIk=', 219, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Marque las afirmaciones verdaderas referentes a DiffServ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9kPlOtImMWg=', 221, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Es una soluci�n muy escalable con respecto al n�mero de usuarios porque los routers apli- can la misma pol�tica a agregaciones de flujos en lugar de a flujos individuales.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9kPlOtImMWg=', 223, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Assured Forwarding (AF) es m�s efectivo que Expedited Forwarding (EF) para aplicaciones con grandes restricciones en t�rminos de bajos retardos y pocas p�rdidas con ancho de banda garantizado.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zReXJ1LtNOo=', 225, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "El DSCP generalmente lo establecen los routers intermedios y cambian salto a salto.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('6Wgbe24jMss=', 227, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "El tipo de servicio que reciben los datagramas depende de su valor de DSCP.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('wFSVbvxOP5I=', 1065, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Dentro del PHB, Assured Forwarding pueden haber diferentes categor�as con niveles de precedencia distintos, para poder satisfacer a distintos grupos de aplicaciones.";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion17()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 16;
    var weight = DecodeNumber('wFSVbvxOP5I=', 1065, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Marque las afirmaciones verdaderas referentes respecto al funcionamiento de MPLS";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3PSQQzcNKag=', 1067, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Las etiquetas MPLS pueden apilarse para poder soportar escenarios de redes con varios proveedores de telecomunicaciones.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('RqLULfNJuHE=', 428, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "En MPLS, los Label Edge Routers (LER) son los que modifican las etiquetas mientras que los Label Switched Routers (LSR) tan s�lo reenv�an el tr�fico en base a las etiquetas.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('O7BBEKnxZdc=', 430, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Los LER hacen el forwarding en base a la etiqueta y su tabla FEC mientras que los LSR lo hacen en base a la etiqueta y su tabla LIB.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('QF41HePlud8=', 432, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Un router con MPLS habilitado permite que el tr�fico pueda seguir un camino (LSP) distinto al que indique el protocolo de encaminamiento IP.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}






