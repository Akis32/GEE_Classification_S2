var GAUL_L2 = ee.FeatureCollection("FAO/GAUL/2015/level2"),
    S2 = ee.ImageCollection("COPERNICUS/S2_SR"),
    Corine = ee.Image("COPERNICUS/CORINE/V20/100m/2018"),
    LISB = ee.FeatureCollection("USDOS/LSIB_SIMPLE/2017"),
    Scar = 
    /* color: #5b3737 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([23.44461691990339, 38.09029605117937]),
            {
              "Class": 9,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([23.442041999249092, 38.08948542096292]),
            {
              "Class": 9,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([23.45011008396589, 38.080162527369936]),
            {
              "Class": 9,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([23.447191840557686, 38.08043277289929]),
            {
              "Class": 9,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([23.4368921579405, 38.07962203331494]),
            {
              "Class": 9,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([23.433802253155342, 38.079351784789324]),
            {
              "Class": 9,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([23.43311560764753, 38.07786540004597]),
            {
              "Class": 9,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([23.44084036961042, 38.06245927014762]),
            {
              "Class": 9,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([23.64734900608503, 38.111234215836504]),
            {
              "Class": 9,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([23.64031088962995, 38.114880895417876]),
            {
              "Class": 9,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([23.61936820164167, 38.11690674984386]),
            {
              "Class": 9,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([23.616449958233467, 38.11555618647066]),
            {
              "Class": 9,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([23.693354255108467, 38.11407053791241]),
            {
              "Class": 9,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([23.696100837139717, 38.109748479363546]),
            {
              "Class": 9,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([23.69678748264753, 38.10745228173737]),
            {
              "Class": 9,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([23.460924750713936, 38.045022105027066]),
            {
              "Class": 9,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([23.456976539044014, 38.04312944963683]),
            {
              "Class": 9,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([23.454229957012764, 38.059350622532335]),
            {
              "Class": 9,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([23.45834983005964, 38.091511979648566]),
            {
              "Class": 9,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([23.449938422588936, 38.090566259253826]),
            {
              "Class": 9,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([23.445475226788155, 38.089620526623264]),
            {
              "Class": 9,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([23.440668708233467, 38.08948542096292]),
            {
              "Class": 9,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([23.488905555157295, 38.100563255803905]),
            {
              "Class": 9,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([23.465731269268623, 38.10123867922303]),
            {
              "Class": 9,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([23.459723121075264, 38.10110359503869]),
            {
              "Class": 9,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([23.453714972881905, 38.11015368321685]),
            {
              "Class": 9,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([23.451998359112373, 38.10947834221261]),
            {
              "Class": 9,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([23.47259772434675, 38.09124177507005]),
            {
              "Class": 9,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([23.466761237530342, 38.09016094676756]),
            {
              "Class": 9,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([23.45955145969831, 38.08137862438685]),
            {
              "Class": 9,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([23.453371650128, 38.07989228084181]),
            {
              "Class": 9,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([23.46109641209089, 38.04312944963683]),
            {
              "Class": 9,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([23.456461554913155, 38.042183103595455]),
            {
              "Class": 9,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([23.676981705646124, 38.123670264333285]),
            {
              "Class": 9,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([23.651060837726202, 38.12745135863865]),
            {
              "Class": 9,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([23.651060837726202, 38.12650610342158]),
            {
              "Class": 9,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([23.696379441241827, 38.1312322571092]),
            {
              "Class": 9,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([23.68882634065589, 38.11921372321189]),
            {
              "Class": 9,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([23.61312367341956, 38.12866666879005]),
            {
              "Class": 9,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([23.609518784503546, 38.12866666879005]),
            {
              "Class": 9,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([23.495707291583624, 38.13055711103119]),
            {
              "Class": 9,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([23.491415757159796, 38.13055711103119]),
            {
              "Class": 9,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([23.489699143390265, 38.13001698967247]),
            {
              "Class": 9,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([23.490900773028937, 38.12839660161605]),
            {
              "Class": 9,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([23.49227406404456, 38.12718128696844]),
            {
              "Class": 9,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([26.010083646168603, 41.014164482540416]),
            {
              "Class": 9,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([26.019010037770165, 41.02064049621231]),
            {
              "Class": 9,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([26.02862307487954, 41.02737487502819]),
            {
              "Class": 9,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([26.033772916188134, 41.031518765850414]),
            {
              "Class": 9,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([26.027249783863915, 41.01882727656184]),
            {
              "Class": 9,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([26.021756619801415, 41.01442353531153]),
            {
              "Class": 9,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([25.785550565113915, 40.99784210436683]),
            {
              "Class": 9,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([25.779027432789697, 40.99758298640319]),
            {
              "Class": 9,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([25.786237210621728, 40.98255240174198]),
            {
              "Class": 9,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([25.774564236988915, 40.973480563691176]),
            {
              "Class": 9,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([25.770101041188134, 40.97399898804702]),
            {
              "Class": 9,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([26.05162569939126, 41.04032366789442]),
            {
              "Class": 9,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([26.095227689137353, 41.06155417435208]),
            {
              "Class": 9,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([26.054028958668603, 40.99784210436683]),
            {
              "Class": 9,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([26.032742947926415, 41.01545973620917]),
            {
              "Class": 9,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([26.09454104362954, 40.9903272698769]),
            {
              "Class": 9,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([25.860394925465478, 40.97633184723366]),
            {
              "Class": 9,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([25.846662015309228, 40.99551000602463]),
            {
              "Class": 9,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([25.83464571892251, 40.99680562640063]),
            {
              "Class": 9,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([25.803060025563134, 40.99784210436683]),
            {
              "Class": 9,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([25.78040072380532, 40.97529503111327]),
            {
              "Class": 9,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([25.82262942253579, 40.92965899027979]),
            {
              "Class": 9,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([25.810269803395165, 40.927324481347334]),
            {
              "Class": 9,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([26.111363858570947, 40.99317782517732]),
            {
              "Class": 9,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([26.114453763356103, 41.004578813892266]),
            {
              "Class": 9,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([26.088361234059228, 41.0563766337421]),
            {
              "Class": 9,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([26.100377530445947, 41.06233077029146]),
            {
              "Class": 9,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([26.12372347771157, 41.0757903094989]),
            {
              "Class": 9,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([26.05437228142251, 41.03851099021955]),
            {
              "Class": 9,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([25.795850247731103, 40.99525087889368]),
            {
              "Class": 9,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([25.776280850758447, 40.99576913213699]),
            {
              "Class": 9,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([25.759114713063134, 40.99006812237462]),
            {
              "Class": 9,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([26.08904787956704, 41.086918231817386]),
            {
              "Class": 9,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([26.144666165699853, 41.09183462054404]),
            {
              "Class": 9,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([26.150845975270165, 41.09959659057544]),
            {
              "Class": 9,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([26.137113065113915, 41.003542441861214]),
            {
              "Class": 9,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([26.11205050407876, 41.01494163779771]),
            {
              "Class": 9,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([26.105870694508447, 41.008465063853755]),
            {
              "Class": 9,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([26.05780550896157, 40.98618078761427]),
            {
              "Class": 9,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([26.052998990406884, 40.97892381624047]),
            {
              "Class": 9,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([25.97369143425454, 40.95533314476497]),
            {
              "Class": 9,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([26.0280722285412, 40.89393677729848]),
            {
              "Class": 9,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([26.01983248244745, 40.889524697014394]),
            {
              "Class": 9,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([26.014682641138855, 40.88770787255776]),
            {
              "Class": 9,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([26.01433931838495, 40.903538523212106]),
            {
              "Class": 9,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([25.780193200220886, 40.896012948567055]),
            {
              "Class": 9,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([25.775730004420105, 40.90950647358152]),
            {
              "Class": 9,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([25.66071688186151, 40.87005612477376]),
            {
              "Class": 9,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([25.65797029983026, 40.87784424081384]),
            {
              "Class": 9,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([25.803195824732605, 40.922219006598574]),
            {
              "Class": 9,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([25.77264009963495, 40.96863788924106]),
            {
              "Class": 9,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([25.75959383498651, 40.96786018798982]),
            {
              "Class": 9,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([26.059657921900573, 40.8770654704376]),
            {
              "Class": 9,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([26.002798058884498, 41.00902553013425]),
            {
              "Class": 9,
              "system:index": "98"
            })]),
    Coniferous = 
    /* color: #1b8417 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([21.981255240350173, 40.53604071158961]),
            {
              "Class": 8,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([22.03429860582869, 40.47769873946594]),
            {
              "Class": 8,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([22.03996343126814, 40.47560949546177]),
            {
              "Class": 8,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([21.976963705926345, 40.54647687320287]),
            {
              "Class": 8,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([21.95087117662947, 40.56069352651509]),
            {
              "Class": 8,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([21.9361082982115, 40.531865791703005]),
            {
              "Class": 8,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([21.92392034044783, 40.53512747009251]),
            {
              "Class": 8,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([22.03429860582869, 40.47587065451766]),
            {
              "Class": 8,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([21.970268912225173, 40.45549719778469]),
            {
              "Class": 8,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([21.966664023309157, 40.447528973165845]),
            {
              "Class": 8,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([21.984001822381423, 40.53016965619431]),
            {
              "Class": 8,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([21.968037314324782, 40.5445202167482]),
            {
              "Class": 8,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([21.968037314324782, 40.55625929803689]),
            {
              "Class": 8,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([21.97610539904158, 40.55821561151152]),
            {
              "Class": 8,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([21.96134252062361, 40.55599845192115]),
            {
              "Class": 8,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([21.939026541619704, 40.524428571306245]),
            {
              "Class": 8,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([21.93662328234236, 40.51842600218932]),
            {
              "Class": 8,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([21.965290732293532, 40.456150289053156]),
            {
              "Class": 8,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([22.05300969591658, 40.46894959632298]),
            {
              "Class": 8,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([20.879146039715692, 40.27915885833364]),
            {
              "Class": 8,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([20.8849825265321, 40.282170895923954]),
            {
              "Class": 8,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([20.962401807537958, 40.284266147275346]),
            {
              "Class": 8,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([20.927726209393427, 40.19974987671925]),
            {
              "Class": 8,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([20.916568219891474, 40.19647192844275]),
            {
              "Class": 8,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([20.907813489666864, 40.205125368835446]),
            {
              "Class": 8,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([20.900603711834833, 40.20132323560362]),
            {
              "Class": 8,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([20.898028791180536, 40.21469531192138]),
            {
              "Class": 8,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([20.87571281217663, 40.1966030494164]),
            {
              "Class": 8,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([20.945922315350458, 40.174964658416805]),
            {
              "Class": 8,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([20.903350293866083, 40.25636779168958]),
            {
              "Class": 8,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([20.869533002606317, 40.27313438058112]),
            {
              "Class": 8,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([20.784903943768427, 40.21286008509452]),
            {
              "Class": 8,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([20.94163078092663, 40.30233499452116]),
            {
              "Class": 8,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([20.882064283123896, 40.28112324589548]),
            {
              "Class": 8,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([20.900775373211786, 40.21181136173627]),
            {
              "Class": 8,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([20.944720685711786, 40.1994876466888]),
            {
              "Class": 8,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([21.086856305828974, 40.200798786699025]),
            {
              "Class": 8,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([20.94815391325085, 40.25348561571267]),
            {
              "Class": 8,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([20.842871338881576, 40.29568245789468]),
            {
              "Class": 8,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([20.760988862074935, 40.29895560516162]),
            {
              "Class": 8,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([20.8442446298972, 40.295355134447206]),
            {
              "Class": 8,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([20.75961557105931, 40.29764636528212]),
            {
              "Class": 8,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([20.875057847060287, 40.27872501719366]),
            {
              "Class": 8,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([20.868363053359115, 40.288742861306524]),
            {
              "Class": 8,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([20.9046694345847, 40.27793924114564]),
            {
              "Class": 8,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([20.896858841933334, 40.28265376045154]),
            {
              "Class": 8,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([20.887846619643295, 40.28586206475254]),
            {
              "Class": 8,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([20.87900605873021, 40.27067037979049]),
            {
              "Class": 8,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([20.837721497572982, 40.276957008243656]),
            {
              "Class": 8,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([20.839695603407943, 40.30281771499409]),
            {
              "Class": 8,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([20.938686907938607, 40.30936859683002]),
            {
              "Class": 8,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([20.924581323737574, 40.33155983324687]),
            {
              "Class": 8,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([20.919259821052027, 40.33155983324687]),
            {
              "Class": 8,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([20.910590921515894, 40.33960721376341]),
            {
              "Class": 8,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([20.91265085803933, 40.345429516626204]),
            {
              "Class": 8,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([20.926666911485874, 40.32890009846841]),
            {
              "Class": 8,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([20.917397197130406, 40.34355535064254]),
            {
              "Class": 8,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([20.899630244615757, 40.378459773734754]),
            {
              "Class": 8,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([20.8745676835806, 40.39264666544564]),
            {
              "Class": 8,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([20.88486736619779, 40.37872131029137]),
            {
              "Class": 8,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([21.142366020712835, 39.83520210160483]),
            {
              "Class": 8,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([21.147172539267522, 39.83355436844153]),
            {
              "Class": 8,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([21.1432243275976, 39.838167921685354]),
            {
              "Class": 8,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([21.10176810506342, 39.85075475474511]),
            {
              "Class": 8,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([21.04760894063471, 39.84172673672086]),
            {
              "Class": 8,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([21.035249321494085, 39.84205624730238]),
            {
              "Class": 8,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([21.020486443076116, 39.838892880447084]),
            {
              "Class": 8,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([21.020829765830022, 39.84508767046063]),
            {
              "Class": 8,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([21.038510887656194, 39.84535126614938]),
            {
              "Class": 8,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([21.143653481039983, 39.83408164735452]),
            {
              "Class": 8,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([21.11404189351557, 39.85358812145709]),
            {
              "Class": 8,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([21.103398888144476, 39.854312917411065]),
            {
              "Class": 8,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([21.08503112081049, 39.84304476955952]),
            {
              "Class": 8,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([21.080482094321233, 39.8393542138563]),
            {
              "Class": 8,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([21.046063988242132, 39.840804098680465]),
            {
              "Class": 8,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([21.017739861044866, 39.845944352748916]),
            {
              "Class": 8,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([21.01765403035639, 39.834674831293306]),
            {
              "Class": 8,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([21.160819618735296, 39.82933599142048]),
            {
              "Class": 8,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([21.15721472981928, 39.83671798120304]),
            {
              "Class": 8,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([21.212060539755804, 39.863536924580806]),
            {
              "Class": 8,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([21.20467910054682, 39.86320751710242]),
            {
              "Class": 8,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([21.226222603354437, 39.86004512484637]),
            {
              "Class": 8,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([21.197297661337835, 39.867884955081536]),
            {
              "Class": 8,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([21.22914979082521, 39.862943989981055]),
            {
              "Class": 8,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([21.25635811907228, 39.8715739769878]),
            {
              "Class": 8,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([21.194302531303727, 39.870981111846724]),
            {
              "Class": 8,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([21.256272288383805, 39.819711849320605]),
            {
              "Class": 8,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([21.270262690605485, 39.82511735535169]),
            {
              "Class": 8,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([21.302250894705235, 39.852242887803726]),
            {
              "Class": 8,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([21.306284937063634, 39.856921073190826]),
            {
              "Class": 8,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([21.293710741201817, 39.85240761805741]),
            {
              "Class": 8,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([21.318730386892735, 39.85039788195332]),
            {
              "Class": 8,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([21.319245371023595, 39.858008211456834]),
            {
              "Class": 8,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([22.121968828539508, 39.783398699771034]),
            {
              "Class": 8,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([22.120339577641754, 39.78605372123895]),
            {
              "Class": 8,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([22.119631474461823, 39.784173958825335]),
            {
              "Class": 8,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([22.122470802531282, 39.78769155543535]),
            {
              "Class": 8,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([22.126569217906038, 39.78990098246925]),
            {
              "Class": 8,
              "system:index": "97"
            })]),
    MixedForest = 
    /* color: #68d62a */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([22.05197972765486, 40.50054560135594]),
            {
              "Class": 7,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([22.062107748895095, 40.51790401425581]),
            {
              "Class": 7,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([22.042366690545485, 40.52586388863383]),
            {
              "Class": 7,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([22.091805167107985, 40.54738995998639]),
            {
              "Class": 7,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([22.063824362664626, 40.56147600693453]),
            {
              "Class": 7,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([22.060562796502516, 40.56630110073768]),
            {
              "Class": 7,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([22.059532828240798, 40.564997055631835]),
            {
              "Class": 7,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([22.055069632440016, 40.556780987219604]),
            {
              "Class": 7,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([22.054382986932204, 40.55286821926399]),
            {
              "Class": 7,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([22.055069632440016, 40.545955103737434]),
            {
              "Class": 7,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([22.084252066522048, 40.49206053203838]),
            {
              "Class": 7,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([22.084423727899, 40.48096305306966]),
            {
              "Class": 7,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([22.09214848986189, 40.48801342875152]),
            {
              "Class": 7,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([22.10416478624861, 40.48840509457517]),
            {
              "Class": 7,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([22.120987601190016, 40.53604071158961]),
            {
              "Class": 7,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([22.049576468377516, 40.45654214076712]),
            {
              "Class": 7,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([22.051121420770095, 40.45445223855106]),
            {
              "Class": 7,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([22.06742925158064, 40.45314601665598]),
            {
              "Class": 7,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([22.08493871202986, 40.45301539306988]),
            {
              "Class": 7,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([22.000996298699782, 40.47208374878524]),
            {
              "Class": 7,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([22.02829045763533, 40.443348543080845]),
            {
              "Class": 7,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([22.098843283563063, 40.45915442712365]),
            {
              "Class": 7,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([22.001854605584548, 40.54960740463357]),
            {
              "Class": 7,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([21.528806097218602, 40.466771589804765]),
            {
              "Class": 7,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([21.532754308888524, 40.46233114610212]),
            {
              "Class": 7,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([21.50116861552915, 40.48191912957947]),
            {
              "Class": 7,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([21.514729864308446, 40.4294104718912]),
            {
              "Class": 7,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([21.44692362041196, 40.49601893951863]),
            {
              "Class": 7,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([21.456536657521337, 40.48805552204726]),
            {
              "Class": 7,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([21.46340311259946, 40.4907971330925]),
            {
              "Class": 7,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([21.460828191945165, 40.42222326055714]),
            {
              "Class": 7,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([21.44743860454282, 40.405885833271405]),
            {
              "Class": 7,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([21.45842493266782, 40.445872824543095]),
            {
              "Class": 7,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([21.50734842509946, 40.47617391330471]),
            {
              "Class": 7,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([21.492757208058446, 40.48022173048915]),
            {
              "Class": 7,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([21.491040594288915, 40.50358983701659]),
            {
              "Class": 7,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([21.566228277394384, 40.4482242601475]),
            {
              "Class": 7,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([21.592149145314306, 40.41712640897932]),
            {
              "Class": 7,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([21.658753759572118, 40.44038582153997]),
            {
              "Class": 7,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([21.650514013478368, 40.44730982274365]),
            {
              "Class": 7,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([21.706044396859983, 40.39744347495029]),
            {
              "Class": 7,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([21.705786904794554, 40.395907360203594]),
            {
              "Class": 7,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([21.656841825013725, 40.39679190133219]),
            {
              "Class": 7,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([21.76092738519922, 40.386657902499735]),
            {
              "Class": 7,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([21.758052057135256, 40.389207530304695]),
            {
              "Class": 7,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([21.78071135889307, 40.37197932198467]),
            {
              "Class": 7,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([20.94763892911999, 40.21403987947434]),
            {
              "Class": 7,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([21.109515607586786, 40.24365909321741]),
            {
              "Class": 7,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([21.116210401287958, 40.19870095051217]),
            {
              "Class": 7,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([21.078273236981317, 40.27680151791947]),
            {
              "Class": 7,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([21.087542951336786, 40.291860889026445]),
            {
              "Class": 7,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([21.064883649578974, 40.28203994055827]),
            {
              "Class": 7,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([21.005660474530146, 40.18650599258113]),
            {
              "Class": 7,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([20.979224622479364, 40.199356531293226]),
            {
              "Class": 7,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([20.909015119305536, 40.17850595835656]),
            {
              "Class": 7,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([20.86146491788952, 40.228720046830944]),
            {
              "Class": 7,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([20.858546674481317, 40.23776249494784]),
            {
              "Class": 7,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([20.8739961984071, 40.252961570527944]),
            {
              "Class": 7,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([20.865928113690302, 40.259380844408625]),
            {
              "Class": 7,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([20.915709913006708, 40.26095281864978]),
            {
              "Class": 7,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([20.91742652677624, 40.281647072939116]),
            {
              "Class": 7,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([20.906783521405146, 40.29683629158597]),
            {
              "Class": 7,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([20.796233594647333, 40.282694714850024]),
            {
              "Class": 7,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([20.78232902311413, 40.260166836094754]),
            {
              "Class": 7,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([21.086341321698114, 40.23238959163408]),
            {
              "Class": 7,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([20.795750290907943, 40.29299835881902]),
            {
              "Class": 7,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([20.80107179359349, 40.31165391539304]),
            {
              "Class": 7,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([21.13927611592768, 39.80962482922695]),
            {
              "Class": 7,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([21.137387840781194, 39.80494342161814]),
            {
              "Class": 7,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([21.200988380942327, 39.824524088879244]),
            {
              "Class": 7,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([21.056964485678655, 39.81140499916377]),
            {
              "Class": 7,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([21.06005439046381, 39.80771274350263]),
            {
              "Class": 7,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([21.059196083579046, 39.801052995326884]),
            {
              "Class": 7,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([21.033275215659124, 39.811800586222645]),
            {
              "Class": 7,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([21.042287437949163, 39.820173311558165]),
            {
              "Class": 7,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([21.03808173421381, 39.859452160073026]),
            {
              "Class": 7,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([21.095416634116155, 39.812987333740054]),
            {
              "Class": 7,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([21.19369277242182, 39.85088654183673]),
            {
              "Class": 7,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([21.190774529013616, 39.855037705711275]),
            {
              "Class": 7,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([21.191040965141617, 39.853785793839954]),
            {
              "Class": 7,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([21.2339563093799, 39.83843154393874]),
            {
              "Class": 7,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([21.230866404594742, 39.832367976087816]),
            {
              "Class": 7,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([21.21721932512697, 39.83137930013984]),
            {
              "Class": 7,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([21.193100901665055, 39.85457647767852]),
            {
              "Class": 7,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([21.15876862627443, 39.87499931969247]),
            {
              "Class": 7,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([21.213013621391617, 39.81641560036416]),
            {
              "Class": 7,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([21.279763254324376, 39.85662457794765]),
            {
              "Class": 7,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([21.32937339226383, 39.853165372132516]),
            {
              "Class": 7,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([21.329545053640782, 39.86476126035495]),
            {
              "Class": 7,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([21.264313730398595, 39.85721756715308]),
            {
              "Class": 7,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([21.274227174917637, 39.85748111626643]),
            {
              "Class": 7,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([21.26568702141422, 39.847959762447054]),
            {
              "Class": 7,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([21.344265016714512, 39.864629499904545]),
            {
              "Class": 7,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([21.346968683401524, 39.871777138850774]),
            {
              "Class": 7,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([21.342677148977696, 39.86199423775988]),
            {
              "Class": 7,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([21.339887651602208, 39.86271894493926]),
            {
              "Class": 7,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([21.34756949822086, 39.86245541594147]),
            {
              "Class": 7,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([21.387909796213748, 39.884061432362685]),
            {
              "Class": 7,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([21.397179510569217, 39.890252145706036]),
            {
              "Class": 7,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([21.393402960276248, 39.89203022597782]),
            {
              "Class": 7,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([21.446875479197146, 39.85665752192681]),
            {
              "Class": 7,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([21.60909548041785, 39.86397069385707]),
            {
              "Class": 7,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([21.613472845530154, 39.86370716966683]),
            {
              "Class": 7,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([21.631754782175662, 39.87773842472832]),
            {
              "Class": 7,
              "system:index": "103"
            })]),
    Grasslands = 
    /* color: #88ff83 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([21.15837595559238, 39.828393457336915]),
            {
              "Class": 6,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([21.158848024379, 39.826580769021994]),
            {
              "Class": 6,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([21.16236708260654, 39.82753655609418]),
            {
              "Class": 6,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([21.137304521571384, 39.84493614740972]),
            {
              "Class": 6,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([21.151080347071872, 39.84249783393252]),
            {
              "Class": 6,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([21.171765542994724, 39.842860291414915]),
            {
              "Class": 6,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([21.179146982203708, 39.83238120327425]),
            {
              "Class": 6,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([21.17309591866611, 39.837950477497465]),
            {
              "Class": 6,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([21.157002664576755, 39.82555905089601]),
            {
              "Class": 6,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([21.154041505824313, 39.82196643749594]),
            {
              "Class": 6,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([21.1308215925138, 39.84035600066217]),
            {
              "Class": 6,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([21.122281439010383, 39.846649370687054]),
            {
              "Class": 6,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([21.12035024851966, 39.847538981844686]),
            {
              "Class": 6,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([21.133010275069953, 39.84500191217781]),
            {
              "Class": 6,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([21.127474195663215, 39.849515854256715]),
            {
              "Class": 6,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([21.139662153426887, 39.844705365447915]),
            {
              "Class": 6,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([21.151206381026984, 39.84200343624561]),
            {
              "Class": 6,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([21.124539462055726, 39.822766234473406]),
            {
              "Class": 6,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([21.16105324437477, 39.81820140817201]),
            {
              "Class": 6,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([21.16002327611305, 39.82067354547177]),
            {
              "Class": 6,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([21.161181990407485, 39.8252220457406]),
            {
              "Class": 6,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([21.15105396916725, 39.81131191636163]),
            {
              "Class": 6,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([21.165988508962172, 39.816223634302055]),
            {
              "Class": 6,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([21.166503493093032, 39.82324447392437]),
            {
              "Class": 6,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([21.19379765202858, 39.82067354547177]),
            {
              "Class": 6,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([21.177159415780423, 39.83921014199161]),
            {
              "Class": 6,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([21.17248164325845, 39.84272080735628]),
            {
              "Class": 6,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([21.200123341980305, 39.84690541367965]),
            {
              "Class": 6,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([21.21419957489046, 39.84581809955405]),
            {
              "Class": 6,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([21.292294534841954, 39.855735084532625]),
            {
              "Class": 6,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([21.312550577322423, 39.85300064369734]),
            {
              "Class": 6,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([21.314224275747716, 39.85510913781149]),
            {
              "Class": 6,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([21.315468820730626, 39.84710310530693]),
            {
              "Class": 6,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([21.312035593191563, 39.85468085518672]),
            {
              "Class": 6,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([21.291522058645665, 39.85540563960154]),
            {
              "Class": 6,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([21.31212142388004, 39.85240761805741]),
            {
              "Class": 6,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([21.30864528099674, 39.86644118391757]),
            {
              "Class": 6,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([21.315511736074864, 39.86100598836194]),
            {
              "Class": 6,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([21.5693558716532, 39.87707974456967]),
            {
              "Class": 6,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([21.582230474924685, 39.879714427246]),
            {
              "Class": 6,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([21.562575247263553, 39.88462125389929]),
            {
              "Class": 6,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([21.69311157094835, 39.80133335972442]),
            {
              "Class": 6,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([21.692746790522325, 39.806394147167886]),
            {
              "Class": 6,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([21.777786806550253, 39.77872797913908]),
            {
              "Class": 6,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([21.95606516158256, 39.75251920396664]),
            {
              "Class": 6,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([21.94361971175346, 39.752156270052396]),
            {
              "Class": 6,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([21.93340585982475, 39.75809494827939]),
            {
              "Class": 6,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([21.934178336021038, 39.76076718642867]),
            {
              "Class": 6,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([22.057198260233086, 39.78280894276323]),
            {
              "Class": 6,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([22.06385013859002, 39.778818320540346]),
            {
              "Class": 6,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([22.08105919162957, 39.77748043390191]),
            {
              "Class": 6,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([22.079943392679375, 39.779954035425924]),
            {
              "Class": 6,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([22.20773743693935, 39.810022104616536]),
            {
              "Class": 6,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([22.196815481830708, 39.813417554422884]),
            {
              "Class": 6,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([22.195678225208393, 39.8149998426706]),
            {
              "Class": 6,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([22.201128473926655, 39.81254398384688]),
            {
              "Class": 6,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([22.20320986812221, 39.814637238164394]),
            {
              "Class": 6,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([22.197566500354878, 39.814554827782565]),
            {
              "Class": 6,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([22.195699682880512, 39.81623598001945]),
            {
              "Class": 6,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([22.594687130951794, 38.52916197280844]),
            {
              "Class": 6,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([22.590738919281872, 38.5327876894983]),
            {
              "Class": 6,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([22.59949364950648, 38.52513318442748]),
            {
              "Class": 6,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([22.605330136322888, 38.55212175930652]),
            {
              "Class": 6,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([22.59777703573695, 38.55937069545896]),
            {
              "Class": 6,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([22.63125100424281, 38.56541091719344]),
            {
              "Class": 6,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([22.66420998861781, 38.535339010237074]),
            {
              "Class": 6,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([23.19053792744763, 38.55154286479219]),
            {
              "Class": 6,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([23.1957735994447, 38.55872474234895]),
            {
              "Class": 6,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([23.186332223712277, 38.55442912611665]),
            {
              "Class": 6,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([23.194571969806027, 38.56463079552831]),
            {
              "Class": 6,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([22.479744593787608, 37.516402517441826]),
            {
              "Class": 6,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([22.47665468900245, 37.526341404442306]),
            {
              "Class": 6,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([22.492104212928233, 37.53655121080499]),
            {
              "Class": 6,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([21.683679706366235, 40.77120485047257]),
            {
              "Class": 6,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([21.71097386530178, 40.75833329029125]),
            {
              "Class": 6,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([21.698185092718774, 40.76255907732631]),
            {
              "Class": 6,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([21.754584829848657, 40.86462649051683]),
            {
              "Class": 6,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([21.73956445936526, 40.85690173740971]),
            {
              "Class": 6,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([21.737418692153344, 40.855992883698164]),
            {
              "Class": 6,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([21.729178946059594, 40.853915456964096]),
            {
              "Class": 6,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([21.717797908912207, 40.84674541969193]),
            {
              "Class": 6,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([21.72921339047959, 40.85375723259915]),
            {
              "Class": 6,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([21.71445051206162, 40.84895292230148]),
            {
              "Class": 6,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([21.785179886661, 40.874710173199674]),
            {
              "Class": 6,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([21.788012299380725, 40.87581346778177]),
            {
              "Class": 6,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([21.790630419543433, 40.897760076465495]),
            {
              "Class": 6,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([21.786167223742652, 40.903274444346]),
            {
              "Class": 6,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([21.782905657580542, 40.90320957210229]),
            {
              "Class": 6,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([21.78580756432956, 40.90739152649507]),
            {
              "Class": 6,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([21.81447501428073, 40.91997475464446]),
            {
              "Class": 6,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([21.82022567040866, 40.91880733943009]),
            {
              "Class": 6,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([21.823830559324676, 40.90602928082361]),
            {
              "Class": 6,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([21.795517203140292, 40.91445363984315]),
            {
              "Class": 6,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([21.768308874893222, 40.921587991810014]),
            {
              "Class": 6,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([21.78058266334537, 40.91380502420976]),
            {
              "Class": 6,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([21.792942282485996, 40.92385785141025]),
            {
              "Class": 6,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([21.807190176773105, 40.92489547554864]),
            {
              "Class": 6,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([21.752958069927807, 40.91568599201494]),
            {
              "Class": 6,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([21.752013932354565, 40.91380502420976]),
            {
              "Class": 6,
              "system:index": "98"
            })]),
    Shrubs = 
    /* color: #d8e696 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([21.18141343386825, 39.84811262993988]),
            {
              "Class": 5,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([21.179546616393885, 39.85030364180392]),
            {
              "Class": 5,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([21.173624298889003, 39.85013890650103]),
            {
              "Class": 5,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([21.167251370269618, 39.85521257240398]),
            {
              "Class": 5,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([21.185104153472743, 39.84817852605345]),
            {
              "Class": 5,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([21.18218591006454, 39.8471077063703]),
            {
              "Class": 5,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([21.174568436462245, 39.85176976858334]),
            {
              "Class": 5,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([21.184353134948573, 39.850056538701345]),
            {
              "Class": 5,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([21.183344624358973, 39.85071547833157]),
            {
              "Class": 5,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([21.166264317352137, 39.85442189589326]),
            {
              "Class": 5,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([21.778688028779257, 39.772857048710364]),
            {
              "Class": 5,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([21.77838762136959, 39.77562766254911]),
            {
              "Class": 5,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([21.8039624318339, 39.76061335484304]),
            {
              "Class": 5,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([21.81220217792765, 39.75823803185819]),
            {
              "Class": 5,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([21.803318701670324, 39.760316443950344]),
            {
              "Class": 5,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([21.80191322414652, 39.762246341870416]),
            {
              "Class": 5,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([21.876100407433395, 39.74801021120549]),
            {
              "Class": 5,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([21.881378994774703, 39.74959400411464]),
            {
              "Class": 5,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([21.91987405855644, 39.75289345573329]),
            {
              "Class": 5,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([22.043036196634453, 39.78031682283987]),
            {
              "Class": 5,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([22.03634140293328, 39.783070646757494]),
            {
              "Class": 5,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([22.03110573093621, 39.77904705852367]),
            {
              "Class": 5,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([22.24712523606362, 39.81387973419526]),
            {
              "Class": 5,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([22.246309844523093, 39.815445529932774]),
            {
              "Class": 5,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([22.24343451645913, 39.81504996385072]),
            {
              "Class": 5,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([22.242275802164695, 39.821708356174696]),
            {
              "Class": 5,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([22.234722701578757, 39.81890663603941]),
            {
              "Class": 5,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([22.241503325968406, 39.80628099783256]),
            {
              "Class": 5,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([22.245837775736472, 39.82088433269839]),
            {
              "Class": 5,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([22.242318717508933, 39.8240485289659]),
            {
              "Class": 5,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([22.243091193705222, 39.82543281901435]),
            {
              "Class": 5,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([22.2411600032145, 39.82292789278527]),
            {
              "Class": 5,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([22.23167571213784, 39.82124690424534]),
            {
              "Class": 5,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([22.230731574564597, 39.82052175923839]),
            {
              "Class": 5,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([22.241717902689597, 39.817621102689884]),
            {
              "Class": 5,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([22.24218997147622, 39.81607183824005]),
            {
              "Class": 5,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([22.24236163285317, 39.81396214538652]),
            {
              "Class": 5,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([22.24188956406655, 39.81148976666698]),
            {
              "Class": 5,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([22.2316327967936, 39.819763644913]),
            {
              "Class": 5,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([22.273965769549765, 39.802988884479866]),
            {
              "Class": 5,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([22.275510721942343, 39.79939509121977]),
            {
              "Class": 5,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([22.276197367450155, 39.801834934638606]),
            {
              "Class": 5,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([22.2800597484316, 39.79721894162407]),
            {
              "Class": 5,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([22.277742319842734, 39.79461406596297]),
            {
              "Class": 5,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([22.276445524376044, 39.793076292333424]),
            {
              "Class": 5,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([22.27829088417829, 39.790306380982365]),
            {
              "Class": 5,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([22.281123296898016, 39.79314224124426]),
            {
              "Class": 5,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([22.28125204293073, 39.78822887427432]),
            {
              "Class": 5,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([22.282367841880927, 39.79080101618954]),
            {
              "Class": 5,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([22.28429903237165, 39.79324116449196]),
            {
              "Class": 5,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([22.282625333946356, 39.78344707284998]),
            {
              "Class": 5,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([22.285371915977606, 39.78107777804513]),
            {
              "Class": 5,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([22.28223909584821, 39.781011817568775]),
            {
              "Class": 5,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([22.28507150856794, 39.7846065713559]),
            {
              "Class": 5,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([22.280393736045966, 39.79074030471517]),
            {
              "Class": 5,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([22.283226148765692, 39.79711323204554]),
            {
              "Class": 5,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([22.281981603782782, 39.79869589555862]),
            {
              "Class": 5,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([22.27206008536131, 39.803584849529074]),
            {
              "Class": 5,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([22.273991275852033, 39.798177649917584]),
            {
              "Class": 5,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([22.279656101291486, 39.796496056054]),
            {
              "Class": 5,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([22.27785365683348, 39.79336356570158]),
            {
              "Class": 5,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([22.27759616476805, 39.7874938839189]),
            {
              "Class": 5,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([22.251718212192365, 39.80061753652972]),
            {
              "Class": 5,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([21.77278955088202, 38.45190598246502]),
            {
              "Class": 5,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([21.774849487405458, 38.451032161074345]),
            {
              "Class": 5,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([21.77957017527167, 38.45116659582322]),
            {
              "Class": 5,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([22.94866914773396, 38.49625360093946]),
            {
              "Class": 5,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([22.941974354032787, 38.49894056244606]),
            {
              "Class": 5,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([22.919830036405834, 38.507269506181856]),
            {
              "Class": 5,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([22.904294681791576, 38.50800831758142]),
            {
              "Class": 5,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([22.897599888090404, 38.50841130242266]),
            {
              "Class": 5,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([22.88695688271931, 38.508612793997564]),
            {
              "Class": 5,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([22.912019443754467, 38.50807548187823]),
            {
              "Class": 5,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([22.84979219460896, 38.53117628241464]),
            {
              "Class": 5,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([23.523903810270372, 37.98132920804921]),
            {
              "Class": 5,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([23.516522371061388, 37.981904253929585]),
            {
              "Class": 5,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([23.52699371505553, 37.98224251410721]),
            {
              "Class": 5,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([23.524847947843615, 37.98021292965321]),
            {
              "Class": 5,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([23.50845428634459, 37.99167934443596]),
            {
              "Class": 5,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([23.512531244047228, 37.97984083308127]),
            {
              "Class": 5,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([23.516522371061388, 37.97703313448742]),
            {
              "Class": 5,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([23.51995559860045, 37.978724532045725]),
            {
              "Class": 5,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([23.518067323453966, 37.982648424262194]),
            {
              "Class": 5,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([23.525105439909044, 37.97584913300413]),
            {
              "Class": 5,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([22.5419721828369, 37.55900732589044]),
            {
              "Class": 5,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([22.528067611303698, 37.5708453828964]),
            {
              "Class": 5,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([22.51124479636229, 37.57302229202522]),
            {
              "Class": 5,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([22.511073134985338, 37.56771596454708]),
            {
              "Class": 5,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([22.555533431616198, 37.562001035252656]),
            {
              "Class": 5,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([21.695367940142116, 40.80811575445409]),
            {
              "Class": 5,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([21.681978352739772, 40.81019461667735]),
            {
              "Class": 5,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([21.682493336870632, 40.80603682710298]),
            {
              "Class": 5,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([21.676656850054226, 40.802788372735705]),
            {
              "Class": 5,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([21.659662373735866, 40.81818463705525]),
            {
              "Class": 5,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([21.65631497688528, 40.815781236183604]),
            {
              "Class": 5,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([21.651422627642116, 40.81883418991135]),
            {
              "Class": 5,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([21.686699040605983, 40.82558916256105]),
            {
              "Class": 5,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([21.6957970935845, 40.82948594922128]),
            {
              "Class": 5,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([21.698629506304226, 40.831174485660185]),
            {
              "Class": 5,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([21.698972829058132, 40.79551125798104]),
            {
              "Class": 5,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([21.706354268267116, 40.79953975936933]),
            {
              "Class": 5,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([21.679746754839382, 40.79960473319481]),
            {
              "Class": 5,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([21.675626881792507, 40.8018787770201]),
            {
              "Class": 5,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([21.647388585283718, 40.80597185957384]),
            {
              "Class": 5,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([21.626531727983913, 40.81116906092485]),
            {
              "Class": 5,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([21.685669072344265, 40.82091271630829]),
            {
              "Class": 5,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([21.69373715706106, 40.816560727088024]),
            {
              "Class": 5,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([21.697015448037103, 40.79067573123751]),
            {
              "Class": 5,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([21.674956961098626, 40.78710159573855]),
            {
              "Class": 5,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([21.67684523624511, 40.792300274687044]),
            {
              "Class": 5,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([21.697702093544915, 40.78944105163288]),
            {
              "Class": 5,
              "system:index": "110"
            })]),
    Crops = 
    /* color: #fffd1b */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([21.74470773489397, 40.559337364530336]),
            {
              "Class": 4,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([21.65389886648577, 40.46511021951606]),
            {
              "Class": 4,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([21.647204072784596, 40.50375675303929]),
            {
              "Class": 4,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([21.677931459259206, 40.534944979433526]),
            {
              "Class": 4,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([21.698359163116628, 40.517982471879364]),
            {
              "Class": 4,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([21.72273507864397, 40.535010211559516]),
            {
              "Class": 4,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([21.625777841544636, 40.48472130571027]),
            {
              "Class": 4,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([21.681979566121008, 40.48400817723292]),
            {
              "Class": 4,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([21.673308846121174, 40.48159271001073]),
            {
              "Class": 4,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([21.674081322317463, 40.47610862393087]),
            {
              "Class": 4,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([21.64120816863094, 40.47271348900432]),
            {
              "Class": 4,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([21.601420840312144, 39.82152378862612]),
            {
              "Class": 4,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([21.600476702738902, 39.826566610556526]),
            {
              "Class": 4,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([21.588674983073375, 39.818623174373165]),
            {
              "Class": 4,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([21.58009191422572, 39.82936801837077]),
            {
              "Class": 4,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([21.580864390422008, 39.829499846512384]),
            {
              "Class": 4,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([21.60202165513148, 39.821688592578276]),
            {
              "Class": 4,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([21.601892909098765, 39.813876450598315]),
            {
              "Class": 4,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([21.62747045426478, 39.826204067079516]),
            {
              "Class": 4,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([21.787743166413534, 39.777738531571124]),
            {
              "Class": 4,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([21.794738367524374, 39.780014239710546]),
            {
              "Class": 4,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([21.789159372773398, 39.78136643644073]),
            {
              "Class": 4,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([21.788472727265585, 39.777441694526814]),
            {
              "Class": 4,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([21.798171595063437, 39.772758096153524]),
            {
              "Class": 4,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([21.797914102998007, 39.775726610980726]),
            {
              "Class": 4,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([21.795038774934042, 39.77988231665578]),
            {
              "Class": 4,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([22.059944842264336, 39.77621274810628]),
            {
              "Class": 4,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([22.075222704813164, 39.766119346649106]),
            {
              "Class": 4,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([22.072519038126153, 39.76064322211571]),
            {
              "Class": 4,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([22.046040270731133, 39.76367823649847]),
            {
              "Class": 4,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([22.035225603983086, 39.76902217579444]),
            {
              "Class": 4,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([22.097109530374688, 39.75843285572172]),
            {
              "Class": 4,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([22.09659454624383, 39.758168926635015]),
            {
              "Class": 4,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([22.072905276224297, 39.759686505071066]),
            {
              "Class": 4,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([22.060288165018243, 39.77598186984194]),
            {
              "Class": 4,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([22.07208988468377, 39.760577242056584]),
            {
              "Class": 4,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([22.099067486971222, 39.79111343017922]),
            {
              "Class": 4,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([22.0751636402305, 39.79028903993532]),
            {
              "Class": 4,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([22.07413367196878, 39.79108045475913]),
            {
              "Class": 4,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([22.097737111299836, 39.79230053477417]),
            {
              "Class": 4,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([22.100011624544464, 39.79127830704246]),
            {
              "Class": 4,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([22.075292386263214, 39.794015205244236]),
            {
              "Class": 4,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([22.288496662204572, 39.79405602321981]),
            {
              "Class": 4,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([22.28102939230711, 39.80665093843996]),
            {
              "Class": 4,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([22.28853957754881, 39.79352843717157]),
            {
              "Class": 4,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([22.2803427467993, 39.806387194231135]),
            {
              "Class": 4,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([22.279441524570295, 39.806881713792706]),
            {
              "Class": 4,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([22.287981678073713, 39.79504523615315]),
            {
              "Class": 4,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([22.339600350792544, 39.7918797046886]),
            {
              "Class": 4,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([22.3262107633902, 39.79339654002721]),
            {
              "Class": 4,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([22.29802427009345, 39.80581072178199]),
            {
              "Class": 4,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([22.280085656201848, 39.80617337284892]),
            {
              "Class": 4,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([22.359135720288762, 39.794600563705494]),
            {
              "Class": 4,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([22.36837101819634, 39.80300928633771]),
            {
              "Class": 4,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([22.370988854194874, 39.80746005300254]),
            {
              "Class": 4,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([22.79715288445856, 38.51432148765767]),
            {
              "Class": 4,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([22.824532874082582, 38.51264250709559]),
            {
              "Class": 4,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([22.831141837095277, 38.52412595208942]),
            {
              "Class": 4,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([22.83285845086481, 38.52358875574507]),
            {
              "Class": 4,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([22.851680469755443, 38.52311870565451]),
            {
              "Class": 4,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([22.84404153848103, 38.52533462920343]),
            {
              "Class": 4,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([22.890819263700756, 38.49954511497299]),
            {
              "Class": 4,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([22.896054935697826, 38.50236629301024]),
            {
              "Class": 4,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([22.8946816446822, 38.500284005615434]),
            {
              "Class": 4,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([22.896827411894115, 38.49732839756889]),
            {
              "Class": 4,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([22.909873676542553, 38.498671870805474]),
            {
              "Class": 4,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([22.9111611368697, 38.49813448451756]),
            {
              "Class": 4,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([22.912620258573803, 38.497865789870225]),
            {
              "Class": 4,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([22.91468019509724, 38.49732839756889]),
            {
              "Class": 4,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([22.916482639555248, 38.4988733896299]),
            {
              "Class": 4,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([22.924550724272045, 38.49679100125864]),
            {
              "Class": 4,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([22.92240495706013, 38.49014039015685]),
            {
              "Class": 4,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([22.916482639555248, 38.48752028389561]),
            {
              "Class": 4,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([22.916139316801342, 38.485840678492295]),
            {
              "Class": 4,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([22.917855930570873, 38.48967012168921]),
            {
              "Class": 4,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([22.902406406645092, 38.49625360093946]),
            {
              "Class": 4,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([22.903608036283764, 38.49840317816263]),
            {
              "Class": 4,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([22.852452945951732, 38.522648652493956]),
            {
              "Class": 4,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([22.892879200224193, 38.496387951395086]),
            {
              "Class": 4,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([22.891334247831615, 38.49652230160015]),
            {
              "Class": 4,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([22.9042088511031, 38.49591772370424]),
            {
              "Class": 4,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([22.924035740141186, 38.49007320913511]),
            {
              "Class": 4,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([22.925494861845287, 38.48960294022901]),
            {
              "Class": 4,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([22.83125276589802, 38.5236559055074]),
            {
              "Class": 4,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([22.828592014555248, 38.52587181251592]),
            {
              "Class": 4,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([22.83528680825642, 38.5261404026685]),
            {
              "Class": 4,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([22.942004403954897, 38.53201556144085]),
            {
              "Class": 4,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([22.94869919765607, 38.53201556144085]),
            {
              "Class": 4,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([22.87651558864728, 38.51542959337961]),
            {
              "Class": 4,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([22.951960763818178, 38.529531267124355]),
            {
              "Class": 4,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([22.99959679592267, 38.54034067910556]),
            {
              "Class": 4,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([23.00114174831525, 38.54389870161913]),
            {
              "Class": 4,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([22.988267145043764, 38.51959323212089]),
            {
              "Class": 4,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([23.022513589745913, 38.52959841134178]),
            {
              "Class": 4,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([22.998652658349428, 38.50958666199489]),
            {
              "Class": 4,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([23.179497918969545, 38.499578701075706]),
            {
              "Class": 4,
              "system:index": "95"
            })]),
    Buildup = 
    /* color: #ff1319 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([25.374665511678486, 36.461314070102176]),
            {
              "Class": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([25.375266326497822, 36.461245040027876]),
            {
              "Class": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([25.380931151937276, 36.46233225656004]),
            {
              "Class": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([25.38178945882204, 36.46195259537628]),
            {
              "Class": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([25.38254047734621, 36.4616764769841]),
            {
              "Class": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([25.385008109639912, 36.46183179370069]),
            {
              "Class": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([25.378248942922383, 36.46210791153978]),
            {
              "Class": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([25.38708950383547, 36.461555674878326]),
            {
              "Class": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([25.393634093831807, 36.46333317258809]),
            {
              "Class": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([25.37361408574465, 36.464696468461675]),
            {
              "Class": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([25.37254120213869, 36.46084811590798]),
            {
              "Class": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([25.37058855397585, 36.46217694084591]),
            {
              "Class": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([25.375974429677754, 36.46133132761114]),
            {
              "Class": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([25.385608924459248, 36.46179727890167]),
            {
              "Class": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([25.428151662800634, 36.423544229171014]),
            {
              "Class": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([25.456046636555516, 36.41484172127164]),
            {
              "Class": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([23.86708012994644, 38.009294074348524]),
            {
              "Class": 3,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([23.865749754275054, 38.007163795012296]),
            {
              "Class": 3,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([23.86660806115982, 38.00936170125022]),
            {
              "Class": 3,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([23.870534815157622, 38.01174550967764]),
            {
              "Class": 3,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([23.870234407747954, 38.00772173129758]),
            {
              "Class": 3,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([23.851029791201324, 38.01015631267232]),
            {
              "Class": 3,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([23.84963504251358, 38.01046062965941]),
            {
              "Class": 3,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([23.844292082155913, 38.00736668142549]),
            {
              "Class": 3,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([23.86562100824234, 38.00699472257243]),
            {
              "Class": 3,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([23.893779452764903, 38.00510285820924]),
            {
              "Class": 3,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([23.894058402502452, 38.00594823832299]),
            {
              "Class": 3,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([23.893221553289806, 38.00613422063997]),
            {
              "Class": 3,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([23.895453151190196, 38.00457871764371]),
            {
              "Class": 3,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([23.90257709833375, 38.004223652551204]),
            {
              "Class": 3,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([23.919952172515135, 37.998995008076086]),
            {
              "Class": 3,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([23.91784932064746, 38.000296997841886]),
            {
              "Class": 3,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([23.91085411953662, 38.00337433630883]),
            {
              "Class": 3,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([23.9043309872124, 37.99757462924178]),
            {
              "Class": 3,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([23.903901833770018, 37.99757462924178]),
            {
              "Class": 3,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([23.893938261108378, 37.99827939973712]),
            {
              "Class": 3,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([23.87744333984918, 37.99010169999408]),
            {
              "Class": 3,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([23.876048591161435, 37.99169133165806]),
            {
              "Class": 3,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([23.880769279027646, 37.989492895766595]),
            {
              "Class": 3,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([23.883837726140683, 37.987767923019106]),
            {
              "Class": 3,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([23.882850673223203, 37.9910656296884]),
            {
              "Class": 3,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([23.881992366338437, 37.992976540585815]),
            {
              "Class": 3,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([23.86886461076591, 37.99363265611112]),
            {
              "Class": 3,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([23.86538846788261, 37.99189086995987]),
            {
              "Class": 3,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([23.849016187063015, 37.9942295143515]),
            {
              "Class": 3,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([23.774890080291744, 37.99499402383129]),
            {
              "Class": 3,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([23.778323307830806, 37.992220726396354]),
            {
              "Class": 3,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([23.76776613314819, 37.99232219034551]),
            {
              "Class": 3,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([23.76551307757568, 37.99183177995788]),
            {
              "Class": 3,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([23.770641461212154, 37.99548441307758]),
            {
              "Class": 3,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([23.764547482330318, 37.99670191703125]),
            {
              "Class": 3,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([23.75826038439941, 37.9917472261114]),
            {
              "Class": 3,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([23.758196011383053, 37.99130754453871]),
            {
              "Class": 3,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([23.76626409609985, 37.98740102715726]),
            {
              "Class": 3,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([23.76647867282104, 37.98726573278525]),
            {
              "Class": 3,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([23.774139061767574, 37.99015759565862]),
            {
              "Class": 3,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([23.78248609622192, 37.99670191703125]),
            {
              "Class": 3,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([23.746619083173414, 37.993515645856725]),
            {
              "Class": 3,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([23.746082641370435, 37.991892232241845]),
            {
              "Class": 3,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([23.745395995862623, 37.99194296446112]),
            {
              "Class": 3,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([23.74968753028645, 37.993820031909706]),
            {
              "Class": 3,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([23.749816276319166, 37.99963694485142]),
            {
              "Class": 3,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([23.75417218375935, 37.99152019489496]),
            {
              "Class": 3,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([23.754107810742994, 37.99547722270596]),
            {
              "Class": 3,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([23.73037914628727, 37.99533204467592]),
            {
              "Class": 3,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([23.72286896104557, 37.99707374911493]),
            {
              "Class": 3,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([23.710153322600988, 38.00275249244062]),
            {
              "Class": 3,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([23.704467039489415, 38.00011475929298]),
            {
              "Class": 3,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([23.710539560699132, 38.003564083551616]),
            {
              "Class": 3,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([23.701998698473314, 37.99673636028331]),
            {
              "Class": 3,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([23.699917304277758, 37.99783547792256]),
            {
              "Class": 3,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([23.69959543919597, 37.99516374794141]),
            {
              "Class": 3,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([23.698672759294848, 38.00035493158612]),
            {
              "Class": 3,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([23.70107601857219, 38.001301817967224]),
            {
              "Class": 3,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([23.69783201946601, 38.00265151247176]),
            {
              "Class": 3,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([23.700256736415472, 38.00233025473302]),
            {
              "Class": 3,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([22.80014120222356, 40.6903323788131]),
            {
              "Class": 3,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([22.8146465885761, 40.692154611677616]),
            {
              "Class": 3,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([22.815075742018482, 40.69430217929181]),
            {
              "Class": 3,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([22.81941019178655, 40.69381410182139]),
            {
              "Class": 3,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([22.819238530409596, 40.69192683529482]),
            {
              "Class": 3,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([22.819281445753834, 40.69016967702689]),
            {
              "Class": 3,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([22.871129226933387, 40.685451152417926]),
            {
              "Class": 3,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([22.87228794122782, 40.68128555650914]),
            {
              "Class": 3,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([22.865249824772743, 40.67835646600635]),
            {
              "Class": 3,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([22.915387753076367, 40.674423003250524]),
            {
              "Class": 3,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([22.910216454095654, 40.672893225688554]),
            {
              "Class": 3,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([22.924464348382763, 40.66748990063188]),
            {
              "Class": 3,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([22.904251221246533, 40.67046829359851]),
            {
              "Class": 3,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([22.896955612726025, 40.67168890802253]),
            {
              "Class": 3,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([22.939391539098143, 40.674933540603085]),
            {
              "Class": 3,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([22.939906523229002, 40.67509627958514]),
            {
              "Class": 3,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([22.921410009862303, 40.66463135464829]),
            {
              "Class": 3,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([22.895969320078873, 40.664730550979314]),
            {
              "Class": 3,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([22.894424367686295, 40.667595137314464]),
            {
              "Class": 3,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([22.922770256619934, 40.66191040757911]),
            {
              "Class": 3,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([22.918178314786438, 40.66173135927753]),
            {
              "Class": 3,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([22.925001854520325, 40.65784100933376]),
            {
              "Class": 3,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([22.928928608518127, 40.65891535458849]),
            {
              "Class": 3,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([22.938153529135676, 40.64175619981923]),
            {
              "Class": 3,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([22.938389563528986, 40.639411548678105]),
            {
              "Class": 3,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([22.932681822745295, 40.642554013719426]),
            {
              "Class": 3,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([22.936415457694025, 40.64709648664844]),
            {
              "Class": 3,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([22.947401785819025, 40.649017582886465]),
            {
              "Class": 3,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([22.948710703818293, 40.63869511106967]),
            {
              "Class": 3,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([22.943110251395197, 40.6378158362233]),
            {
              "Class": 3,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([22.94278838631341, 40.63719708031509]),
            {
              "Class": 3,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([22.915186525622868, 40.64215877099302]),
            {
              "Class": 3,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([22.91889870289948, 40.6484758552271]),
            {
              "Class": 3,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([22.924284578601384, 40.64964803189056]),
            {
              "Class": 3,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([22.968640341825193, 40.603060740804196]),
            {
              "Class": 3,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([22.976772799558347, 40.60719864070275]),
            {
              "Class": 3,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([22.96149493700952, 40.60565103096669]),
            {
              "Class": 3,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([22.95726777560205, 40.60765477147133]),
            {
              "Class": 3,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([22.95795442110986, 40.606221207144095]),
            {
              "Class": 3,
              "system:index": "114"
            })]),
    Baren = 
    /* color: #787c6d */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([25.518548814456587, 35.11517176300163]),
            {
              "Class": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([25.507905809085493, 35.11783967205564]),
            {
              "Class": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([25.500352708499555, 35.114750506217625]),
            {
              "Class": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([25.503614274661665, 35.118962976047264]),
            {
              "Class": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([25.52249702612651, 35.113627144145916]),
            {
              "Class": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([25.5082491318394, 35.10772923918258]),
            {
              "Class": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([25.48696312109721, 35.08272861876419]),
            {
              "Class": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([25.522325364749555, 35.11215270792332]),
            {
              "Class": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([25.545757142703657, 35.115101553688866]),
            {
              "Class": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([25.53871902624858, 35.1139079861158]),
            {
              "Class": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([25.513055650394087, 35.10920375544116]),
            {
              "Class": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([25.500352708499555, 35.10786967045185]),
            {
              "Class": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([25.501039354007368, 35.11334630120805]),
            {
              "Class": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([25.496279978887156, 35.088688092462476]),
            {
              "Class": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([25.48718192590864, 35.07639654963469]),
            {
              "Class": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([24.04221116357861, 35.350052109972225]),
            {
              "Class": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([24.03397141748486, 35.35285231331399]),
            {
              "Class": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([25.455673667074336, 36.404322109534455]),
            {
              "Class": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([25.45661780464758, 36.40394216450029]),
            {
              "Class": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([25.41560342624976, 36.43043521256839]),
            {
              "Class": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([25.418178346904057, 36.430297097398714]),
            {
              "Class": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([25.42105367496802, 36.429571988726394]),
            {
              "Class": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([25.42337110355689, 36.428605166627584]),
            {
              "Class": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([25.424529817851322, 36.4273966220718]),
            {
              "Class": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([25.408554519373965, 36.462143698146505]),
            {
              "Class": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([25.40396257754047, 36.461004706248474]),
            {
              "Class": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([25.400829757411074, 36.460348915444904]),
            {
              "Class": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([25.390830482203555, 36.45952054018664]),
            {
              "Class": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([25.394682177149942, 36.45976215055109]),
            {
              "Class": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([25.406569727503946, 36.46193660995494]),
            {
              "Class": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([25.404810198390177, 36.46200563941358]),
            {
              "Class": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([25.3957550607559, 36.460176337995875]),
            {
              "Class": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([25.38725782259672, 36.46000376016273]),
            {
              "Class": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([20.71324057010328, 40.027664637492904]),
            {
              "Class": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([20.718805237689082, 40.029691064340255]),
            {
              "Class": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([20.699750824847285, 40.02482749824683]),
            {
              "Class": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([20.68438713160998, 40.017597232163745]),
            {
              "Class": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([20.631177842636923, 40.04573608513448]),
            {
              "Class": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([20.627229630967, 40.04133363689906]),
            {
              "Class": 2,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([20.628431260605673, 40.03154209862996]),
            {
              "Class": 2,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([27.242819522633045, 36.83218962205355]),
            {
              "Class": 2,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([27.24144623161742, 36.831159138685365]),
            {
              "Class": 2,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([27.22642586113402, 36.829785139268765]),
            {
              "Class": 2,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([27.22119018913695, 36.83397576034258]),
            {
              "Class": 2,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([27.21020386101195, 36.82765539140599]),
            {
              "Class": 2,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([27.216383670582264, 36.83754791180395]),
            {
              "Class": 2,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([27.197586749805897, 36.82875462351226]),
            {
              "Class": 2,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([27.23449394585082, 36.82882332499455]),
            {
              "Class": 2,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([27.21895859123656, 36.8323270187872]),
            {
              "Class": 2,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([27.43772276055781, 36.39610019887431]),
            {
              "Class": 2,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([27.43652113091914, 36.39530568217668]),
            {
              "Class": 2,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([27.433559972166698, 36.39375116949636]),
            {
              "Class": 2,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([27.43347414147822, 36.39230026294609]),
            {
              "Class": 2,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([27.444331723570507, 36.400521708647304]),
            {
              "Class": 2,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([27.43798025262324, 36.39827644215107]),
            {
              "Class": 2,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([27.432186681151073, 36.39492569305906]),
            {
              "Class": 2,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([27.445118159623505, 36.40381395412935]),
            {
              "Class": 2,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([27.443358630509735, 36.40415935935253]),
            {
              "Class": 2,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([27.444131106706024, 36.39991076840626]),
            {
              "Class": 2,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([27.438337535233856, 36.39566194517973]),
            {
              "Class": 2,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([27.437565059037567, 36.39462561159712]),
            {
              "Class": 2,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([27.434389323563934, 36.392380174767766]),
            {
              "Class": 2,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([27.445804805131317, 36.400567069981925]),
            {
              "Class": 2,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([27.164073933728798, 35.6743341588367]),
            {
              "Class": 2,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([27.162700642713173, 35.68130626599787]),
            {
              "Class": 2,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([27.16029738343583, 35.67928441763308]),
            {
              "Class": 2,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([27.159181584485633, 35.678447775738185]),
            {
              "Class": 2,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([27.158323277600868, 35.67687904854269]),
            {
              "Class": 2,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([27.15879534638749, 35.6750313969641]),
            {
              "Class": 2,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([27.158666600354774, 35.67339287770256]),
            {
              "Class": 2,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([27.158452023633583, 35.672451585467286]),
            {
              "Class": 2,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([27.162185658582313, 35.68102739340717]),
            {
              "Class": 2,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([27.15725039399491, 35.680957675107194]),
            {
              "Class": 2,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([27.16647719300614, 35.6979671342365]),
            {
              "Class": 2,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([27.154975880750282, 35.66868630551761]),
            {
              "Class": 2,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([27.159095753797157, 35.6713359654802]),
            {
              "Class": 2,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([27.124631125408012, 35.67449863371824]),
            {
              "Class": 2,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([27.12347241111358, 35.67474266725281]),
            {
              "Class": 2,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([27.16316910453399, 35.66801404076406]),
            {
              "Class": 2,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([27.139565665202934, 35.6475753169538]),
            {
              "Class": 2,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([24.800986248363376, 35.19098855243366]),
            {
              "Class": 2,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([24.805792766918064, 35.187761869433345]),
            {
              "Class": 2,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([24.803475338329196, 35.18923493626405]),
            {
              "Class": 2,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([24.822529751170993, 35.18327235819647]),
            {
              "Class": 2,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([24.82364555012119, 35.18278130285784]),
            {
              "Class": 2,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([24.79909797321689, 35.184815655659314]),
            {
              "Class": 2,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([24.82931037556064, 35.17723918692209]),
            {
              "Class": 2,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([24.851025539745212, 35.1773093426497]),
            {
              "Class": 2,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([24.85531707416904, 35.174643382436145]),
            {
              "Class": 2,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([24.894344947443063, 37.43247772378574]),
            {
              "Class": 2,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([24.894108913049752, 37.43188135997583]),
            {
              "Class": 2,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([24.893787047967965, 37.43142130464748]),
            {
              "Class": 2,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([24.899537704095895, 37.43469274776664]),
            {
              "Class": 2,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([24.899752280817086, 37.434317902162384]),
            {
              "Class": 2,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([25.43390465074906, 36.35483873260769]),
            {
              "Class": 2,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([25.413047793449255, 36.35255758362968]),
            {
              "Class": 2,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([25.414335253776404, 36.351520675633054]),
            {
              "Class": 2,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([25.428583148063513, 36.348548129501104]),
            {
              "Class": 2,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([25.428840640128943, 36.353940106141536]),
            {
              "Class": 2,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([25.409528735221716, 36.357396305000705]),
            {
              "Class": 2,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([25.44068527513871, 36.34737290554076]),
            {
              "Class": 2,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([25.449954989494177, 36.361820015607314]),
            {
              "Class": 2,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([25.45836639696488, 36.360506752763754]),
            {
              "Class": 2,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([25.461799624503943, 36.363409725188575]),
            {
              "Class": 2,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([25.477506640495154, 36.36085235039747]),
            {
              "Class": 2,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([25.438196185172888, 36.3664508182475]),
            {
              "Class": 2,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([25.43467712694535, 36.367902207126505]),
            {
              "Class": 2,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([25.435535433830115, 36.37066668247367]),
            {
              "Class": 2,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([25.43313217455277, 36.37018290637881]),
            {
              "Class": 2,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([25.430299761833044, 36.36990646154537]),
            {
              "Class": 2,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([25.468065264762732, 36.36292590397117]),
            {
              "Class": 2,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([25.469266894401404, 36.36914623318851]),
            {
              "Class": 2,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([25.47887993151078, 36.36085235039747]),
            {
              "Class": 2,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([25.42317581468949, 36.35062201086462]),
            {
              "Class": 2,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([25.421030047477576, 36.348962910193144]),
            {
              "Class": 2,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([25.4154510527266, 36.34999985225596]),
            {
              "Class": 2,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([25.410129550041052, 36.349930723214754]),
            {
              "Class": 2,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([25.372106555045935, 36.359953793357704]),
            {
              "Class": 2,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([25.3769989042891, 36.36223472558539]),
            {
              "Class": 2,
              "system:index": "118"
            })]),
    Soil = 
    /* color: #ffb946 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([21.865311460943193, 40.450836795013075]),
            {
              "Class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([21.86385233923909, 40.45371054841957]),
            {
              "Class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([21.861191587896318, 40.45188181047132]),
            {
              "Class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([21.84891779944417, 40.44149624769899]),
            {
              "Class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([21.842223005742998, 40.43241573036452]),
            {
              "Class": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([21.840248899908037, 40.44100632302885]),
            {
              "Class": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([21.852951841802568, 40.4557678191221]),
            {
              "Class": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([21.84788783118245, 40.42921439232562]),
            {
              "Class": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([21.795004518341237, 40.476602053742646]),
            {
              "Class": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([23.882041251314423, 37.93652902965388]),
            {
              "Class": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([23.89206198419406, 37.93422739755499]),
            {
              "Class": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([23.87135533059909, 37.92911616269425]),
            {
              "Class": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([23.89307049478366, 37.93641056505514]),
            {
              "Class": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([23.51094337631041, 37.98335876163063]),
            {
              "Class": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([23.5117158525067, 37.98318963430946]),
            {
              "Class": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([23.510085069425646, 37.98464411653249]),
            {
              "Class": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([23.500283058972695, 37.96040716843908]),
            {
              "Class": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([23.732048663953623, 37.886600127492535]),
            {
              "Class": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([23.733293208936534, 37.892493268101184]),
            {
              "Class": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([23.726040515760264, 37.89659109356552]),
            {
              "Class": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([23.744322452405772, 37.89950345893257]),
            {
              "Class": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([23.7431208227671, 37.89933413851982]),
            {
              "Class": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([23.725825939039073, 37.90278819785998]),
            {
              "Class": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([23.733979854444346, 37.89411887905303]),
            {
              "Class": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([23.744708690503916, 37.89777637244628]),
            {
              "Class": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([23.812693637487047, 37.86045920514035]),
            {
              "Class": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([23.812736552831286, 37.85954438546001]),
            {
              "Class": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([23.792523425695055, 37.849887263034645]),
            {
              "Class": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([23.799475711461657, 37.86188223540746]),
            {
              "Class": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([23.80114940988695, 37.86506701311108]),
            {
              "Class": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([23.80063442575609, 37.86665935035141]),
            {
              "Class": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([23.790978473302477, 37.84812512528656]),
            {
              "Class": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([23.898108984896353, 37.84574448579325]),
            {
              "Class": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([23.897379424044303, 37.84611726124799]),
            {
              "Class": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([22.681911051817693, 37.49763040969542]),
            {
              "Class": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([25.243786181503403, 37.090270480642204]),
            {
              "Class": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([25.24258455186473, 37.08992815002626]),
            {
              "Class": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([25.207737292343246, 37.093351386599856]),
            {
              "Class": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([25.19014200120555, 37.1012926998981]),
            {
              "Class": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([25.228422488266098, 37.108137991549825]),
            {
              "Class": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([25.25434335618602, 37.116693736141194]),
            {
              "Class": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([25.252197588974106, 37.11902073143984]),
            {
              "Class": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([25.242412890487778, 37.113203109091295]),
            {
              "Class": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([25.244987811142074, 37.09499448522792]),
            {
              "Class": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([25.245416964584457, 37.090475878269515]),
            {
              "Class": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([25.264128054672348, 37.11203953098165]),
            {
              "Class": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([25.267475451522934, 37.117241270881266]),
            {
              "Class": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([25.269707049423324, 37.121484530857316]),
            {
              "Class": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([25.25657495408641, 37.11874697099931]),
            {
              "Class": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([25.188511218124496, 37.10259335291466]),
            {
              "Class": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([25.191257800155746, 37.00484868834905]),
            {
              "Class": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([25.15649637132274, 37.01026339756408]),
            {
              "Class": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([25.10688559015965, 37.01732266001248]),
            {
              "Class": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([25.117292561137432, 37.02590578508107]),
            {
              "Class": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([25.118923344218487, 37.02494644199194]),
            {
              "Class": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([25.1175929685471, 37.02098902368677]),
            {
              "Class": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([25.11757151087498, 37.02068064477172]),
            {
              "Class": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([25.11782900294041, 37.019686970864385]),
            {
              "Class": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([25.11662737330174, 37.018864610216696]),
            {
              "Class": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([25.11362329920506, 37.022428108740364]),
            {
              "Class": 1,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([25.115919270121807, 37.025528901740955]),
            {
              "Class": 1,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([25.122914471232647, 37.019755500516574]),
            {
              "Class": 1,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([25.126390614115948, 37.02100615581201]),
            {
              "Class": 1,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([25.116799034678692, 37.02534045936969]),
            {
              "Class": 1,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([25.115747608744854, 37.0186761513147]),
            {
              "Class": 1,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([25.115254082286114, 37.018470559252115]),
            {
              "Class": 1,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([25.1145674367783, 37.021434457687654]),
            {
              "Class": 1,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([25.15821731252344, 37.00532694629731]),
            {
              "Class": 1,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([25.157616497704105, 37.00460724524467]),
            {
              "Class": 1,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([25.159333111473636, 37.0041274407576]),
            {
              "Class": 1,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([25.162065590555038, 37.001752784371824]),
            {
              "Class": 1,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([25.193865860635604, 37.00449456914973]),
            {
              "Class": 1,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([25.429759665355025, 36.98901734186998]),
            {
              "Class": 1,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([25.44812743268901, 36.99127970030154]),
            {
              "Class": 1,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([25.429073019847213, 36.98675491614784]),
            {
              "Class": 1,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([25.44932906232768, 36.990388476225085]),
            {
              "Class": 1,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([25.429330511912642, 37.016435332391616]),
            {
              "Class": 1,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([25.426583929881392, 36.989840025449034]),
            {
              "Class": 1,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([25.447698279246627, 36.989977138513794]),
            {
              "Class": 1,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([25.43310706220561, 37.017394782955705]),
            {
              "Class": 1,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([25.44186179243022, 37.02390502033441]),
            {
              "Class": 1,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([25.44066016279155, 37.02561814797962]),
            {
              "Class": 1,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([25.509839697703658, 37.01664092996089]),
            {
              "Class": 1,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([25.186884839815466, 39.916981483530016]),
            {
              "Class": 1,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([25.20156188754496, 39.93205489257238]),
            {
              "Class": 1,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([25.194180448335974, 39.95153350836425]),
            {
              "Class": 1,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([25.19031806735453, 39.95449429881685]),
            {
              "Class": 1,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([25.18980308322367, 39.917047313490976]),
            {
              "Class": 1,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([25.217440564913122, 39.92882985705026]),
            {
              "Class": 1,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([25.212376554293005, 39.952520452756104]),
            {
              "Class": 1,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([25.1860265329307, 39.916257349783095]),
            {
              "Class": 1,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([25.381230449104166, 39.97151519912506]),
            {
              "Class": 1,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([25.383547877693033, 39.97190986323908]),
            {
              "Class": 1,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([25.38638029041276, 39.97434357491969]),
            {
              "Class": 1,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([25.38509283008561, 39.97875034579736]),
            {
              "Class": 1,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([25.382517909431314, 39.97434357491969]),
            {
              "Class": 1,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([25.355824565315103, 39.96184521649822]),
            {
              "Class": 1,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([25.38689527454362, 39.96598966225492]),
            {
              "Class": 1,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([25.2580634111403, 39.97414625017395]),
            {
              "Class": 1,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([25.394448375129556, 39.97979061762325]),
            {
              "Class": 1,
              "system:index": "99"
            })]),
    Waterbodies = 
    /* color: #0b45ff */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([21.443070961099306, 38.344144626480045]),
            {
              "Class": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([21.43294293985907, 38.36070268842809]),
            {
              "Class": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([21.45268399820868, 38.3553183682725]),
            {
              "Class": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([21.453027320962587, 38.34952977750356]),
            {
              "Class": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([21.758266574652367, 40.710677167446555]),
            {
              "Class": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([21.76822293451565, 40.73019253497373]),
            {
              "Class": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([21.776119357855492, 40.751782871830834]),
            {
              "Class": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([21.77989590814846, 40.77076617065964]),
            {
              "Class": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([21.79019559076565, 40.79338302081294]),
            {
              "Class": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([21.805301791937524, 40.79156355914943]),
            {
              "Class": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([21.801525241644555, 40.7731062019453]),
            {
              "Class": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([21.801525241644555, 40.743979944349654]),
            {
              "Class": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([21.693378574164086, 40.719524843017126]),
            {
              "Class": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([21.710888034613305, 40.72655010069993]),
            {
              "Class": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([21.69475186517971, 40.738257215641646]),
            {
              "Class": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([21.70024502924221, 40.73071286645185]),
            {
              "Class": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([21.687885410101586, 40.73305430775119]),
            {
              "Class": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([21.701618320257836, 40.72759081655072]),
            {
              "Class": 0,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([21.69681180170315, 40.71718292567598]),
            {
              "Class": 0,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([23.377836070486353, 40.68141412270454]),
            {
              "Class": 0,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([23.402555308767603, 40.67724827449172]),
            {
              "Class": 0,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([23.42384131950979, 40.67724827449172]),
            {
              "Class": 0,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([23.42109473747854, 40.66579084958092]),
            {
              "Class": 0,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([23.449933848806666, 40.67672752516034]),
            {
              "Class": 0,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([23.495939097830103, 40.68089340591509]),
            {
              "Class": 0,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([23.513105235525416, 40.67151980812505]),
            {
              "Class": 0,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([23.52821143669729, 40.66214489243842]),
            {
              "Class": 0,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([23.55842383904104, 40.65276865892098]),
            {
              "Class": 0,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([23.548124156423853, 40.664228320924394]),
            {
              "Class": 0,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([23.55018409294729, 40.64651710448029]),
            {
              "Class": 0,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([23.167722545095728, 40.685579710578395]),
            {
              "Class": 0,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([23.183515391775416, 40.678810498079635]),
            {
              "Class": 0,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([23.175962291189478, 40.67099901404963]),
            {
              "Class": 0,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([23.152616343923853, 40.683496949184175]),
            {
              "Class": 0,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([23.13545020622854, 40.69078632931038]),
            {
              "Class": 0,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([23.130643687673853, 40.68505902633165]),
            {
              "Class": 0,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([23.164975963064478, 40.670478215906634]),
            {
              "Class": 0,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([23.381955943533228, 40.67099901404963]),
            {
              "Class": 0,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([25.094746720958554, 41.05897559885448]),
            {
              "Class": 0,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([25.100926530528866, 41.047066179315365]),
            {
              "Class": 0,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([25.10161317603668, 41.03567254332548]),
            {
              "Class": 0,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([25.12427247779449, 41.02738502376122]),
            {
              "Class": 0,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([25.14899171607574, 41.02842102075707]),
            {
              "Class": 0,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([25.15929139869293, 41.01909646100695]),
            {
              "Class": 0,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([25.21422303931793, 40.95275040921213]),
            {
              "Class": 0,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([25.24512208716949, 40.94289647802449]),
            {
              "Class": 0,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([25.15997804420074, 41.00821613934032]),
            {
              "Class": 0,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([25.13731874244293, 41.020132588399264]),
            {
              "Class": 0,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([25.100926530528866, 41.03049296584892]),
            {
              "Class": 0,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([21.114472724188108, 40.770957202778604]),
            {
              "Class": 0,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([21.100053168524045, 40.76471673439255]),
            {
              "Class": 0,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([21.075333930242795, 40.76939714062239]),
            {
              "Class": 0,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([21.092500067938108, 40.7537945046206]),
            {
              "Class": 0,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([21.091126776922483, 40.73922874003916]),
            {
              "Class": 0,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([21.08494696735217, 40.7262208973489]),
            {
              "Class": 0,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([21.283387519109983, 40.54123517684107]),
            {
              "Class": 0,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([21.30192694782092, 40.537060580639725]),
            {
              "Class": 0,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([21.300553656805295, 40.528188699985286]),
            {
              "Class": 0,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([21.306733466375608, 40.506264900303925]),
            {
              "Class": 0,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([21.286134101141233, 40.496866791575584]),
            {
              "Class": 0,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([21.070688674294654, 40.82932680638014]),
            {
              "Class": 0,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([21.026056716286842, 40.84750882660807]),
            {
              "Class": 0,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([21.005457351052467, 40.840236616973506]),
            {
              "Class": 0,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([21.00339741452903, 40.82465062368705]),
            {
              "Class": 0,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([21.111887404763404, 40.76227001597165]),
            {
              "Class": 0,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([21.076868483864967, 39.82903238314227]),
            {
              "Class": 0,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([20.884607741677467, 39.65374059937312]),
            {
              "Class": 0,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([20.901087233864967, 39.6584983639113]),
            {
              "Class": 0,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([20.895594069802467, 39.64845381024441]),
            {
              "Class": 0,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([20.911386916482154, 39.65902698420002]),
            {
              "Class": 0,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([20.87705464109153, 39.65638384232518]),
            {
              "Class": 0,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([20.889414260232154, 39.670127076271584]),
            {
              "Class": 0,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([20.89078755124778, 39.64739640390369]),
            {
              "Class": 0,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([20.859201857888404, 39.68122538517999]),
            {
              "Class": 0,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([22.739923903786842, 39.526746105596445]),
            {
              "Class": 0,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([22.732370803200904, 39.516682432815934]),
            {
              "Class": 0,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([22.82163471921653, 39.49814027113644]),
            {
              "Class": 0,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([22.785242507302467, 39.456269777537294]),
            {
              "Class": 0,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([22.773569533669654, 39.49919995651913]),
            {
              "Class": 0,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([22.693918654763404, 39.57915953993963]),
            {
              "Class": 0,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([22.71726460202903, 39.53001838259394]),
            {
              "Class": 0,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([22.734430739724342, 39.547493103479695]),
            {
              "Class": 0,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([22.76670307859153, 39.53584377838314]),
            {
              "Class": 0,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([22.757090041482154, 39.518366124629694]),
            {
              "Class": 0,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([22.742670485818092, 39.508831004844104]),
            {
              "Class": 0,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([22.691172072732154, 39.572373746692485]),
            {
              "Class": 0,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([22.674692580544654, 39.59089608674178]),
            {
              "Class": 0,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([22.797602126443092, 39.50141389580266]),
            {
              "Class": 0,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([22.807215163552467, 39.49187644955125]),
            {
              "Class": 0,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([22.817514846169654, 39.46643686257222]),
            {
              "Class": 0,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([22.83262104734153, 39.48180772559448]),
            {
              "Class": 0,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([22.842920729958717, 39.49399599513646]),
            {
              "Class": 0,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([22.842234084450904, 39.4786278256735]),
            {
              "Class": 0,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([22.86832661374778, 39.47968780846708]),
            {
              "Class": 0,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([22.877939650857154, 39.48763716452702]),
            {
              "Class": 0,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([22.851160476052467, 39.476507811627116]),
            {
              "Class": 0,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([22.82987446531028, 39.47014738182285]),
            {
              "Class": 0,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([21.75520363490913, 39.29897944804195]),
            {
              "Class": 0,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([21.74421730678413, 39.31013715334167]),
            {
              "Class": 0,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([21.751770407370067, 39.294197029844526]),
            {
              "Class": 0,
              "system:index": "99"
            })]);


//----------------------- User Guide: Land Cover Classification ------------------------//

// Introduction:
// This script is designed to classify land cover in Greece using Random Forest (RF) Regression from Sentinel-2 Level-2 images.


// To use this code effectively, follow these steps:

// Step 1: Customize Parameters
// - Specify the date range (start and end dates) to sample Sentinel-2 images.
// - Define the cloud cover threshold as a percentage in the 'cloud' variable.
// - Specify the number of trees for the RF algorithm
// - (Optional) By default the code is used to classify the land cover for Greece but there is an option to specify your Area Of Interest (AOI) by selecting from the "ADMINISTRATIVE BOUNDARIES SELECTION" list below 
//  and replace the variable Greece with AOI_Selection to classify land cover for an specific region.
 
// Step 2: Image Collection and Preprocessing
// - The code will collect all images with cloud cover less than the specified threshold within the date range and will apply Random Forest ml algorithm 
// - for the region. The results efficiency of the algorithm is desplayed on the Console

// Optional Parameters:
// - In the parameters section, you can change the smoothing window for the classified image.
// - Adjust the number of trees used in the Random Forest algorithm.

// After setting the parameters, run the script. It may generate errors, but the main goal is to visualize the image for selecting training data.

// PART 2 - TRAINING DATA
// Predefined shample Classes:
// - The following land cover classes are predefined:
  //    Waterbodies (0)
  //    Soil (1)
  //    Baren (2)
  //    Buildup (3)
  //    Crops (4)
  //    Shrubs (5)
  //    Grasslands (6)
  //    MixedForest (7)
  //    Coniferous (8)
  //    Scar (8)

// If you need to gather new training data, use the same class names or modify the script accordingly.

// ADMINISTRATIVE BOUNDARIES SELECTION:
// For the filter selection in Greece, set the variable 'AOI' to one of the following administrative areas:

// - Dramas
// - Evrou
// - Kavalas
// - Rodopis
// - Xanthis
// - Attikis
// - Achaias
// - Aitolias Kai Akarnanias
// - Ileias
// - Florinis
// - Grevenon
// - Kastorias
// - Kozanis
// - Kefallinias
// - Kerkyras
// - Lefkados
// - Zakynthou
// - Artis
// - Ioanninon
// - Prevezis
// - Thesprotias
// - Agiou Orous
// - Chalkidikis
// - Imathias
// - Kilkis
// - Pellis
// - Pierias
// - Serron
// - Thessalonikis
// - Chanion
// - Irakleiou
// - Lasithiou
// - Rethymnis
// - Argolidos
// - Arkadias
// - Korinthias
// - Lakonias
// - Messinias
// - Evrytanias
// - Evvoias
// - Fokidos
// - Fthiotidos
// - Voiotias
// - Karditsis
// - Larisis
// - Magnisias
// - Trikalon
// - Chiou
// - Lesvou
// - Samou
// - Dodekanisou
// - Kykladon
// - Simi


//------------------------------------------------------------------------------------//

//------------------------Constants----------------------------------//
//visualization parameters
var Viz_CI = {min:0, max:6000,bands:['B8', 'B4', 'B3']};

var classPalette = [
  '#0000CD',   //Waterbodies (0)
  '#ffb946',   //Soil (1)
  '#787c6d',   //Baren (2)
  '#ff1319',   //Buildup (3)
  '#fffd1b',   //Crops (4)
  '#d8e696',   //Shrubs (5)
  '#88ff83',   //Grasslands (6)
  '#68d62a',   //MixedForest (7)
  '#21a11c',   //Coniferous (8)
  '#5b3737',   //Scar (8)
  ];

//Corine 2018
var CorineLC2018 = Corine.select('landcover');

//Greece 
var Greece = LISB.filter(ee.Filter.equals('country_na', 'Greece'));

//------------------------Parameters---------------------------------//

//Specify start and end period to build an image collection
var date_start = '2023-09-01';
var date_end = '2023-10-27';

//Specify cloud cover theshold
var cloud = 10;

//Select the region of interest based on the list provided in the Info section (optional see info)
var AOI = 'Attikis';

//Smoothing effect
var smooth = 3;

//Number of trees
var treeNo = 300;


//-----------------------Model-------------------------------------//

function main (){
 
 //Selects the AOI
 var AOI_Selection = GAUL_L2.filter(ee.Filter.eq('ADM2_NAME', AOI));
 
 //Clip land Cover
  var CorineLC2018_Clip = CorineLC2018.clip(Greece);
 
 //Creates an image from S2 database
 var Img = S2.filterDate(date_start,date_end)
                    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', cloud))
                    .filterBounds(Greece)
                    .median()
                    .clip(Greece);
 
 //var Img = ee.Image(collection.mosaic()).clip(AOI_Selection) ;                  
 
  
  //Creates a training dataset
  var training = Waterbodies
    .merge(Soil)
    .merge(Soil)
    .merge(Buildup)
    .merge(Shrubs)
    .merge(Crops)
    .merge(Grasslands)
    .merge(MixedForest)
    .merge(Coniferous)
    .merge(Scar);
  
  // Stores the land cover labels
  var label = 'Class';
  var bands = ['B2', 'B3', 'B4', 'B8','B11','B12'];
  var input = Img.select(bands);
  
  // Overlay the points on the imagery to get training.
  var trainImg = input.sampleRegions({
    collection: training,
    properties: [label],
    scale: 20
  });
  
  //Select traind and test dadasets
  var trainData = trainImg.randomColumn();
  var trainSet = trainData.filter(ee.Filter.lessThan('random', 0.8));
  var testSet = trainData.filter(ee.Filter.greaterThanOrEquals('random', 0.8));
  
  // Classification with RF
  var classifier = ee.Classifier.smileRandomForest(treeNo).train(trainSet, label, bands);
  
  // Classify the image
  var classifiedImg = input.classify(classifier);
  
  //Classified image smoothing
  var Kernel = ee.Kernel.square({radius:smooth,units:"pixels"});

  var classifiedImg_smooth = classifiedImg.reduceNeighborhood({
    reducer: ee.Reducer.mode(),
    kernel: Kernel
  });

  //Add to map
  Map.centerObject(AOI_Selection,9);
  Map.addLayer(Img,Viz_CI,"Color Infrared");
  Map.addLayer(classifiedImg_smooth, {palette: classPalette, min: 0, max: 9}, 'Land Cover Smooth',false);
  Map.addLayer(classifiedImg, {palette: classPalette, min: 0, max: 9}, 'Land Cover Raw');
  Map.addLayer(CorineLC2018_Clip, {}, 'Corine 2018');
  
  //Create a legend panel
  var legendPanel = ui.Panel({
    style: {
      backgroundColor: 'white',
      border: '1px solid black',
      padding: '10px',
      width: '250px',
      position:'bottom-left'
    }
  });

  Map.add(legendPanel);
  
  // set position of panel
  var legend = ui.Panel({
    style: {
      position: 'bottom-left',
      padding: '8px 15px'
    }
  });
  
  // Create legend title
  var legendTitle = ui.Label({
    value: 'Land Cover (RF)',
    style: {
      fontWeight: 'bold',
      fontSize: '14px',
      margin: '0 0 4px 0',
      padding: '0'
      }
  });
 
  // Add the title to the panel
  legend.add(legendTitle);
 
  // Creates and styles 1 row of the legend.
  var makeRow = function(color, name) {
        var colorBox = ui.Label({
          style: {
            backgroundColor: color,
            padding: '8px',
            margin: '0 0 4px 0'
          }
        });
        var description = ui.Label({
          value: name,
          style: {margin: '0 0 4px 6px'}
        });
        return ui.Panel({
          widgets: [colorBox, description],
          layout: ui.Panel.Layout.Flow('horizontal')
        });
  };
  
  // name of the legend
  var names = ['Waterbodies','Soil','Baren', 'Buildup', 'Crops', 'Shrubs', 'Grasslands', 'Mixed forest', 'Coniferous','Earth scar'];
  
  // Add color and and names to legend
  for (var i = 0; i < 10; i++) {
    legend.add(makeRow(classPalette[i], names[i]));
    }  
 

  legendPanel.add(legend);
  
  // Accuracy Assessment
  var confusionMatrix = ee.ConfusionMatrix(testSet.classify(classifier)
     .errorMatrix({
       actual: 'Class', 
        predicted: 'classification'
      }));

  print('Confusion matrix:', confusionMatrix);
  print('Overall Accuracy:', confusionMatrix.accuracy());
  print('Kappa statistic', confusionMatrix.kappa());
  
  //Export results

  // Export.image.toDrive({
  //   image: classifiedImg,
  //   description: 'Classified_Image',
  //   scale: 20,
  //   region: AOI_Selection,
  //   maxPixels: 1e13,
  
}

main();

