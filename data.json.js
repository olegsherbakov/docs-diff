var selects = [
  [
    {
      id: 1,
      name: `doc1`,
      isActual: false
    },
    {
      id: 2,
      name: `doc2`,
      isActual: false
    }
  ],
  [
    {
      id: 3,
      name: `doc3`,
      isActual: true
    },
    {
      id: 4,
      name: `doc4`,
      isActual: false
    }
  ]
];

var leftId = selects[0][0].id;

var rightId = selects[1][0].id;

var paragraphs = [
  {
    changed: false,
    id: 1,
    left:
      '<TEXTFIELD ATTR="3" ND="499075091"><CHAPMARK ID="P0000" STRING="КОНСТИТУЦИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ" MARKER="00000000000000000000000000000000000000000000000002AE862D" LEVEL="2"></CHAPMARK><CHAPMARK ID="P0001" STRING="HANCHOR 1" MARKER="0000000000000000000000000000000000000000000000000064U0IK" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0002" CLASS="headertext topleveltext centertext" ALIGN="center">КОНСТИТУЦИЯ\u000D\n</TEXTFIELD>',
    length: 13,
    right:
      '<TEXTFIELD ATTR="3" ND="9004937"><CHAPMARK ID="P0001" STRING="Конституция Российской Федерации" MARKER="000000000000000000000000000000000000000000000000035M86TD" LEVEL="2"></CHAPMARK><CHAPMARK ID="P0002" STRING="HANCHOR 1" MARKER="0000000000000000000000000000000000000000000000000064U0IK" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0003" CLASS="headertext topleveltext centertext" ALIGN="center">КОНСТИТУЦИЯ *\u000D\n</TEXTFIELD>'
  },
  {
    changed: false,
    id: 2,
    left:
      '<P ID="P0003" CLASS="headertext topleveltext centertext" ALIGN="center">РОССИЙСКОЙ ФЕДЕРАЦИИ  \u000D\n',
    length: 22,
    right:
      '<P ID="P0004" CLASS="headertext topleveltext centertext" ALIGN="center">РОССИЙСКОЙ ФЕДЕРАЦИИ  \u000D\n'
  },
  {
    changed: true,
    id: 3,
    left:
      '<P ID="P0004" CLASS="formattext topleveltext centertext" ALIGN="center">(с изменениями на <SPAN CLASS="change">30 декабря 2008 </SPAN>года)\u000D\n',
    length: 284,
    right:
      '<P ID="P0005" CLASS="formattext topleveltext centertext" ALIGN="center">(с изменениями на <SPAN CLASS="change">27 марта 2019 </SPAN>года)\u000D\n<P ID="P0006" CLASS="formattext topleveltext" ALIGN="justify">________________\u000D\n<P ID="P0006" CLASS="formattext topleveltext" ALIGN="justify">     * <SPAN CLASS="add">Текст Конституции Российской Федерации с изменениями на 21 июля 2014 года, опубликованный на Официальном интернет-портале правовой информации www.pravo.gov.ru 01.08.2014, см. по </SPAN><KLINK ND="468405487"><SPAN CLASS="add">ссылке</SPAN></KLINK><SPAN CLASS="add">. - Примечание изготовителя базы данных.</SPAN>\u000D\n'
  },
  {
    changed: false,
    id: 4,
    left:
      '<CHAPMARK ID="P0005" STRING="HIDDEN_BLOCK_OPEN#Информация об изменяющих документах" MARKER="00000000000000000000000000000000000000000000000003U4E8OT" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0006" CLASS="formattext topleveltext" ALIGN="justify">____________________________________________________________________ \u000D\n<P ID="P0006_1" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">Документ с изменениями, внесенными: \u000D\n',
    length: 110,
    right:
      '<CHAPMARK ID="P0007" STRING="HIDDEN_BLOCK_OPEN#Информация об изменяющих документах" MARKER="00000000000000000000000000000000000000000000000003U4E8OT" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0008" CLASS="formattext topleveltext" ALIGN="justify">____________________________________________________________________ \u000D\n<P ID="P0008" CLASS="formattext topleveltext" ALIGN="justify">     Документ с изменениями, внесенными: \u000D\n'
  },
  {
    changed: false,
    id: 5,
    left:
      '<P ID="P0006_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="902135932">Законом Российской Федерации о поправке к Конституции Российской Федерации от 30 декабря 2008 года N 6-ФКЗ</KLINK> (Российская газета, N 267, 31.12.2008) (о порядке вступления в силу см. <KLINK ND="902135932" CONTEXT="000000000000000000000000000000000000000000000000006560IO">статью 2 Закона Российской Федерации о поправке к Конституции Российской Федерации от 30 декабря 2008 года N 6-ФКЗ</KLINK>);\u000D\n',
    length: 295,
    right:
      '<P ID="P0008" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="902135932">Законом Российской Федерации о поправке к Конституции Российской Федерации от 30 декабря 2008 года N 6-ФКЗ</KLINK> (Российская газета, N 267, 31.12.2008) (о порядке вступления в силу см. <KLINK ND="902135932" CONTEXT="000000000000000000000000000000000000000000000000006560IO">статью 2 Закона Российской Федерации о поправке к Конституции Российской Федерации от 30 декабря 2008 года N 6-ФКЗ</KLINK>);\u000D\n'
  },
  {
    changed: true,
    id: 6,
    left:
      '<P ID="P0006_3" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="902135931" CONTEXT="0000000000000000000000000000000000000000000000000064U0IK">Законом Российской Федерации о поправке к Конституции Российской Федерации от 30 декабря 2008 года N 7-ФКЗ</KLINK> (Российская газета, N 267, 31.12.2008) (о порядке вступления в силу см. <KLINK ND="902135931" CONTEXT="000000000000000000000000000000000000000000000000006560IO">статью 2 Закона Российской Федерации о поправке к Конституции Российской Федерации от 30 декабря 2008 года N 7-ФКЗ</KLINK>).\u000D\n',
    length: 480,
    right:
      '<P ID="P0008" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="902135931" CONTEXT="0000000000000000000000000000000000000000000000000064U0IK">Законом Российской Федерации о поправке к Конституции Российской Федерации от 30 декабря 2008 года N 7-ФКЗ</KLINK> (Российская газета, N 267, 31.12.2008) (о порядке вступления в силу см. <KLINK ND="902135931" CONTEXT="000000000000000000000000000000000000000000000000006560IO">статью 2 Закона Российской Федерации о поправке к Конституции Российской Федерации от 30 декабря 2008 года N 7-ФКЗ</KLINK>);\u000D\n<P ID="P0008" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="499061414" CONTEXT="0000000000000000000000000000000000000000000000000064U0IK"><SPAN CLASS="add">Законом Российской Федерации о поправке к Конституции Российской Федерации от 5 февраля 2014 года N 2-ФКЗ</SPAN></KLINK><SPAN CLASS="add"> (Официальный интернет-портал правовой информации www.pravo.gov.ru, 06.02.2014);</SPAN>\u000D\n'
  },
  {
    changed: true,
    id: 7,
    left: '',
    length: 185,
    right:
      '<P ID="P0008" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="420208744" CONTEXT="0000000000000000000000000000000000000000000000000064U0IK"><SPAN CLASS="add">Законом Российской Федерации о поправке к Конституции Российской Федерации от 21 июля 2014 года N 11-ФКЗ</SPAN></KLINK><SPAN CLASS="add"> (Официальный интернет-портал правовой информации www.pravo.gov.ru, 22.07.2014). </SPAN>\u000D\n'
  },
  {
    changed: false,
    id: 8,
    left:
      '<P ID="P0006_4" CLASS="formattext topleveltext" ALIGN="justify">____________________________________________________________________ \u000D\n<P ID="P0007" CLASS="formattext topleveltext">____________________________________________________________________\u000D\n',
    length: 137,
    right:
      '<P ID="P0008" CLASS="formattext topleveltext" ALIGN="justify">____________________________________________________________________ \u000D\n<P ID="P0009" CLASS="formattext topleveltext">____________________________________________________________________\u000D\n'
  },
  {
    changed: false,
    id: 9,
    left:
      '<P ID="P0007" CLASS="formattext topleveltext">    В <KLINK ND="499075091" CONTEXT="000000000000000000000000000000000000000000000000008PO0LV">часть 1 статьи 65 Конституции</KLINK> внесены изменения в соответствии с: \u000D\n',
    length: 73,
    right:
      '<P ID="P0009" CLASS="formattext topleveltext">     В <KLINK ND="9004937" CONTEXT="000000000000000000000000000000000000000000000000008PO0LV">часть 1 статьи 65 Конституции</KLINK> внесены изменения в соответствии с: \u000D\n'
  },
  {
    changed: false,
    id: 10,
    left:
      '<P ID="P0007" CLASS="formattext topleveltext"><KLINK ND="9015169" CONTEXT="3G7JRBB37UU83K2KV45UP1ROCVMK3VVVVVA0K9HI481OKHJ8V0LADNRH">Указом Президента Российской Федерации от 9 января 1996 года N 20</KLINK> (Российская газета N 7, 13.01.96); \u000D\n<P ID="P0007" CLASS="formattext topleveltext"><KLINK ND="9015880">Указом Президента Российской Федерации от 10 февраля 1996 года N 173</KLINK> (Российская газета N 31, 15.02.96);\u000D\n<P ID="P0007" CLASS="formattext topleveltext"><KLINK ND="901789201">Указом Президента Российской Федерации от 9 июня 2001 года N 679</KLINK> (Российская газета, N 111, 14.06.2001);\u000D\n<P ID="P0007" CLASS="formattext topleveltext"><KLINK ND="901869148">Указом Президента Российской Федерации от 25 июля 2003 года N 841</KLINK> (Российская газета, N 151, 30.07.2003);\u000D\n',
    length: 414,
    right:
      '<P ID="P0009" CLASS="formattext topleveltext"><KLINK ND="9015169" CONTEXT="3G7JRBB37UU83K2KV45UP1ROCVMK3VVVVVA0K9HI481OKHJ8V0LADNRH">Указом Президента Российской Федерации от 9 января 1996 года N 20</KLINK> (Российская газета N 7, 13.01.96); \u000D\n<P ID="P0009" CLASS="formattext topleveltext"><KLINK ND="9015880" CONTEXT="0000000000000000000000000000000000000000000000000064U0IK">Указом Президента Российской Федерации от 10 февраля 1996 года N 173</KLINK> (Российская газета N 31, 15.02.96);\u000D\n<P ID="P0009" CLASS="formattext topleveltext"><KLINK ND="901789201" CONTEXT="0000000000000000000000000000000000000000000000000064U0IK">Указом Президента Российской Федерации от 9 июня 2001 года N 679</KLINK> (Российская газета, N 111, 14.06.2001);\u000D\n<P ID="P0009" CLASS="formattext topleveltext"><KLINK ND="901869148" CONTEXT="0000000000000000000000000000000000000000000000000064U0IK">Указом Президента Российской Федерации от 25 июля 2003 года N 841</KLINK> (Российская газета, N 151, 30.07.2003);\u000D\n'
  },
  {
    changed: false,
    id: 11,
    left:
      '<P ID="P0008" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="901892537">Федеральным конституционным законом от 25 марта 2004 года N 1-ФКЗ</KLINK> (Российская газета, N 62, 26.03.2004) (изменения вступили в силу с 1 декабря 2005 года);\u000D\n',
    length: 154,
    right:
      '<P ID="P000A" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="901892537" CONTEXT="0000000000000000000000000000000000000000000000000064U0IK">Федеральным конституционным законом от 25 марта 2004 года N 1-ФКЗ</KLINK> (Российская газета, N 62, 26.03.2004) (изменения вступили в силу с 1 декабря 2005 года);\u000D\n'
  },
  {
    changed: false,
    id: 12,
    left:
      '<P ID="P0008_1" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="901950575">Федеральным конституционным законом от 14 октября 2005 года N 6-ФКЗ</KLINK> (Российская газета, N 234, 19.10.2005) (изменения вступили в силу с 1 января 2007 года);\u000D\n',
    length: 156,
    right:
      '<P ID="P000A" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="901950575" CONTEXT="0000000000000000000000000000000000000000000000000064U0IK">Федеральным конституционным законом от 14 октября 2005 года N 6-ФКЗ</KLINK> (Российская газета, N 234, 19.10.2005) (изменения вступили в силу с 1 января 2007 года);\u000D\n'
  },
  {
    changed: false,
    id: 13,
    left:
      '<P ID="P0008_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="901987910">Федеральным конституционным законом от 12 июля 2006 года N 2-ФКЗ</KLINK> (Российская газета, N 153, 15.07.2006) (изменения вступили в силу с 1 июля 2007 года);\u000D\n',
    length: 151,
    right:
      '<P ID="P000A" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="901987910" CONTEXT="0000000000000000000000000000000000000000000000000064U0IK">Федеральным конституционным законом от 12 июля 2006 года N 2-ФКЗ</KLINK> (Российская газета, N 153, 15.07.2006) (изменения вступили в силу с 1 июля 2007 года);\u000D\n'
  },
  {
    changed: false,
    id: 14,
    left:
      '<P ID="P0008_3" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="902021802">Федеральным конституционным законом от 30 декабря 2006 года N 6-ФКЗ</KLINK> (Российская газета, N 2, 11.01.2007) (изменения вступили в силу с 1 января 2008 года);\u000D\n',
    length: 154,
    right:
      '<P ID="P000A" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="902021802" CONTEXT="0000000000000000000000000000000000000000000000000064U0IK">Федеральным конституционным законом от 30 декабря 2006 года N 6-ФКЗ</KLINK> (Российская газета, N 2, 11.01.2007) (изменения вступили в силу с 1 января 2008 года);\u000D\n'
  },
  {
    changed: true,
    id: 15,
    left:
      '<P ID="P0008_4" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="902052698">Федеральным конституционным законом от 21 июля 2007 года N 5-ФКЗ</KLINK> (Парламентская газета, N 96-97, 26.07.2007) (изменения вступили в силу с 1 марта 2008 года). \u000D\n',
    length: 303,
    right:
      '<P ID="P000A" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="902052698" CONTEXT="0000000000000000000000000000000000000000000000000064U0IK">Федеральным конституционным законом от 21 июля 2007 года N 5-ФКЗ</KLINK> (Парламентская газета, N 96-97, 26.07.2007) (изменения вступили в силу с 1 марта 2008 года);\u000D\n<P ID="P000A" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="499083500" CONTEXT="0000000000000000000000000000000000000000000000000064U0IK"><SPAN CLASS="add">Федеральным конституционным законом от 21 марта 2014 года N 6-ФКЗ</SPAN></KLINK><SPAN CLASS="add"> (Официальный интернет-портал правовой информации www.pravo.gov.ru, 21.03.2014); </SPAN>\u000D\n'
  },
  {
    changed: true,
    id: 16,
    left: '',
    length: 166,
    right:
      '<P ID="P000B" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="553938189"><SPAN CLASS="add">Указом Президента Российской Федерации от 27 марта 2019 года N 130</SPAN></KLINK><SPAN CLASS="add"> (Официальный интернет-портал правовой информации www.pravo.gov.ru, 27.03.2019, N 0001201903270019).</SPAN>\u000D\n'
  },
  {
    changed: false,
    id: 17,
    left:
      '<P ID="P0009" CLASS="formattext topleveltext">____________________________________________________________________ \u000D\n',
    length: 69,
    right: ''
  },
  {
    changed: false,
    id: 18,
    left:
      '<P ID="P000A" CLASS="formattext topleveltext" ALIGN="justify">____________________________________________________________________ \u000D\n',
    length: 69,
    right:
      '<P ID="P000C" CLASS="formattext topleveltext" ALIGN="justify">____________________________________________________________________ \u000D\n'
  },
  {
    changed: true,
    id: 19,
    left:
      '<P ID="P000A_1" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><SPAN CLASS="add">В документе учтено:</SPAN>\u000D\n<P ID="P000A_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="901710851"><SPAN CLASS="add">постановление Конституционного Суда Российской Федерации от 16 июня 1998 года N 19-П</SPAN></KLINK>.\u000D\n',
    length: 104,
    right: ''
  },
  {
    changed: false,
    id: 20,
    left:
      '<P ID="P000A_3" CLASS="formattext topleveltext" ALIGN="justify">____________________________________________________________________\u000D\n',
    length: 68,
    right:
      '<P ID="P000C" CLASS="formattext topleveltext" ALIGN="justify">____________________________________________________________________\u000D\n'
  },
  {
    changed: true,
    id: 21,
    left: '',
    length: 178,
    right:
      '<P ID="P000C" CLASS="formattext topleveltext" ALIGN="justify"><SPAN CLASS="add">     В документе учтено:</SPAN>\u000D\n<P ID="P000C" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="901710851" CONTEXT="0000000000000000000000000000000000000000000000000064U0IK"><SPAN CLASS="add">постановление Конституционного Суда Российской Федерации от 16 июня 1998 года N 19-П</SPAN></KLINK>.\u000D\n<P ID="P000C" CLASS="formattext topleveltext" ALIGN="justify">____________________________________________________________________ \u000D\n'
  },
  {
    changed: false,
    id: 22,
    left:
      '<CHAPMARK ID="P000B" STRING="HIDDEN_BLOCK_CLOSE" MARKER="00000000000000000000000000000000000000000000000000OQ01AB" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P000C_1" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><EXTERNAL ND="901960027">Комментарий к Конституции Российской Федерации</EXTERNAL>\u000D\n',
    length: 46,
    right:
      '<CHAPMARK ID="P000D" STRING="HIDDEN_BLOCK_CLOSE" MARKER="00000000000000000000000000000000000000000000000000OQ01AB" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P000E_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="420246664" CONTEXT="0000000000000000000000000000000000000000000000000064U0IK">Комментарий к Конституции Российской Федерации</KLINK>\u000D\n'
  },
  {
    changed: false,
    id: 23,
    left:
      '<P ID="P000C_4" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">Мы, многонациональный народ Российской Федерации, соединенные общей судьбой на своей земле, утверждая права и свободы человека, гражданский мир и согласие, сохраняя исторически сложившееся государственное единство, исходя из общепризнанных принципов равноправия и самоопределения народов, чтя память предков, передавших нам любовь и уважение к Отечеству, веру в добро и справедливость, возрождая суверенную государственность России и утверждая незыблемость ее демократической основы, стремясь обеспечить благополучие и процветание России, исходя из ответственности за свою Родину перед нынешним и будущими поколениями, сознавая себя частью мирового сообщества, принимаем КОНСТИТУЦИЮ РОССИЙСКОЙ ФЕДЕРАЦИИ.\u000D\n',
    length: 704,
    right:
      '<P ID="P000E_4" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">Мы, многонациональный народ Российской Федерации, соединенные общей судьбой на своей земле, утверждая права и свободы человека, гражданский мир и согласие, сохраняя исторически сложившееся государственное единство, исходя из общепризнанных принципов равноправия и самоопределения народов, чтя память предков, передавших нам любовь и уважение к Отечеству, веру в добро и справедливость, возрождая суверенную государственность России и утверждая незыблемость ее демократической основы, стремясь обеспечить благополучие и процветание России, исходя из ответственности за свою Родину перед нынешним и будущими поколениями, сознавая себя частью мирового сообщества, принимаем КОНСТИТУЦИЮ РОССИЙСКОЙ ФЕДЕРАЦИИ.\u000D\n'
  },
  {
    changed: false,
    id: 24,
    left:
      '<CHAPMARK ID="P000E" STRING="РАЗДЕЛ ПЕРВЫЙ" MARKER="000000000000000000000000000000000000000000000000011A42CL" LEVEL="2"></CHAPMARK><CHAPMARK ID="P000F" STRING="HANCHOR 2" MARKER="000000000000000000000000000000000000000000000000006500IL" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0010" CLASS="headertext topleveltext centertext" ALIGN="center">РАЗДЕЛ ПЕРВЫЙ \u000D\n',
    length: 14,
    right:
      '<CHAPMARK ID="P0011" STRING="Раздел первый" MARKER="000000000000000000000000000000000000000000000000015O42NL" LEVEL="2"></CHAPMARK><CHAPMARK ID="P0012" STRING="HANCHOR 2" MARKER="000000000000000000000000000000000000000000000000006500IL" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0013" CLASS="headertext topleveltext centertext" ALIGN="center">РАЗДЕЛ ПЕРВЫЙ \u000D\n'
  },
  {
    changed: true,
    id: 25,
    left:
      '<CHAPMARK ID="P0011" STRING="Глава 1. Основы конституционного строя  " MARKER="00000000000000000000000000000000000000000000000001INQ7K0" LEVEL="3"></CHAPMARK><CHAPMARK ID="P0012" STRING="HANCHOR 3" MARKER="000000000000000000000000000000000000000000000000006520IM" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0013" CLASS="headertext topleveltext centertext" ALIGN="center">Глава 1. Основы конституционного строя \u000D\n',
    length: 60,
    right:
      '<CHAPMARK ID="P0015" STRING="Глава 1. Основы конституционного строя  " MARKER="00000000000000000000000000000000000000000000000001INQ7K0" LEVEL="3"></CHAPMARK><CHAPMARK ID="P0016" STRING="HANCHOR 3" MARKER="000000000000000000000000000000000000000000000000006520IM" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0017" CLASS="headertext topleveltext centertext" ALIGN="center">Глава 1. Основы конституционного строя \u000D\n<P ID="P0018" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="420246664" CONTEXT="000000000000000000000000000000000000000000000000007D60K4"><SPAN CLASS="add">Комментарий к главе 1</SPAN></KLINK>\u000D\n'
  },
  {
    changed: false,
    id: 26,
    left:
      '<CHAPMARK ID="P0014" STRING="Статья 1  " MARKER="00000000000000000000000000000000000000000000000000LA01H1" LEVEL="4"></CHAPMARK><CHAPMARK ID="P0015" STRING="HANCHOR 4" MARKER="000000000000000000000000000000000000000000000000006540IN" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0016" CLASS="headertext topleveltext centertext" ALIGN="center">Статья 1\u000D\n',
    length: 8,
    right:
      '<CHAPMARK ID="P001A" STRING="Статья 1  " MARKER="00000000000000000000000000000000000000000000000000LA01H1" LEVEL="4"></CHAPMARK><CHAPMARK ID="P001B" STRING="федеративное государство" MARKER="0000000000000000000000000000000000000000000000000046Q59A" HIDDEN="1" LEVEL="9"></CHAPMARK><CHAPMARK ID="P001C" STRING="республиканская форма правления" MARKER="00000000000000000000000000000000000000000000000002PR06NG" HIDDEN="1" LEVEL="9"></CHAPMARK><CHAPMARK ID="P001D" STRING="HANCHOR 4" MARKER="000000000000000000000000000000000000000000000000006540IN" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P001E" CLASS="headertext topleveltext centertext" ALIGN="center">Статья 1\u000D\n'
  },
  {
    changed: false,
    id: 27,
    left:
      '<CHAPMARK ID="P0017" STRING="HANCHOR 5" MARKER="000000000000000000000000000000000000000000000000006560IO" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0018" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">1. Российская Федерация - Россия есть демократическое федеративное правовое государство с республиканской формой правления.\u000D\n<CHAPMARK ID="P0019" STRING="HANCHOR 6" MARKER="000000000000000000000000000000000000000000000000006580IP" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P001A" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">2. Наименования Российская Федерация и Россия равнозначны.\u000D\n<P ID="P001A_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><EXTERNAL ND="901960027" CONTEXT="00000000000000000000000000000000000000000000000003R024A6">Комментарий к статье 1</EXTERNAL>\u000D\n',
    length: 203,
    right:
      '<CHAPMARK ID="P001F" STRING="HANCHOR 5" MARKER="000000000000000000000000000000000000000000000000006560IO" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0020" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">1. Российская Федерация - Россия есть демократическое федеративное правовое государство с республиканской формой правления.\u000D\n<CHAPMARK ID="P0021" STRING="HANCHOR 6" MARKER="000000000000000000000000000000000000000000000000006580IP" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0022" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">2. Наименования Российская Федерация и Россия равнозначны.\u000D\n<P ID="P0022_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="420246664" CONTEXT="000000000000000000000000000000000000000000000000007D80K5">Комментарий к статье 1</KLINK>\u000D\n'
  },
  {
    changed: false,
    id: 28,
    left:
      '<CHAPMARK ID="P001B" STRING="Статья 2  " MARKER="00000000000000000000000000000000000000000000000000LA61H2" LEVEL="4"></CHAPMARK><CHAPMARK ID="P001C" STRING="HANCHOR 7" MARKER="0000000000000000000000000000000000000000000000000065A0IQ" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P001D" CLASS="headertext topleveltext centertext" ALIGN="center">Статья 2\u000D\n',
    length: 8,
    right:
      '<CHAPMARK ID="P0024" STRING="Статья 2  " MARKER="00000000000000000000000000000000000000000000000000LA61H2" LEVEL="4"></CHAPMARK><CHAPMARK ID="P0025" STRING="Человек, права и свободы" MARKER="00000000000000000000000000000000000000000000000003JJA4LA" HIDDEN="1" LEVEL="9"></CHAPMARK><CHAPMARK ID="P0026" STRING="HANCHOR 7" MARKER="0000000000000000000000000000000000000000000000000065A0IQ" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0027" CLASS="headertext topleveltext centertext" ALIGN="center">Статья 2\u000D\n'
  },
  {
    changed: false,
    id: 29,
    left:
      '<P ID="P001E" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">Человек, его права и свободы являются высшей ценностью. Признание, соблюдение и защита прав и свобод человека и гражданина - обязанность государства.\u000D\n<P ID="P001E_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><EXTERNAL ND="901960027" CONTEXT="00000000000000000000000000000000000000000000000003R084A7">Комментарий к статье 2</EXTERNAL>\u000D\n',
    length: 171,
    right:
      '<P ID="P0028" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">Человек, его права и свободы являются высшей ценностью. Признание, соблюдение и защита прав и свобод человека и гражданина - обязанность государства.\u000D\n<P ID="P0028_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="420246664" CONTEXT="000000000000000000000000000000000000000000000000007DI0KA">Комментарий к статье 2</KLINK>\u000D\n'
  },
  {
    changed: false,
    id: 30,
    left:
      '<CHAPMARK ID="P001F" STRING="Статья 3  " MARKER="00000000000000000000000000000000000000000000000000LAC1H3" LEVEL="4"></CHAPMARK><CHAPMARK ID="P0020" STRING="HANCHOR 8" MARKER="0000000000000000000000000000000000000000000000000065C0IR" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0021" CLASS="headertext topleveltext centertext" ALIGN="center">Статья 3\u000D\n',
    length: 8,
    right:
      '<CHAPMARK ID="P002A" STRING="Статья 3  " MARKER="00000000000000000000000000000000000000000000000000LAC1H3" LEVEL="4"></CHAPMARK><CHAPMARK ID="P002B" STRING="Носитель суверенитета" MARKER="000000000000000000000000000000000000000000000000034DQ4JG" HIDDEN="1" LEVEL="9"></CHAPMARK><CHAPMARK ID="P002C" STRING="источник власти" MARKER="00000000000000000000000000000000000000000000000001KN2387" HIDDEN="1" LEVEL="9"></CHAPMARK><CHAPMARK ID="P002D" STRING="народ" MARKER="000000000000000000000000000000000000000000000000006R214F" HIDDEN="1" LEVEL="9"></CHAPMARK><CHAPMARK ID="P002E" STRING="Референдум" MARKER="00000000000000000000000000000000000000000000000000OLM28J" HIDDEN="1" LEVEL="9"></CHAPMARK><CHAPMARK ID="P002F" STRING="HANCHOR 8" MARKER="0000000000000000000000000000000000000000000000000065C0IR" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0030" CLASS="headertext topleveltext centertext" ALIGN="center">Статья 3\u000D\n'
  },
  {
    changed: true,
    id: -1,
    left:
      '<div style="text-align:center;font-size:77px;">... текст текст текст ...</div>',
    length: 0,
    right:
      '<div style="text-align:center;font-size:77px;">... текст текст текст ...</div>'
  },
  {
    changed: false,
    id: 509,
    left:
      '<P ID="P04ED_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><EXTERNAL ND="901960027" CONTEXT="00000000000000000000000000000000000000000000000000COU4DH">Комментарий к статье 129</EXTERNAL> \u000D\n',
    length: 25,
    right:
      '<P ID="P0632_3" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="420246664" CONTEXT="00000000000000000000000000000000000000000000000000A8E0NF">Комментарий к статье 129</KLINK> \u000D\n'
  },
  {
    changed: true,
    id: 510,
    left:
      '<CHAPMARK ID="P04EF" STRING="Глава 8. Местное самоуправление  " MARKER="00000000000000000000000000000000000000000000000002BQU63J" LEVEL="3"></CHAPMARK><CHAPMARK ID="P04F0" STRING="HANCHOR 1005" MARKER="00000000000000000000000000000000000000000000000000A700N9" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P04F1" CLASS="headertext topleveltext centertext" ALIGN="center">Глава 8. Местное самоуправление  \u000D\n',
    length: 54,
    right:
      '<CHAPMARK ID="P0635" STRING="Глава 8. Местное самоуправление  " MARKER="00000000000000000000000000000000000000000000000002BQU63J" LEVEL="3"></CHAPMARK><CHAPMARK ID="P0636" STRING="HANCHOR 1005" MARKER="00000000000000000000000000000000000000000000000000A700N9" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0637" CLASS="headertext topleveltext centertext" ALIGN="center">Глава 8. Местное самоуправление  \u000D\n<P ID="P0638" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="420246664" CONTEXT="00000000000000000000000000000000000000000000000000A900NL"><SPAN CLASS="add">Комментарий к главе 8</SPAN></KLINK>\u000D\n'
  },
  {
    changed: true,
    id: 511,
    left:
      '<CHAPMARK ID="P04F2" STRING="Статья 130" MARKER="00000000000000000000000000000000000000000000000000LDC1I4" LEVEL="4"></CHAPMARK><CHAPMARK ID="P04F3" STRING="HANCHOR 1006" MARKER="00000000000000000000000000000000000000000000000000A720NA" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P04F4" CLASS="headertext topleveltext centertext" ALIGN="center">Статья <SPAN CLASS="add">130 </SPAN>*<KLINK ND="499075091" CONTEXT="0078E8626NV12O0887K142CMLQ5C16078610E05MV039BI0SV3VVVVVU">130</KLINK>)\u000D\n',
    length: 16,
    right:
      '<CHAPMARK ID="P063A" STRING="Статья 130" MARKER="00000000000000000000000000000000000000000000000000LDC1I4" LEVEL="4"></CHAPMARK><CHAPMARK ID="P063B" STRING="HANCHOR 1006" MARKER="00000000000000000000000000000000000000000000000000A720NA" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P063C" CLASS="headertext topleveltext centertext" ALIGN="center">Статья 130\u000D\n'
  },
  {
    changed: false,
    id: 512,
    left:
      '<CHAPMARK ID="P04F5" STRING="HANCHOR 1007" MARKER="00000000000000000000000000000000000000000000000000A740NB" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P04F6" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">1. Местное самоуправление в Российской Федерации обеспечивает самостоятельное решение населением вопросов местного значения, владение, пользование и распоряжение муниципальной собственностью.\u000D\n<CHAPMARK ID="P04F7" STRING="HANCHOR 1008" MARKER="00000000000000000000000000000000000000000000000000A760NC" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P04F8" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">2. Местное самоуправление осуществляется гражданами путем референдума, выборов, других форм прямого волеизъявления, через выборные и другие органы местного самоуправления.\u000D\n<P ID="P04F8_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><EXTERNAL ND="901960027" CONTEXT="00000000000000000000000000000000000000000000000000CNG4D9">Комментарий к статье 130</EXTERNAL>\u000D\n',
    length: 386,
    right:
      '<CHAPMARK ID="P063D" STRING="HANCHOR 1007" MARKER="00000000000000000000000000000000000000000000000000A740NB" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P063E" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">1. <KLINK ND="9004937" CONTEXT="00000000000000000000000000000000000000000000000002EJKFH0">Местное самоуправление</KLINK> в Российской Федерации обеспечивает самостоятельное решение населением вопросов местного значения, владение, пользование и распоряжение муниципальной собственностью.\u000D\n<CHAPMARK ID="P063F" STRING="HANCHOR 1008" MARKER="00000000000000000000000000000000000000000000000000A760NC" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0640" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">2. Местное самоуправление осуществляется гражданами путем референдума, выборов, других форм прямого волеизъявления, через выборные и другие органы местного самоуправления.\u000D\n<P ID="P0640_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="420246664" CONTEXT="00000000000000000000000000000000000000000000000000A920NM">Комментарий к статье 130</KLINK>\u000D\n'
  },
  {
    changed: false,
    id: 513,
    left:
      '<CHAPMARK ID="P04F9" STRING="Статья 131  " MARKER="00000000000000000000000000000000000000000000000000RS21K5" LEVEL="4"></CHAPMARK><CHAPMARK ID="P04FA" STRING="HANCHOR 1009" MARKER="00000000000000000000000000000000000000000000000000A780ND" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P04FB" CLASS="headertext topleveltext centertext" ALIGN="center">Статья 131\u000D\n',
    length: 10,
    right:
      '<CHAPMARK ID="P0642" STRING="Статья 131  " MARKER="00000000000000000000000000000000000000000000000000RS21K5" LEVEL="4"></CHAPMARK><CHAPMARK ID="P0643" STRING="муниципальные образования" MARKER="00000000000000000000000000000000000000000000000000HDM5HV" HIDDEN="1" LEVEL="9"></CHAPMARK><CHAPMARK ID="P0644" STRING="HANCHOR 1009" MARKER="00000000000000000000000000000000000000000000000000A780ND" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0645" CLASS="headertext topleveltext centertext" ALIGN="center">Статья 131\u000D\n'
  },
  {
    changed: true,
    id: 514,
    left:
      '<CHAPMARK ID="P04FC" STRING="HANCHOR 1010" MARKER="00000000000000000000000000000000000000000000000000A6Q0N5" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P04FD" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">1. Местное самоуправление осуществляется в городских, сельских поселениях и на других территориях с учетом исторических и иных местных традиций. Структура органов местного самоуправления определяется населением самостоятельно. *<KLINK ND="499075091" CONTEXT="00000000000000000000000000000000000000000000000000JGQ12U"><SPAN CLASS="add">131.1</SPAN></KLINK>)\u000D\n',
    length: 234,
    right:
      '<CHAPMARK ID="P0646" STRING="HANCHOR 1010" MARKER="00000000000000000000000000000000000000000000000000A6Q0N5" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0647" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">1. Местное самоуправление осуществляется в городских, сельских поселениях и на других территориях с учетом исторических и иных местных традиций. Структура органов местного самоуправления определяется населением самостоятельно.\u000D\n'
  },
  {
    changed: true,
    id: 515,
    left:
      '<CHAPMARK ID="P04FE" STRING="HANCHOR 1011" MARKER="00000000000000000000000000000000000000000000000000A6S0N6" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P04FF" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">2. Изменение границ территорий, в которых осуществляется местное самоуправление, допускается с учетом мнения населения соответствующих территорий. *<KLINK ND="499075091" CONTEXT="00000000000000000000000000000000000000000000000000JGU130"><SPAN CLASS="add">131.2</SPAN></KLINK>)\u000D\n',
    length: 154,
    right:
      '<CHAPMARK ID="P0648" STRING="HANCHOR 1011" MARKER="00000000000000000000000000000000000000000000000000A6S0N6" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0649" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">2. Изменение границ территорий, в которых осуществляется местное самоуправление, допускается с учетом мнения населения соответствующих территорий.\u000D\n'
  },
  {
    changed: false,
    id: 516,
    left:
      '<P ID="P04FF_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><EXTERNAL ND="901960027" CONTEXT="00000000000000000000000000000000000000000000000000CNM4DA">Комментарий к статье 131</EXTERNAL>\u000D\n',
    length: 24,
    right:
      '<P ID="P0649_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="420246664" CONTEXT="00000000000000000000000000000000000000000000000000A9E0NR">Комментарий к статье 131</KLINK>\u000D\n'
  },
  {
    changed: false,
    id: 517,
    left:
      '<CHAPMARK ID="P0500" STRING="Статья 132  " MARKER="00000000000000000000000000000000000000000000000000RS81K6" LEVEL="4"></CHAPMARK><CHAPMARK ID="P0501" STRING="HANCHOR 1012" MARKER="00000000000000000000000000000000000000000000000000A6U0N7" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0502" CLASS="headertext topleveltext centertext" ALIGN="center">Статья 132\u000D\n',
    length: 10,
    right:
      '<CHAPMARK ID="P064B" STRING="Статья 132  " MARKER="00000000000000000000000000000000000000000000000000RS81K6" LEVEL="4"></CHAPMARK><CHAPMARK ID="P064C" STRING="HANCHOR 1012" MARKER="00000000000000000000000000000000000000000000000000A6U0N7" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P064D" CLASS="headertext topleveltext centertext" ALIGN="center">Статья 132\u000D\n'
  },
  {
    changed: false,
    id: 518,
    left:
      '<CHAPMARK ID="P0503" STRING="HANCHOR 1013" MARKER="00000000000000000000000000000000000000000000000000A700N8" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0504" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">1. Органы местного самоуправления самостоятельно управляют муниципальной собственностью, формируют, утверждают и исполняют местный бюджет, устанавливают местные налоги и сборы, осуществляют охрану общественного порядка, а также решают иные вопросы местного значения.\u000D\n<CHAPMARK ID="P0505" STRING="HANCHOR 1014" MARKER="00000000000000000000000000000000000000000000000000A720N9" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0506" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">2. Органы местного самоуправления могут наделяться законом отдельными государственными полномочиями с передачей необходимых для их осуществления материальных и финансовых средств. Реализация переданных полномочий подконтрольна государству.\u000D\n<P ID="P0506_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><EXTERNAL ND="901960027" CONTEXT="00000000000000000000000000000000000000000000000000CNS4DB">Комментарий к статье 132</EXTERNAL>\u000D\n',
    length: 529,
    right:
      '<CHAPMARK ID="P064E" STRING="HANCHOR 1013" MARKER="00000000000000000000000000000000000000000000000000A700N8" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P064F" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">1. Органы местного самоуправления самостоятельно управляют муниципальной собственностью, формируют, утверждают и исполняют местный бюджет, устанавливают местные налоги и сборы, осуществляют охрану общественного порядка, а также решают иные вопросы местного значения.\u000D\n<CHAPMARK ID="P0650" STRING="HANCHOR 1014" MARKER="00000000000000000000000000000000000000000000000000A720N9" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0651" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">2. Органы местного самоуправления могут наделяться законом отдельными государственными полномочиями с передачей необходимых для их осуществления материальных и финансовых средств. Реализация переданных полномочий подконтрольна государству.\u000D\n<P ID="P0651_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="420246664" CONTEXT="00000000000000000000000000000000000000000000000000A8G0NF">Комментарий к статье 132</KLINK>\u000D\n'
  },
  {
    changed: false,
    id: 519,
    left:
      '<CHAPMARK ID="P0507" STRING="Статья 133  " MARKER="00000000000000000000000000000000000000000000000000RSE1K7" LEVEL="4"></CHAPMARK><CHAPMARK ID="P0508" STRING="HANCHOR 1015" MARKER="00000000000000000000000000000000000000000000000000A740NA" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0509" CLASS="headertext topleveltext centertext" ALIGN="center">Статья 133\u000D\n',
    length: 10,
    right:
      '<CHAPMARK ID="P0653" STRING="Статья 133  " MARKER="00000000000000000000000000000000000000000000000000RSE1K7" LEVEL="4"></CHAPMARK><CHAPMARK ID="P0654" STRING="HANCHOR 1015" MARKER="00000000000000000000000000000000000000000000000000A740NA" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0655" CLASS="headertext topleveltext centertext" ALIGN="center">Статья 133\u000D\n'
  },
  {
    changed: false,
    id: 520,
    left:
      '<P ID="P050A" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">Местное самоуправление в Российской Федерации гарантируется правом на судебную защиту, на компенсацию дополнительных расходов, возникших в результате решений, принятых органами государственной власти, запретом на ограничение прав местного самоуправления, установленных Конституцией Российской Федерации и федеральными законами.\u000D\n<P ID="P050A_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><EXTERNAL ND="901960027" CONTEXT="00000000000000000000000000000000000000000000000000CO24DC">Комментарий к статье 133</EXTERNAL> \u000D\n',
    length: 352,
    right:
      '<P ID="P0656" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">Местное самоуправление в Российской Федерации гарантируется правом на судебную защиту, на компенсацию дополнительных расходов, возникших в результате решений, принятых органами государственной власти, запретом на ограничение прав местного самоуправления, установленных Конституцией Российской Федерации и федеральными законами.\u000D\n<P ID="P0656_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="420246664" CONTEXT="00000000000000000000000000000000000000000000000000A960NM">Комментарий к статье 133</KLINK> \u000D\n'
  },
  {
    changed: true,
    id: 521,
    left:
      '<CHAPMARK ID="P050C" STRING="Глава 9. Конституционные поправки и пересмотр Конституции  " MARKER="00000000000000000000000000000000000000000000000001E24BHR" LEVEL="3"></CHAPMARK><CHAPMARK ID="P050D" STRING="HANCHOR 1016" MARKER="00000000000000000000000000000000000000000000000000A760NB" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P050E" CLASS="headertext topleveltext centertext" ALIGN="center">Глава 9. Конституционные поправки и пересмотр Конституции \u000D\n',
    length: 79,
    right:
      '<CHAPMARK ID="P0659" STRING="Глава 9. Конституционные поправки и пересмотр Конституции  " MARKER="00000000000000000000000000000000000000000000000001E24BHR" LEVEL="3"></CHAPMARK><CHAPMARK ID="P065A" STRING="Изменение конституции" MARKER="000000000000000000000000000000000000000000000000033JG4J7" HIDDEN="1" LEVEL="9"></CHAPMARK><CHAPMARK ID="P065B" STRING="HANCHOR 1016" MARKER="00000000000000000000000000000000000000000000000000A760NB" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P065C" CLASS="headertext topleveltext centertext" ALIGN="center">Глава 9. Конституционные поправки и пересмотр Конституции \u000D\n<P ID="P065D" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="420246664" CONTEXT="00000000000000000000000000000000000000000000000000A9G0NR"><SPAN CLASS="add">Комментарий к главе 9</SPAN></KLINK>\u000D\n'
  },
  {
    changed: false,
    id: 522,
    left:
      '<CHAPMARK ID="P050F" STRING="Статья 134  " MARKER="00000000000000000000000000000000000000000000000000RSK1K8" LEVEL="4"></CHAPMARK><CHAPMARK ID="P0510" STRING="HANCHOR 1017" MARKER="00000000000000000000000000000000000000000000000000A780NC" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0511" CLASS="headertext topleveltext centertext" ALIGN="center">Статья 134\u000D\n',
    length: 10,
    right:
      '<CHAPMARK ID="P065F" STRING="Статья 134  " MARKER="00000000000000000000000000000000000000000000000000RSK1K8" LEVEL="4"></CHAPMARK><CHAPMARK ID="P0660" STRING="Поправки к Конституции" MARKER="000000000000000000000000000000000000000000000000037UQ4JL" HIDDEN="1" LEVEL="9"></CHAPMARK><CHAPMARK ID="P0661" STRING="HANCHOR 1017" MARKER="00000000000000000000000000000000000000000000000000A780NC" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0662" CLASS="headertext topleveltext centertext" ALIGN="center">Статья 134\u000D\n'
  },
  {
    changed: false,
    id: 523,
    left:
      '<P ID="P0512" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">Предложения о поправках и пересмотре положений Конституции Российской Федерации могут вносить Президент Российской Федерации, Совет Федерации, Государственная Дума, Правительство Российской Федерации, законодательные (представительные) органы субъектов Российской Федерации, а также группа численностью не менее одной пятой членов Совета Федерации или депутатов Государственной Думы.\u000D\n<P ID="P0512_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><EXTERNAL ND="901960027" CONTEXT="00000000000000000000000000000000000000000000000000CO84DD">Комментарий к статье 134</EXTERNAL>\u000D\n',
    length: 407,
    right:
      '<P ID="P0663" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">Предложения о поправках и пересмотре положений Конституции Российской Федерации могут вносить Президент Российской Федерации, Совет Федерации, Государственная Дума, Правительство Российской Федерации, законодательные (представительные) органы субъектов Российской Федерации, а также группа численностью не менее одной пятой членов Совета Федерации или депутатов Государственной Думы.\u000D\n<P ID="P0663_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="420246664" CONTEXT="00000000000000000000000000000000000000000000000000A9I0NS">Комментарий к статье 134</KLINK>\u000D\n'
  },
  {
    changed: false,
    id: 524,
    left:
      '<CHAPMARK ID="P0513" STRING="Статья 135  " MARKER="00000000000000000000000000000000000000000000000000RSQ1K9" LEVEL="4"></CHAPMARK><CHAPMARK ID="P0514" STRING="HANCHOR 1018" MARKER="00000000000000000000000000000000000000000000000000A7A0ND" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0515" CLASS="headertext topleveltext centertext" ALIGN="center">Статья 135\u000D\n',
    length: 10,
    right:
      '<CHAPMARK ID="P0665" STRING="Статья 135  " MARKER="00000000000000000000000000000000000000000000000000RSQ1K9" LEVEL="4"></CHAPMARK><CHAPMARK ID="P0666" STRING="HANCHOR 1018" MARKER="00000000000000000000000000000000000000000000000000A7A0ND" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0667" CLASS="headertext topleveltext centertext" ALIGN="center">Статья 135\u000D\n'
  },
  {
    changed: false,
    id: 525,
    left:
      '<CHAPMARK ID="P0516" STRING="HANCHOR 1019" MARKER="00000000000000000000000000000000000000000000000000A7C0NE" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0517" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">1. Положения <KLINK ND="499075091" CONTEXT="000000000000000000000000000000000000000000000000006520IM">глав 1</KLINK>, <KLINK ND="499075091" CONTEXT="000000000000000000000000000000000000000000000000007E60KG">2</KLINK> и <KLINK ND="499075091" CONTEXT="00000000000000000000000000000000000000000000000000A760NB">9 Конституции Российской Федерации</KLINK> не могут быть пересмотрены Федеральным Собранием.\u000D\n',
    length: 109,
    right:
      '<CHAPMARK ID="P0668" STRING="HANCHOR 1019" MARKER="00000000000000000000000000000000000000000000000000A7C0NE" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0669" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">1. Положения <KLINK ND="9004937" CONTEXT="000000000000000000000000000000000000000000000000006520IM">глав 1</KLINK>, <KLINK ND="9004937" CONTEXT="000000000000000000000000000000000000000000000000007E60KG">2</KLINK> и <KLINK ND="9004937" CONTEXT="00000000000000000000000000000000000000000000000000A760NB">9 Конституции Российской Федерации</KLINK> не могут быть пересмотрены Федеральным Собранием.\u000D\n'
  },
  {
    changed: true,
    id: 526,
    left:
      '<CHAPMARK ID="P0518" STRING="HANCHOR 1020" MARKER="00000000000000000000000000000000000000000000000000A6U0N6" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0519" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">2. Если предложение о пересмотре положений <KLINK ND="499075091" CONTEXT="000000000000000000000000000000000000000000000000006520IM">глав 1</KLINK>, <KLINK ND="499075091" CONTEXT="000000000000000000000000000000000000000000000000007E60KG">2</KLINK> и <KLINK ND="499075091" CONTEXT="00000000000000000000000000000000000000000000000000A760NB">9 Конституции Российской Федерации</KLINK> будет поддержано тремя пятыми голосов от общего числа членов Совета Федерации и депутатов Государственной Думы, то в соответствии с федеральным конституционным законом созывается Конституционное Собрание. *<KLINK ND="499075091" CONTEXT="00000000000000000000000000000000000000000000000000JH0131"><SPAN CLASS="add">135.2</SPAN></KLINK>)\u000D\n',
    length: 302,
    right:
      '<CHAPMARK ID="P066A" STRING="HANCHOR 1020" MARKER="00000000000000000000000000000000000000000000000000A6U0N6" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P066B" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">2. Если предложение о пересмотре положений <KLINK ND="9004937" CONTEXT="000000000000000000000000000000000000000000000000006520IM">глав 1</KLINK>, <KLINK ND="9004937" CONTEXT="000000000000000000000000000000000000000000000000007E60KG">2</KLINK> и <KLINK ND="9004937" CONTEXT="00000000000000000000000000000000000000000000000000A760NB">9 Конституции Российской Федерации</KLINK> будет поддержано тремя пятыми голосов от общего числа членов Совета Федерации и депутатов Государственной Думы, то в соответствии с федеральным конституционным законом созывается Конституционное Собрание.\u000D\n'
  },
  {
    changed: false,
    id: 527,
    left:
      '<CHAPMARK ID="P051A" STRING="HANCHOR 1021" MARKER="00000000000000000000000000000000000000000000000000A700N7" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P051B" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">3. Конституционное Собрание либо подтверждает неизменность Конституции Российской Федерации, либо разрабатывает проект новой Конституции Российской Федерации, который принимается Конституционным Собранием двумя третями голосов от общего числа его членов или выносится на всенародное голосование. При проведении всенародного голосования Конституция Российской Федерации считается принятой, если за нее проголосовало более половины избирателей, принявших участие в голосовании, при условии, что в нем приняло участие более половины избирателей.\u000D\n<P ID="P051B_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><EXTERNAL ND="901960027" CONTEXT="00000000000000000000000000000000000000000000000000COE4DE">Комментарий к статье 135</EXTERNAL>\u000D\n',
    length: 566,
    right:
      '<CHAPMARK ID="P066C" STRING="HANCHOR 1021" MARKER="00000000000000000000000000000000000000000000000000A700N7" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P066D" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">3. Конституционное Собрание либо подтверждает неизменность Конституции Российской Федерации, либо разрабатывает проект новой Конституции Российской Федерации, который принимается Конституционным Собранием двумя третями голосов от общего числа его членов или выносится на всенародное голосование. При проведении всенародного голосования Конституция Российской Федерации считается принятой, если за нее проголосовало более половины избирателей, принявших участие в голосовании, при условии, что в нем приняло участие более половины избирателей.\u000D\n<P ID="P066D_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="420246664" CONTEXT="00000000000000000000000000000000000000000000000000A980NM">Комментарий к статье 135</KLINK>\u000D\n'
  },
  {
    changed: true,
    id: 528,
    left:
      '<CHAPMARK ID="P051C" STRING="Статья 136 " MARKER="00000000000000000000000000000000000000000000000000OKC1JA" LEVEL="4"></CHAPMARK><CHAPMARK ID="P051D" STRING="HANCHOR 1022" MARKER="00000000000000000000000000000000000000000000000000A720N8" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P051E" CLASS="headertext topleveltext centertext" ALIGN="center">Статья <SPAN CLASS="add">136 </SPAN>*<KLINK ND="499075091" CONTEXT="00000000000000000000000000000000000000000000000000JH2132">136</KLINK>)\u000D\n',
    length: 16,
    right:
      '<CHAPMARK ID="P066F" STRING="Статья 136 " MARKER="00000000000000000000000000000000000000000000000000OKC1JA" LEVEL="4"></CHAPMARK><CHAPMARK ID="P0670" STRING="HANCHOR 1022" MARKER="00000000000000000000000000000000000000000000000000A720N8" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0671" CLASS="headertext topleveltext centertext" ALIGN="center">Статья 136\u000D\n'
  },
  {
    changed: false,
    id: 529,
    left:
      '<P ID="P051F" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">Поправки к <KLINK ND="499075091" CONTEXT="000000000000000000000000000000000000000000000000008PK0LT">главам 3</KLINK>-<KLINK ND="499075091" CONTEXT="00000000000000000000000000000000000000000000000000A700N9">8 Конституции Российской Федерации</KLINK> принимаются в порядке, предусмотренном для принятия федерального конституционного закона, и вступают в силу после их одобрения органами законодательной власти не менее чем двух третей субъектов Российской Федерации.\u000D\n<P ID="P051F_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><EXTERNAL ND="901960027" CONTEXT="00000000000000000000000000000000000000000000000000COK4DF">Комментарий к статье 136</EXTERNAL>\u000D\n',
    length: 294,
    right:
      '<P ID="P0672" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">Поправки к <KLINK ND="9004937" CONTEXT="000000000000000000000000000000000000000000000000008PK0LT">главам 3</KLINK>-<KLINK ND="9004937" CONTEXT="00000000000000000000000000000000000000000000000000A700N9">8 Конституции Российской Федерации</KLINK> принимаются в <KLINK ND="9004937" CONTEXT="00000000000000000000000000000000000000000000000000L08CCN">порядке</KLINK>, предусмотренном для принятия федерального конституционного закона, и вступают в силу после их одобрения органами законодательной власти не менее чем двух третей субъектов Российской Федерации.\u000D\n<P ID="P0672_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="420246664" CONTEXT="00000000000000000000000000000000000000000000000000A9I0NR">Комментарий к статье 136</KLINK>\u000D\n'
  },
  {
    changed: false,
    id: 530,
    left:
      '<CHAPMARK ID="P0520" STRING="Статья 137  " MARKER="00000000000000000000000000000000000000000000000000RT61KB" LEVEL="4"></CHAPMARK><CHAPMARK ID="P0521" STRING="HANCHOR 1023" MARKER="00000000000000000000000000000000000000000000000000A740N9" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0522" CLASS="headertext topleveltext centertext" ALIGN="center">Статья 137\u000D\n',
    length: 10,
    right:
      '<CHAPMARK ID="P0674" STRING="Статья 137  " MARKER="00000000000000000000000000000000000000000000000000RT61KB" LEVEL="4"></CHAPMARK><CHAPMARK ID="P0675" STRING="HANCHOR 1023" MARKER="00000000000000000000000000000000000000000000000000A740N9" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0676" CLASS="headertext topleveltext centertext" ALIGN="center">Статья 137\u000D\n'
  },
  {
    changed: true,
    id: 531,
    left:
      '<CHAPMARK ID="P0523" STRING="HANCHOR 1024" MARKER="00000000000000000000000000000000000000000000000000A760NA" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0524" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">1. Изменения в <KLINK ND="499075091" CONTEXT="000000000000000000000000000000000000000000000000008PM0LU">статью 65 Конституции Российской Федерации</KLINK>, определяющую состав Российской Федерации, вносятся на основании федерального конституционного закона о принятии в Российскую Федерацию и образовании в ее составе нового субъекта Российской Федерации, об изменении конституционно-правового статуса субъекта Российской Федерации. *<KLINK ND="499075091" CONTEXT="00000000000000000000000000000000000000000000000000JH4133"><SPAN CLASS="add">137.1</SPAN></KLINK>)\u000D\n',
    length: 343,
    right:
      '<CHAPMARK ID="P0677" STRING="HANCHOR 1024" MARKER="00000000000000000000000000000000000000000000000000A760NA" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0678" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">1. Изменения в <KLINK ND="9004937" CONTEXT="000000000000000000000000000000000000000000000000008PM0LU">статью 65 Конституции Российской Федерации</KLINK>, определяющую состав Российской Федерации, вносятся на основании федерального конституционного <KLINK ND="9004937" CONTEXT="00000000000000000000000000000000000000000000000000F6UC59">закона</KLINK> о принятии в Российскую Федерацию и образовании в ее составе нового субъекта Российской Федерации, об изменении конституционно-правового статуса субъекта Российской Федерации.\u000D\n'
  },
  {
    changed: false,
    id: 532,
    left:
      '<CHAPMARK ID="P0525" STRING="HANCHOR 1025" MARKER="00000000000000000000000000000000000000000000000000A780NB" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0526" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">2. В случае изменения наименования республики, края, области, города федерального значения, автономной области, автономного округа новое наименование субъекта Российской Федерации подлежит включению в <KLINK ND="499075091" CONTEXT="000000000000000000000000000000000000000000000000008PM0LU">статью 65 Конституции Российской Федерации</KLINK>.\u000D\n<P ID="P0526_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><EXTERNAL ND="901960027" CONTEXT="00000000000000000000000000000000000000000000000000COQ4DG">Комментарий к статье 137</EXTERNAL> \u000D\n',
    length: 269,
    right:
      '<CHAPMARK ID="P0679" STRING="HANCHOR 1025" MARKER="00000000000000000000000000000000000000000000000000A780NB" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P067A" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">2. В случае изменения наименования республики, края, области, города федерального значения, автономной области, автономного округа новое наименование субъекта Российской Федерации подлежит включению в <KLINK ND="9004937" CONTEXT="000000000000000000000000000000000000000000000000008PM0LU">статью 65 Конституции Российской Федерации</KLINK>.\u000D\n<P ID="P067A_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="420246664" CONTEXT="00000000000000000000000000000000000000000000000000A920NJ">Комментарий к статье 137</KLINK> \u000D\n'
  },
  {
    changed: false,
    id: 533,
    left:
      '<CHAPMARK ID="P0528" STRING="РАЗДЕЛ ВТОРОЙ" MARKER="0000000000000000000000000000000000000000000000000119Q2CK" LEVEL="2"></CHAPMARK><CHAPMARK ID="P0529" STRING="HANCHOR 1026" MARKER="00000000000000000000000000000000000000000000000000A7A0NC" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P052A" CLASS="headertext topleveltext centertext" ALIGN="center">РАЗДЕЛ ВТОРОЙ \u000D\n',
    length: 14,
    right:
      '<CHAPMARK ID="P067D" STRING="Раздел второй" MARKER="000000000000000000000000000000000000000000000000015NQ2NK" LEVEL="2"></CHAPMARK><CHAPMARK ID="P067E" STRING="HANCHOR 1026" MARKER="00000000000000000000000000000000000000000000000000A7A0NC" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P067F" CLASS="headertext topleveltext centertext" ALIGN="center">РАЗДЕЛ ВТОРОЙ \u000D\n'
  },
  {
    changed: true,
    id: 534,
    left:
      '<CHAPMARK ID="P052B" STRING="Заключительные и переходные положения  " MARKER="00000000000000000000000000000000000000000000000002DHE7VU" LEVEL="3"></CHAPMARK><CHAPMARK ID="P052C" STRING="HANCHOR 1027" MARKER="00000000000000000000000000000000000000000000000000A7C0ND" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P052D" CLASS="headertext topleveltext centertext" ALIGN="center">Заключительные и переходные положения\u000D\n',
    length: 68,
    right:
      '<CHAPMARK ID="P0681" STRING="Заключительные и переходные положения  " MARKER="00000000000000000000000000000000000000000000000002DHE7VU" LEVEL="3"></CHAPMARK><CHAPMARK ID="P0682" STRING="Применение действие нормативных правовых актов документов бывшего СССР" MARKER="00000000000000000000000000000000000000000000000000MCSEH3" HIDDEN="1" LEVEL="9"></CHAPMARK><CHAPMARK ID="P0683" STRING="HANCHOR 1027" MARKER="00000000000000000000000000000000000000000000000000A7C0ND" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0684" CLASS="headertext topleveltext centertext" ALIGN="center">Заключительные и переходные положения \u000D\n<P ID="P0685" CLASS="formattext topleveltext" ALIGN="justify"><KLINK ND="420246664" CONTEXT="00000000000000000000000000000000000000000000000000A9E0NO"><SPAN CLASS="add">Комментарий к разделу второму</SPAN></KLINK> \u000D\n'
  },
  {
    changed: false,
    id: 535,
    left:
      '<CHAPMARK ID="P052E" STRING="HANCHOR 1028" MARKER="00000000000000000000000000000000000000000000000000A7E0NE" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P052F" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">1. Конституция Российской Федерации вступает в силу со дня официального ее опубликования по результатам всенародного голосования. \u000D\n<P ID="P052F_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">День всенародного голосования 12 декабря 1993 года считается днем принятия Конституции Российской Федерации.\u000D\n<P ID="P052F_4" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">Одновременно прекращается действие <KLINK ND="901700028" CONTEXT="1RT8IB31L702DT1AKBFTL2KV45UP1ROCVMK00298O8000000D2EBS19G">Конституции (Основного Закона) Российской Федерации - России</KLINK>, принятой 12 апреля 1978 года, с последующими изменениями и дополнениями. \u000D\n<P ID="P052F_6" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">В случае несоответствия положениям Конституции Российской Федерации положений <KLINK ND="901907189" CONTEXT="0VFAA2F0I39GV80I39GV8000000A2426K283U0REH23UMTBKF0000004">Федеративного договора</KLINK> - Договора о разграничении предметов ведения и полномочий между федеральными органами государственной власти Российской Федерации и органами государственной власти суверенных республик в составе Российской Федерации, Договора о разграничении предметов ведения и полномочий между федеральными органами государственной власти Российской Федерации и органами государственной власти краев, областей, городов Москвы и Санкт-Петербурга Российской Федерации, Договора о разграничении предметов ведения и полномочий между федеральными органами государственной власти Российской Федерации и органами государственной власти автономной области, автономных округов в составе Российской Федерации, а также других договоров между федеральными органами государственной власти Российской Федерации и органами государственной власти субъектов Российской Федерации, договоров между органами государственной власти субъектов Российской Федерации - действуют положения Конституции Российской Федерации.\u000D\n<CHAPMARK ID="P0530" STRING="HANCHOR 1029" MARKER="00000000000000000000000000000000000000000000000000A7G0NF" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0531" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">2. Законы и другие правовые акты, действовавшие на территории Российской Федерации до вступления в силу настоящей Конституции, применяются в части, не противоречащей Конституции Российской Федерации.\u000D\n<CHAPMARK ID="P0532" STRING="HANCHOR 1030" MARKER="00000000000000000000000000000000000000000000000000A720N7" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0533" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">3. Президент Российской Федерации, избранный в соответствии с <KLINK ND="901700028" CONTEXT="1RT8IB31L702DT1AKBFTL2KV45UP1ROCVMK00298O8000000D2EBS19G">Конституцией (Основным Законом) Российской Федерации - России</KLINK>, со дня вступления в силу настоящей Конституции осуществляет установленные ею полномочия до истечения срока, на который он был избран.\u000D\n<CHAPMARK ID="P0534" STRING="HANCHOR 1031" MARKER="00000000000000000000000000000000000000000000000000A740N8" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0535" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">4. Совет Министров - Правительство Российской Федерации со дня вступления в силу настоящей Конституции приобретает права, обязанности и ответственность Правительства Российской Федерации, установленные Конституцией Российской Федерации, и впредь именуется - Правительство Российской Федерации.\u000D\n<CHAPMARK ID="P0536" STRING="HANCHOR 1032" MARKER="00000000000000000000000000000000000000000000000000A760N9" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0537" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">5. Суды в Российской Федерации осуществляют правосудие в соответствии с их полномочиями, установленными настоящей Конституцией.\u000D\n<P ID="P0538" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">После вступления в силу Конституции судьи всех судов Российской Федерации сохраняют свои полномочия до истечения срока, на который они были избраны. Вакантные должности замещаются в порядке, установленном настоящей Конституцией.\u000D\n<CHAPMARK ID="P0539" STRING="HANCHOR 1033" MARKER="00000000000000000000000000000000000000000000000000A780NA" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P053A" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">6. Впредь до введения в действие федерального закона, устанавливающего порядок рассмотрения дел судом с участием присяжных заседателей, сохраняется прежний порядок судебного рассмотрения соответствующих дел.\u000D\n<P ID="P053A_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">До приведения уголовно-процессуального законодательства Российской Федерации в соответствие с положениями настоящей Конституции сохраняется прежний порядок ареста, содержания под стражей и задержания лиц, подозреваемых в совершении преступления.\u000D\n<CHAPMARK ID="P053B" STRING="HANCHOR 1034" MARKER="00000000000000000000000000000000000000000000000000A7A0NB" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P053C" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">7. Совет Федерации первого созыва и Государственная Дума первого созыва избираются сроком на два года.\u000D\n<CHAPMARK ID="P053D" STRING="HANCHOR 1035" MARKER="00000000000000000000000000000000000000000000000000A7C0NC" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P053E" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">8. Совет Федерации на свое первое заседание собирается на тридцатый день после избрания. Первое заседание Совета Федерации открывает Президент Российской Федерации.\u000D\n<CHAPMARK ID="P053F" STRING="HANCHOR 1036" MARKER="00000000000000000000000000000000000000000000000000A7E0ND" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0540" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">9. Депутат Государственной Думы первого созыва может одновременно являться членом Правительства Российской Федерации. На депутатов Государственной Думы - членов Правительства Российской Федерации не распространяются положения настоящей Конституции о неприкосновенности депутатов в части ответственности за действия (или бездействие), связанные с выполнением служебных обязанностей.\u000D\n<P ID="P0540_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">Депутаты Совета Федерации первого созыва осуществляют свои полномочия на непостоянной основе.\u000D\n',
    length: 3788,
    right:
      '<CHAPMARK ID="P0687" STRING="HANCHOR 1028" MARKER="00000000000000000000000000000000000000000000000000A7E0NE" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0688" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">1. Конституция Российской Федерации вступает в силу со дня официального ее опубликования по результатам всенародного голосования. \u000D\n<P ID="P0688_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">День всенародного голосования 12 декабря 1993 года считается днем принятия Конституции Российской Федерации.\u000D\n<P ID="P0688_4" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">Одновременно прекращается действие <KLINK ND="901700028" CONTEXT="0000000000000000000000000000000000000000000000000064U0IK">Конституции (Основного Закона) Российской Федерации - России</KLINK>, принятой 12 апреля 1978 года, с последующими изменениями и дополнениями. \u000D\n<P ID="P0688_6" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">В случае несоответствия положениям Конституции Российской Федерации положений <KLINK ND="901907189" CONTEXT="0000000000000000000000000000000000000000000000000064U0IK">Федеративного договора</KLINK> - Договора о разграничении предметов ведения и полномочий между федеральными органами государственной власти Российской Федерации и органами государственной власти суверенных республик в составе Российской Федерации, Договора о разграничении предметов ведения и полномочий между федеральными органами государственной власти Российской Федерации и органами государственной власти краев, областей, городов Москвы и Санкт-Петербурга Российской Федерации, Договора о разграничении предметов ведения и полномочий между федеральными органами государственной власти Российской Федерации и органами государственной власти автономной области, автономных округов в составе Российской Федерации, а также других договоров между федеральными органами государственной власти Российской Федерации и органами государственной власти субъектов Российской Федерации, договоров между органами государственной власти субъектов Российской Федерации - действуют положения Конституции Российской Федерации.\u000D\n<CHAPMARK ID="P0689" STRING="HANCHOR 1029" MARKER="00000000000000000000000000000000000000000000000000A7G0NF" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P068A" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">2. Законы и другие правовые акты, действовавшие на территории Российской Федерации до вступления в силу настоящей Конституции, применяются в части, не противоречащей Конституции Российской Федерации.\u000D\n<CHAPMARK ID="P068B" STRING="HANCHOR 1030" MARKER="00000000000000000000000000000000000000000000000000A720N7" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P068C" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">3. Президент Российской Федерации, избранный в соответствии с <KLINK ND="901700028" CONTEXT="0000000000000000000000000000000000000000000000000064U0IK">Конституцией (Основным Законом) Российской Федерации - России</KLINK>, со дня вступления в силу настоящей Конституции осуществляет установленные ею полномочия до истечения срока, на который он был избран.\u000D\n<CHAPMARK ID="P068D" STRING="HANCHOR 1031" MARKER="00000000000000000000000000000000000000000000000000A740N8" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P068E" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">4. Совет Министров - Правительство Российской Федерации со дня вступления в силу настоящей Конституции приобретает права, обязанности и ответственность Правительства Российской Федерации, установленные Конституцией Российской Федерации, и впредь именуется - Правительство Российской Федерации.\u000D\n<CHAPMARK ID="P068F" STRING="HANCHOR 1032" MARKER="00000000000000000000000000000000000000000000000000A760N9" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0690" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">5. Суды в Российской Федерации осуществляют правосудие в соответствии с их полномочиями, установленными настоящей Конституцией.\u000D\n<P ID="P0691" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">После вступления в силу Конституции судьи всех судов Российской Федерации сохраняют свои полномочия до истечения срока, на который они были избраны. Вакантные должности замещаются в порядке, установленном настоящей Конституцией.\u000D\n<CHAPMARK ID="P0692" STRING="HANCHOR 1033" MARKER="00000000000000000000000000000000000000000000000000A780NA" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0693" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">6. Впредь до введения в действие федерального <KLINK ND="9004937" CONTEXT="00000000000000000000000000000000000000000000000003MTOC40">закона</KLINK>, устанавливающего порядок рассмотрения дел судом с участием присяжных заседателей, сохраняется прежний порядок судебного рассмотрения соответствующих дел.\u000D\n<P ID="P0693_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">До приведения уголовно-процессуального законодательства Российской Федерации в соответствие с положениями настоящей Конституции сохраняется прежний порядок ареста, содержания под стражей и задержания лиц, подозреваемых в совершении преступления.\u000D\n<CHAPMARK ID="P0694" STRING="HANCHOR 1034" MARKER="00000000000000000000000000000000000000000000000000A7A0NB" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0695" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">7. Совет Федерации первого созыва и Государственная Дума первого созыва избираются сроком на два года.\u000D\n<CHAPMARK ID="P0696" STRING="HANCHOR 1035" MARKER="00000000000000000000000000000000000000000000000000A7C0NC" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0697" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">8. Совет Федерации на свое первое заседание собирается на тридцатый день после избрания. Первое заседание Совета Федерации открывает Президент Российской Федерации.\u000D\n<CHAPMARK ID="P0698" STRING="HANCHOR 1036" MARKER="00000000000000000000000000000000000000000000000000A7E0ND" HIDDEN="1" LEVEL="8"></CHAPMARK><P ID="P0699" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">9. Депутат Государственной Думы первого созыва может одновременно являться членом Правительства Российской Федерации. На депутатов Государственной Думы - членов Правительства Российской Федерации не распространяются положения настоящей Конституции о неприкосновенности депутатов в части ответственности за действия (или бездействие), связанные с выполнением служебных обязанностей.\u000D\n<P ID="P0699_2" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify">Депутаты Совета Федерации первого созыва осуществляют свои полномочия на непостоянной основе.\u000D\n'
  },
  {
    changed: true,
    id: 536,
    left:
      '<P ID="P0540_4" STYLE="text-indent: 2em" CLASS="formattext topleveltext" ALIGN="justify"><EXTERNAL ND="901960027" CONTEXT="000000000000000000000000000000000000000000000000013D8ADI"><SPAN CLASS="add">Комментарий к заключительным и переходным положениям</SPAN></EXTERNAL>\u000D\n',
    length: 52,
    right: ''
  },
  {
    changed: false,
    id: 537,
    left:
      '<P ID="P0542" CLASS="unformattext topleveltext">Редакция документа с учетом \u000D\n<P ID="P0543" CLASS="unformattext topleveltext">изменений и дополнений подготовлена \u000D\n',
    length: 64,
    right:
      '<P ID="P069B" CLASS="unformattext topleveltext">Редакция документа с учетом \u000D\n<P ID="P069C" CLASS="unformattext topleveltext">изменений и дополнений подготовлена \u000D\n'
  },
  {
    changed: true,
    id: 538,
    left:
      '<P ID="P0543" CLASS="unformattext topleveltext"><SPAN CLASS="change">ЗАО </SPAN>&quot;Кодекс&quot;\u000D\n',
    length: 12,
    right:
      '<P ID="P069C" CLASS="unformattext topleveltext"><SPAN CLASS="change">АО </SPAN>&quot;Кодекс&quot;\u000D\n'
  }
].map(function (p) {
  return {
    id: p.id,
    isChanged: p.changed,
    isChecked: true,
    left: p.left,
    right: p.right,
    length: p.length
  };
});
