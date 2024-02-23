var GAUL_L2 = ee.FeatureCollection("FAO/GAUL/2015/level2"),
    S2 = ee.ImageCollection("COPERNICUS/S2_SR"),
    Corine = ee.Image("COPERNICUS/CORINE/V20/100m/2018"),
    LISB = ee.FeatureCollection("USDOS/LSIB_SIMPLE/2017"),
    Coniferous = 
    /* color: #1b8417 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([21.981255240350173, 40.53604071158961]),
            {
              "Class": 7,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([22.03429860582869, 40.47769873946594]),
            {
              "Class": 7,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([22.03996343126814, 40.47560949546177]),
            {
              "Class": 7,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([21.976963705926345, 40.54647687320287]),
            {
              "Class": 7,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([21.95087117662947, 40.56069352651509]),
            {
              "Class": 7,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([21.9361082982115, 40.531865791703005]),
            {
              "Class": 7,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([21.92392034044783, 40.53512747009251]),
            {
              "Class": 7,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([22.03429860582869, 40.47587065451766]),
            {
              "Class": 7,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([21.970268912225173, 40.45549719778469]),
            {
              "Class": 7,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([21.966664023309157, 40.447528973165845]),
            {
              "Class": 7,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([21.984001822381423, 40.53016965619431]),
            {
              "Class": 7,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([21.968037314324782, 40.5445202167482]),
            {
              "Class": 7,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([21.968037314324782, 40.55625929803689]),
            {
              "Class": 7,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([21.97610539904158, 40.55821561151152]),
            {
              "Class": 7,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([21.96134252062361, 40.55599845192115]),
            {
              "Class": 7,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([21.939026541619704, 40.524428571306245]),
            {
              "Class": 7,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([21.93662328234236, 40.51842600218932]),
            {
              "Class": 7,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([21.965290732293532, 40.456150289053156]),
            {
              "Class": 7,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([22.05300969591658, 40.46894959632298]),
            {
              "Class": 7,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([20.879146039715692, 40.27915885833364]),
            {
              "Class": 7,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([20.8849825265321, 40.282170895923954]),
            {
              "Class": 7,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([20.962401807537958, 40.284266147275346]),
            {
              "Class": 7,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([20.927726209393427, 40.19974987671925]),
            {
              "Class": 7,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([20.916568219891474, 40.19647192844275]),
            {
              "Class": 7,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([20.907813489666864, 40.205125368835446]),
            {
              "Class": 7,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([20.900603711834833, 40.20132323560362]),
            {
              "Class": 7,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([20.898028791180536, 40.21469531192138]),
            {
              "Class": 7,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([20.87571281217663, 40.1966030494164]),
            {
              "Class": 7,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([20.945922315350458, 40.174964658416805]),
            {
              "Class": 7,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([20.903350293866083, 40.25636779168958]),
            {
              "Class": 7,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([20.869533002606317, 40.27313438058112]),
            {
              "Class": 7,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([20.784903943768427, 40.21286008509452]),
            {
              "Class": 7,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([20.94163078092663, 40.30233499452116]),
            {
              "Class": 7,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([20.882064283123896, 40.28112324589548]),
            {
              "Class": 7,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([20.900775373211786, 40.21181136173627]),
            {
              "Class": 7,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([20.944720685711786, 40.1994876466888]),
            {
              "Class": 7,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([21.086856305828974, 40.200798786699025]),
            {
              "Class": 7,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([20.94815391325085, 40.25348561571267]),
            {
              "Class": 7,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([20.842871338881576, 40.29568245789468]),
            {
              "Class": 7,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([20.760988862074935, 40.29895560516162]),
            {
              "Class": 7,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([20.8442446298972, 40.295355134447206]),
            {
              "Class": 7,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([20.75961557105931, 40.29764636528212]),
            {
              "Class": 7,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([20.875057847060287, 40.27872501719366]),
            {
              "Class": 7,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([20.868363053359115, 40.288742861306524]),
            {
              "Class": 7,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([20.9046694345847, 40.27793924114564]),
            {
              "Class": 7,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([20.896858841933334, 40.28265376045154]),
            {
              "Class": 7,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([20.887846619643295, 40.28586206475254]),
            {
              "Class": 7,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([20.87900605873021, 40.27067037979049]),
            {
              "Class": 7,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([20.837721497572982, 40.276957008243656]),
            {
              "Class": 7,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([20.839695603407943, 40.30281771499409]),
            {
              "Class": 7,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([20.938686907938607, 40.30936859683002]),
            {
              "Class": 7,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([20.924581323737574, 40.33155983324687]),
            {
              "Class": 7,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([20.919259821052027, 40.33155983324687]),
            {
              "Class": 7,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([20.910590921515894, 40.33960721376341]),
            {
              "Class": 7,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([20.91265085803933, 40.345429516626204]),
            {
              "Class": 7,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([20.926666911485874, 40.32890009846841]),
            {
              "Class": 7,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([20.917397197130406, 40.34355535064254]),
            {
              "Class": 7,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([20.899630244615757, 40.378459773734754]),
            {
              "Class": 7,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([20.8745676835806, 40.39264666544564]),
            {
              "Class": 7,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([20.88486736619779, 40.37872131029137]),
            {
              "Class": 7,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([21.142366020712835, 39.83520210160483]),
            {
              "Class": 7,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([21.147172539267522, 39.83355436844153]),
            {
              "Class": 7,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([21.1432243275976, 39.838167921685354]),
            {
              "Class": 7,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([21.10176810506342, 39.85075475474511]),
            {
              "Class": 7,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([21.04760894063471, 39.84172673672086]),
            {
              "Class": 7,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([21.035249321494085, 39.84205624730238]),
            {
              "Class": 7,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([21.020486443076116, 39.838892880447084]),
            {
              "Class": 7,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([21.020829765830022, 39.84508767046063]),
            {
              "Class": 7,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([21.038510887656194, 39.84535126614938]),
            {
              "Class": 7,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([21.143653481039983, 39.83408164735452]),
            {
              "Class": 7,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([21.11404189351557, 39.85358812145709]),
            {
              "Class": 7,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([21.103398888144476, 39.854312917411065]),
            {
              "Class": 7,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([21.08503112081049, 39.84304476955952]),
            {
              "Class": 7,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([21.080482094321233, 39.8393542138563]),
            {
              "Class": 7,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([21.046063988242132, 39.840804098680465]),
            {
              "Class": 7,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([21.017739861044866, 39.845944352748916]),
            {
              "Class": 7,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([21.01765403035639, 39.834674831293306]),
            {
              "Class": 7,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([21.160819618735296, 39.82933599142048]),
            {
              "Class": 7,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([21.15721472981928, 39.83671798120304]),
            {
              "Class": 7,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([21.212060539755804, 39.863536924580806]),
            {
              "Class": 7,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([21.20467910054682, 39.86320751710242]),
            {
              "Class": 7,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([21.226222603354437, 39.86004512484637]),
            {
              "Class": 7,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([21.197297661337835, 39.867884955081536]),
            {
              "Class": 7,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([21.22914979082521, 39.862943989981055]),
            {
              "Class": 7,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([21.25635811907228, 39.8715739769878]),
            {
              "Class": 7,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([21.194302531303727, 39.870981111846724]),
            {
              "Class": 7,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([21.256272288383805, 39.819711849320605]),
            {
              "Class": 7,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([21.270262690605485, 39.82511735535169]),
            {
              "Class": 7,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([21.302250894705235, 39.852242887803726]),
            {
              "Class": 7,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([21.306284937063634, 39.856921073190826]),
            {
              "Class": 7,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([21.293710741201817, 39.85240761805741]),
            {
              "Class": 7,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([21.318730386892735, 39.85039788195332]),
            {
              "Class": 7,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([21.319245371023595, 39.858008211456834]),
            {
              "Class": 7,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([22.121968828539508, 39.783398699771034]),
            {
              "Class": 7,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([22.120339577641754, 39.78605372123895]),
            {
              "Class": 7,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([22.119631474461823, 39.784173958825335]),
            {
              "Class": 7,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([22.122470802531282, 39.78769155543535]),
            {
              "Class": 7,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([22.126569217906038, 39.78990098246925]),
            {
              "Class": 7,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([22.308840514282835, 37.95900873443148]),
            {
              "Class": 7,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([22.30094409094299, 37.958738040758426]),
            {
              "Class": 7,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([22.28652453527893, 37.959820809464325]),
            {
              "Class": 7,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([22.371325255493772, 38.019618970658286]),
            {
              "Class": 7,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([22.379221678833616, 38.02394635695651]),
            {
              "Class": 7,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([22.38540148840393, 38.01772565879472]),
            {
              "Class": 7,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([22.27828478918518, 37.91053867481643]),
            {
              "Class": 7,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([22.253222228150022, 37.98607306294175]),
            {
              "Class": 7,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([22.477411986450804, 37.941682328091176]),
            {
              "Class": 7,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([22.24257922277893, 37.605993437920915]),
            {
              "Class": 7,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([22.23227954016174, 37.60354549530663]),
            {
              "Class": 7,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([22.234682799439085, 37.65602260301456]),
            {
              "Class": 7,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([22.228502989868772, 37.666350516794736]),
            {
              "Class": 7,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([22.243609191040647, 37.66961166472981]),
            {
              "Class": 7,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([22.255625487427366, 37.60218549237922]),
            {
              "Class": 7,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([22.248415709595335, 37.60000943598106]),
            {
              "Class": 7,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([22.177004576782835, 37.57443600606841]),
            {
              "Class": 7,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([22.16361498938049, 37.57606861516353]),
            {
              "Class": 7,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([22.15468859777893, 37.584231123723214]),
            {
              "Class": 7,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([22.145762206177366, 37.59348088490814]),
            {
              "Class": 7,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([22.140269042114866, 37.5796058120767]),
            {
              "Class": 7,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([22.134089232544554, 37.604633479747186]),
            {
              "Class": 7,
              "system:index": "119"
            })]),
    MixedForest = 
    /* color: #73ff13 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([23.019709146566353, 39.418901292685554]),
            {
              "Class": 6,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([23.037561929769478, 39.43587363323392]),
            {
              "Class": 6,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([23.04648832137104, 39.45284183979664]),
            {
              "Class": 6,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([23.058161295003853, 39.46185451791775]),
            {
              "Class": 6,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([23.054041421956978, 39.45231164592131]),
            {
              "Class": 6,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([23.072580850667915, 39.41434562078101]),
            {
              "Class": 6,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([23.10416654402729, 39.372424719262405]),
            {
              "Class": 6,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([23.13712552840229, 39.3803863212879]),
            {
              "Class": 6,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([23.155664957113228, 39.372424719262405]),
            {
              "Class": 6,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([23.115839517660103, 39.39577617714553]),
            {
              "Class": 6,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([23.111719644613228, 39.41275414792657]),
            {
              "Class": 6,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([23.034128702230415, 39.48274458151969]),
            {
              "Class": 6,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([23.02176908308979, 39.49758199227356]),
            {
              "Class": 6,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([23.012842691488228, 39.49440281366173]),
            {
              "Class": 6,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([22.99979642683979, 39.48592429322582]),
            {
              "Class": 6,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([23.13987211043354, 39.35012740346536]),
            {
              "Class": 6,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([22.10948155935483, 39.07380865886351]),
            {
              "Class": 6,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([22.130080924589205, 39.10445333587857]),
            {
              "Class": 6,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([22.102615104276705, 39.09992409187337]),
            {
              "Class": 6,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([22.097121940214205, 39.10125625266984]),
            {
              "Class": 6,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([22.1077649455853, 39.120170219284994]),
            {
              "Class": 6,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([22.11394475515561, 39.11031427850787]),
            {
              "Class": 6,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([22.1187512737103, 39.098325465690685]),
            {
              "Class": 6,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([22.11943791921811, 39.08420269355874]),
            {
              "Class": 6,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([22.1077649455853, 39.08633461397259]),
            {
              "Class": 6,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([22.05729650076108, 39.067678125757084]),
            {
              "Class": 6,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([22.04631017263608, 39.07754002698118]),
            {
              "Class": 6,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([22.0363538127728, 39.0889994238799]),
            {
              "Class": 6,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([22.022964225370455, 39.08580163990977]),
            {
              "Class": 6,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([22.01060460622983, 39.07274251744614]),
            {
              "Class": 6,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([22.17986272390561, 39.139345395629185]),
            {
              "Class": 6,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([22.21556829031186, 39.13401948145056]),
            {
              "Class": 6,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([22.21659825857358, 39.12949213765696]),
            {
              "Class": 6,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([22.23857091482358, 39.12975846005458]),
            {
              "Class": 6,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([22.247153983671236, 39.126562524815235]),
            {
              "Class": 6,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([22.24234746511655, 39.12043657692972]),
            {
              "Class": 6,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([22.245437369901705, 39.10312123549566]),
            {
              "Class": 6,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([22.22758458669858, 39.108982288886864]),
            {
              "Class": 6,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([22.111541495878267, 39.05941439075686]),
            {
              "Class": 6,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([22.088195548612642, 39.05541546203211]),
            {
              "Class": 6,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([21.997215018827486, 39.13135637329135]),
            {
              "Class": 6,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([21.990691886503267, 39.13135637329135]),
            {
              "Class": 6,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([21.9484631877728, 39.16383941169741]),
            {
              "Class": 6,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([21.93919347341733, 39.16889689630035]),
            {
              "Class": 6,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([21.862747775303774, 39.09015430561294]),
            {
              "Class": 6,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([21.86755429385846, 39.08509116361291]),
            {
              "Class": 6,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([21.86206112979596, 39.08642360463979]),
            {
              "Class": 6,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([21.846954928624086, 39.066167784889366]),
            {
              "Class": 6,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([21.857941256749086, 39.060569756776395]),
            {
              "Class": 6,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([21.866524325596743, 39.05603769460428]),
            {
              "Class": 6,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([22.009346591221743, 39.16472687786937]),
            {
              "Class": 6,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([22.0618749725694, 39.174042897259824]),
            {
              "Class": 6,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([22.058785067784243, 39.19080862221005]),
            {
              "Class": 6,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([21.90807104701527, 39.189455271777824]),
            {
              "Class": 6,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([21.89262152308949, 39.2232413387149]),
            {
              "Class": 6,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([21.8878150045348, 39.219251704820785]),
            {
              "Class": 6,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([21.899487978167613, 39.21552784194748]),
            {
              "Class": 6,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([21.775548464007457, 39.19291443472381]),
            {
              "Class": 6,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([21.833226686663707, 39.23999532489797]),
            {
              "Class": 6,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([21.858975893206676, 39.252757581750586]),
            {
              "Class": 6,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([21.869275575823863, 39.249567235253814]),
            {
              "Class": 6,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([21.953389650530895, 39.22164551236676]),
            {
              "Class": 6,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([21.959569460101207, 39.21579383870294]),
            {
              "Class": 6,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([21.88192578125012, 39.85952232287419]),
            {
              "Class": 6,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([21.92518444824231, 39.843180850043716]),
            {
              "Class": 6,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([21.926557739257934, 39.8310540176756]),
            {
              "Class": 6,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([21.93960400390637, 39.81101369042392]),
            {
              "Class": 6,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([21.921751220703246, 39.79518825130796]),
            {
              "Class": 6,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([21.921751220703246, 39.775137466756526]),
            {
              "Class": 6,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([21.94235058593762, 39.76985997338344]),
            {
              "Class": 6,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([21.74734326171887, 39.951699588734776]),
            {
              "Class": 6,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([21.84622021484387, 39.96906768746784]),
            {
              "Class": 6,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([21.231672485351684, 39.82909745566408]),
            {
              "Class": 6,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([21.295530517578246, 39.94079728783415]),
            {
              "Class": 6,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([21.04147167968762, 39.86441848511118]),
            {
              "Class": 6,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([21.03872509765637, 39.86336438915698]),
            {
              "Class": 6,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([20.59652539062512, 40.03654531957626]),
            {
              "Class": 6,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([20.580732543945434, 40.04600761127733]),
            {
              "Class": 6,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([20.490781982421996, 39.98132244910513]),
            {
              "Class": 6,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([20.501081665039184, 39.976586981581455]),
            {
              "Class": 6,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([20.51069470214856, 39.96343118332708]),
            {
              "Class": 6,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([20.751020629882934, 40.114307389286566]),
            {
              "Class": 6,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([21.446733698626144, 40.40417304724143]),
            {
              "Class": 6,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([21.454973444719894, 40.40992442038957]),
            {
              "Class": 6,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([21.45806334950505, 40.423255258783826]),
            {
              "Class": 6,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([21.542520746965987, 40.43501556974206]),
            {
              "Class": 6,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([21.516428217669112, 40.43266367207046]),
            {
              "Class": 6,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([21.513681635637862, 40.428220974250856]),
            {
              "Class": 6,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([21.55797027089177, 40.455917711223236]),
            {
              "Class": 6,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([21.539087519426925, 40.46244829736355]),
            {
              "Class": 6,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([21.529817805071456, 40.466627539332556]),
            {
              "Class": 6,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([21.36296294667302, 40.43135702670791]),
            {
              "Class": 6,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([21.35540984608708, 40.43266367207046]),
            {
              "Class": 6,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([21.581316218157394, 40.294018009816334]),
            {
              "Class": 6,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([21.583032831926925, 40.427959629945015]),
            {
              "Class": 6,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([21.591272578020675, 40.43135702670791]),
            {
              "Class": 6,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([21.595049128313644, 40.41645947512273]),
            {
              "Class": 6,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([21.566553339739425, 40.44912522822752]),
            {
              "Class": 6,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([21.223336871761752, 40.35722870905751]),
            {
              "Class": 6,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([21.22436684002347, 40.35513572086942]),
            {
              "Class": 6,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([21.23363655437894, 40.35251939427329]),
            {
              "Class": 6,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([21.236211475033237, 40.35304266771344]),
            {
              "Class": 6,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([21.24462288250394, 40.35461246367114]),
            {
              "Class": 6,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([21.23741310467191, 40.359714048147644]),
            {
              "Class": 6,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([21.23363655437894, 40.36233009558112]),
            {
              "Class": 6,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([21.197759326595737, 40.348987192347195]),
            {
              "Class": 6,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([21.19415443767972, 40.34833306057754]),
            {
              "Class": 6,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([21.180078204769565, 40.36089128205528]),
            {
              "Class": 6,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([21.18368309368558, 40.36468445147468]),
            {
              "Class": 6,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([21.26384895672269, 40.35278103150091]),
            {
              "Class": 6,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([21.260415729183627, 40.35186529676314]),
            {
              "Class": 6,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([21.266767200130893, 40.352388575278816]),
            {
              "Class": 6,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([21.22986000408597, 40.346239796281175]),
            {
              "Class": 6,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([21.229001697201205, 40.34937966836374]),
            {
              "Class": 6,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([21.15020912517972, 40.37802424828192]),
            {
              "Class": 6,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([21.15501564373441, 40.3795934625367]),
            {
              "Class": 6,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([21.156560596126987, 40.37815501753246]),
            {
              "Class": 6,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([21.159307178158237, 40.37671654181673]),
            {
              "Class": 6,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([21.148149188656284, 40.376847313605396]),
            {
              "Class": 6,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([21.145574268001987, 40.37423182960776]),
            {
              "Class": 6,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([21.14351433147855, 40.37043919748063]),
            {
              "Class": 6,
              "system:index": "120"
            })]),
    Transitional = 
    /* color: #a6e64d */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([21.15837595559238, 39.828393457336915]),
            {
              "Class": 5,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([21.158848024379, 39.826580769021994]),
            {
              "Class": 5,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([21.16236708260654, 39.82753655609418]),
            {
              "Class": 5,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([21.137304521571384, 39.84493614740972]),
            {
              "Class": 5,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([21.151080347071872, 39.84249783393252]),
            {
              "Class": 5,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([21.171765542994724, 39.842860291414915]),
            {
              "Class": 5,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([21.179146982203708, 39.83238120327425]),
            {
              "Class": 5,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([21.17309591866611, 39.837950477497465]),
            {
              "Class": 5,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([21.157002664576755, 39.82555905089601]),
            {
              "Class": 5,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([21.154041505824313, 39.82196643749594]),
            {
              "Class": 5,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([21.1308215925138, 39.84035600066217]),
            {
              "Class": 5,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([21.122281439010383, 39.846649370687054]),
            {
              "Class": 5,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([21.12035024851966, 39.847538981844686]),
            {
              "Class": 5,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([21.133010275069953, 39.84500191217781]),
            {
              "Class": 5,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([21.127474195663215, 39.849515854256715]),
            {
              "Class": 5,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([21.139662153426887, 39.844705365447915]),
            {
              "Class": 5,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([21.151206381026984, 39.84200343624561]),
            {
              "Class": 5,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([21.124539462055726, 39.822766234473406]),
            {
              "Class": 5,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([21.16105324437477, 39.81820140817201]),
            {
              "Class": 5,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([21.16002327611305, 39.82067354547177]),
            {
              "Class": 5,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([21.161181990407485, 39.8252220457406]),
            {
              "Class": 5,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([21.15105396916725, 39.81131191636163]),
            {
              "Class": 5,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([21.165988508962172, 39.816223634302055]),
            {
              "Class": 5,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([21.166503493093032, 39.82324447392437]),
            {
              "Class": 5,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([21.19379765202858, 39.82067354547177]),
            {
              "Class": 5,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([21.177159415780423, 39.83921014199161]),
            {
              "Class": 5,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([21.17248164325845, 39.84272080735628]),
            {
              "Class": 5,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([21.200123341980305, 39.84690541367965]),
            {
              "Class": 5,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([21.21419957489046, 39.84581809955405]),
            {
              "Class": 5,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([21.292294534841954, 39.855735084532625]),
            {
              "Class": 5,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([21.312550577322423, 39.85300064369734]),
            {
              "Class": 5,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([21.314224275747716, 39.85510913781149]),
            {
              "Class": 5,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([21.315468820730626, 39.84710310530693]),
            {
              "Class": 5,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([21.312035593191563, 39.85468085518672]),
            {
              "Class": 5,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([21.291522058645665, 39.85540563960154]),
            {
              "Class": 5,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([21.31212142388004, 39.85240761805741]),
            {
              "Class": 5,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([21.30864528099674, 39.86644118391757]),
            {
              "Class": 5,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([21.315511736074864, 39.86100598836194]),
            {
              "Class": 5,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([21.5693558716532, 39.87707974456967]),
            {
              "Class": 5,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([21.582230474924685, 39.879714427246]),
            {
              "Class": 5,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([21.562575247263553, 39.88462125389929]),
            {
              "Class": 5,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([21.69311157094835, 39.80133335972442]),
            {
              "Class": 5,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([21.692746790522325, 39.806394147167886]),
            {
              "Class": 5,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([21.777786806550253, 39.77872797913908]),
            {
              "Class": 5,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([21.95606516158256, 39.75251920396664]),
            {
              "Class": 5,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([21.94361971175346, 39.752156270052396]),
            {
              "Class": 5,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([21.93340585982475, 39.75809494827939]),
            {
              "Class": 5,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([21.934178336021038, 39.76076718642867]),
            {
              "Class": 5,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([22.057198260233086, 39.78280894276323]),
            {
              "Class": 5,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([22.06385013859002, 39.778818320540346]),
            {
              "Class": 5,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([22.08105919162957, 39.77748043390191]),
            {
              "Class": 5,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([22.079943392679375, 39.779954035425924]),
            {
              "Class": 5,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([22.20773743693935, 39.810022104616536]),
            {
              "Class": 5,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([22.196815481830708, 39.813417554422884]),
            {
              "Class": 5,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([22.195678225208393, 39.8149998426706]),
            {
              "Class": 5,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([22.201128473926655, 39.81254398384688]),
            {
              "Class": 5,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([22.20320986812221, 39.814637238164394]),
            {
              "Class": 5,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([22.197566500354878, 39.814554827782565]),
            {
              "Class": 5,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([22.195699682880512, 39.81623598001945]),
            {
              "Class": 5,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([22.594687130951794, 38.52916197280844]),
            {
              "Class": 5,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([22.590738919281872, 38.5327876894983]),
            {
              "Class": 5,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([22.59949364950648, 38.52513318442748]),
            {
              "Class": 5,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([22.605330136322888, 38.55212175930652]),
            {
              "Class": 5,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([22.59777703573695, 38.55937069545896]),
            {
              "Class": 5,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([22.63125100424281, 38.56541091719344]),
            {
              "Class": 5,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([22.66420998861781, 38.535339010237074]),
            {
              "Class": 5,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([23.19053792744763, 38.55154286479219]),
            {
              "Class": 5,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([23.1957735994447, 38.55872474234895]),
            {
              "Class": 5,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([23.186332223712277, 38.55442912611665]),
            {
              "Class": 5,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([23.194571969806027, 38.56463079552831]),
            {
              "Class": 5,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([22.479744593787608, 37.516402517441826]),
            {
              "Class": 5,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([22.47665468900245, 37.526341404442306]),
            {
              "Class": 5,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([22.492104212928233, 37.53655121080499]),
            {
              "Class": 5,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([21.683679706366235, 40.77120485047257]),
            {
              "Class": 5,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([21.71097386530178, 40.75833329029125]),
            {
              "Class": 5,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([21.698185092718774, 40.76255907732631]),
            {
              "Class": 5,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([21.754584829848657, 40.86462649051683]),
            {
              "Class": 5,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([21.73956445936526, 40.85690173740971]),
            {
              "Class": 5,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([21.737418692153344, 40.855992883698164]),
            {
              "Class": 5,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([21.729178946059594, 40.853915456964096]),
            {
              "Class": 5,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([21.717797908912207, 40.84674541969193]),
            {
              "Class": 5,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([21.72921339047959, 40.85375723259915]),
            {
              "Class": 5,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([21.71445051206162, 40.84895292230148]),
            {
              "Class": 5,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([21.785179886661, 40.874710173199674]),
            {
              "Class": 5,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([21.788012299380725, 40.87581346778177]),
            {
              "Class": 5,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([21.790630419543433, 40.897760076465495]),
            {
              "Class": 5,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([21.786167223742652, 40.903274444346]),
            {
              "Class": 5,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([21.782905657580542, 40.90320957210229]),
            {
              "Class": 5,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([21.78580756432956, 40.90739152649507]),
            {
              "Class": 5,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([21.81447501428073, 40.91997475464446]),
            {
              "Class": 5,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([21.82022567040866, 40.91880733943009]),
            {
              "Class": 5,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([21.823830559324676, 40.90602928082361]),
            {
              "Class": 5,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([21.795517203140292, 40.91445363984315]),
            {
              "Class": 5,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([21.768308874893222, 40.921587991810014]),
            {
              "Class": 5,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([21.78058266334537, 40.91380502420976]),
            {
              "Class": 5,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([21.792942282485996, 40.92385785141025]),
            {
              "Class": 5,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([21.807190176773105, 40.92489547554864]),
            {
              "Class": 5,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([21.752958069927807, 40.91568599201494]),
            {
              "Class": 5,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([21.752013932354565, 40.91380502420976]),
            {
              "Class": 5,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([22.45157694921936, 37.539054020723356]),
            {
              "Class": 5,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([22.449431182007444, 37.53401752662819]),
            {
              "Class": 5,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([22.450203658203733, 37.530750429658305]),
            {
              "Class": 5,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([22.453379393677366, 37.52836808122787]),
            {
              "Class": 5,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([22.454924346069944, 37.526666357191765]),
            {
              "Class": 5,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([22.478098631958616, 37.51141717768608]),
            {
              "Class": 5,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([22.447886229614866, 37.54722058535626]),
            {
              "Class": 5,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([22.464709044556272, 37.55681515566086]),
            {
              "Class": 5,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([22.347979308228147, 37.54708448327631]),
            {
              "Class": 5,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([22.357249022583616, 37.531363021241575]),
            {
              "Class": 5,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([22.357506514649046, 37.54218464289866]),
            {
              "Class": 5,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([22.46324992285217, 37.510259746657745]),
            {
              "Class": 5,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([22.469687224487913, 37.50665117001494]),
            {
              "Class": 5,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([22.324118376831663, 37.557971864385905]),
            {
              "Class": 5,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([22.331757308106077, 37.56300674022551]),
            {
              "Class": 5,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([22.33939623938049, 37.566136356420024]),
            {
              "Class": 5,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([22.361454726318968, 37.56967402509965]),
            {
              "Class": 5,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([22.358793974976194, 37.566068322683435]),
            {
              "Class": 5,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([22.365231276611937, 37.566748657253456]),
            {
              "Class": 5,
              "system:index": "117"
            })]),
    SparseVeg = 
    /* color: #ffffa8 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([21.18141343386825, 39.84811262993988]),
            {
              "Class": 4,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([21.179546616393885, 39.85030364180392]),
            {
              "Class": 4,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([21.173624298889003, 39.85013890650103]),
            {
              "Class": 4,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([21.167251370269618, 39.85521257240398]),
            {
              "Class": 4,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([21.185104153472743, 39.84817852605345]),
            {
              "Class": 4,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([21.18218591006454, 39.8471077063703]),
            {
              "Class": 4,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([21.174568436462245, 39.85176976858334]),
            {
              "Class": 4,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([21.184353134948573, 39.850056538701345]),
            {
              "Class": 4,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([21.183344624358973, 39.85071547833157]),
            {
              "Class": 4,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([21.166264317352137, 39.85442189589326]),
            {
              "Class": 4,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([21.778688028779257, 39.772857048710364]),
            {
              "Class": 4,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([21.77838762136959, 39.77562766254911]),
            {
              "Class": 4,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([21.8039624318339, 39.76061335484304]),
            {
              "Class": 4,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([21.81220217792765, 39.75823803185819]),
            {
              "Class": 4,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([21.803318701670324, 39.760316443950344]),
            {
              "Class": 4,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([21.80191322414652, 39.762246341870416]),
            {
              "Class": 4,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([21.876100407433395, 39.74801021120549]),
            {
              "Class": 4,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([21.881378994774703, 39.74959400411464]),
            {
              "Class": 4,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([21.91987405855644, 39.75289345573329]),
            {
              "Class": 4,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([22.043036196634453, 39.78031682283987]),
            {
              "Class": 4,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([22.03634140293328, 39.783070646757494]),
            {
              "Class": 4,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([22.03110573093621, 39.77904705852367]),
            {
              "Class": 4,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([22.24712523606362, 39.81387973419526]),
            {
              "Class": 4,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([22.246309844523093, 39.815445529932774]),
            {
              "Class": 4,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([22.24343451645913, 39.81504996385072]),
            {
              "Class": 4,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([22.242275802164695, 39.821708356174696]),
            {
              "Class": 4,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([22.234722701578757, 39.81890663603941]),
            {
              "Class": 4,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([22.241503325968406, 39.80628099783256]),
            {
              "Class": 4,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([22.245837775736472, 39.82088433269839]),
            {
              "Class": 4,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([22.242318717508933, 39.8240485289659]),
            {
              "Class": 4,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([22.243091193705222, 39.82543281901435]),
            {
              "Class": 4,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([22.2411600032145, 39.82292789278527]),
            {
              "Class": 4,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([22.23167571213784, 39.82124690424534]),
            {
              "Class": 4,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([22.230731574564597, 39.82052175923839]),
            {
              "Class": 4,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([22.241717902689597, 39.817621102689884]),
            {
              "Class": 4,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([22.24218997147622, 39.81607183824005]),
            {
              "Class": 4,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([22.24236163285317, 39.81396214538652]),
            {
              "Class": 4,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([22.24188956406655, 39.81148976666698]),
            {
              "Class": 4,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([22.2316327967936, 39.819763644913]),
            {
              "Class": 4,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([22.273965769549765, 39.802988884479866]),
            {
              "Class": 4,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([22.275510721942343, 39.79939509121977]),
            {
              "Class": 4,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([22.276197367450155, 39.801834934638606]),
            {
              "Class": 4,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([22.2800597484316, 39.79721894162407]),
            {
              "Class": 4,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([22.277742319842734, 39.79461406596297]),
            {
              "Class": 4,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([22.276445524376044, 39.793076292333424]),
            {
              "Class": 4,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([22.27829088417829, 39.790306380982365]),
            {
              "Class": 4,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([22.281123296898016, 39.79314224124426]),
            {
              "Class": 4,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([22.28125204293073, 39.78822887427432]),
            {
              "Class": 4,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([22.282367841880927, 39.79080101618954]),
            {
              "Class": 4,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([22.28429903237165, 39.79324116449196]),
            {
              "Class": 4,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([22.282625333946356, 39.78344707284998]),
            {
              "Class": 4,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([22.285371915977606, 39.78107777804513]),
            {
              "Class": 4,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([22.28223909584821, 39.781011817568775]),
            {
              "Class": 4,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([22.28507150856794, 39.7846065713559]),
            {
              "Class": 4,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([22.280393736045966, 39.79074030471517]),
            {
              "Class": 4,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([22.283226148765692, 39.79711323204554]),
            {
              "Class": 4,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([22.281981603782782, 39.79869589555862]),
            {
              "Class": 4,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([22.27206008536131, 39.803584849529074]),
            {
              "Class": 4,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([22.273991275852033, 39.798177649917584]),
            {
              "Class": 4,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([22.279656101291486, 39.796496056054]),
            {
              "Class": 4,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([22.27785365683348, 39.79336356570158]),
            {
              "Class": 4,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([22.27759616476805, 39.7874938839189]),
            {
              "Class": 4,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([22.251718212192365, 39.80061753652972]),
            {
              "Class": 4,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([21.77278955088202, 38.45190598246502]),
            {
              "Class": 4,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([21.774849487405458, 38.451032161074345]),
            {
              "Class": 4,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([21.77957017527167, 38.45116659582322]),
            {
              "Class": 4,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([22.94866914773396, 38.49625360093946]),
            {
              "Class": 4,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([22.941974354032787, 38.49894056244606]),
            {
              "Class": 4,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([22.919830036405834, 38.507269506181856]),
            {
              "Class": 4,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([22.904294681791576, 38.50800831758142]),
            {
              "Class": 4,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([22.897599888090404, 38.50841130242266]),
            {
              "Class": 4,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([22.88695688271931, 38.508612793997564]),
            {
              "Class": 4,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([22.912019443754467, 38.50807548187823]),
            {
              "Class": 4,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([22.84979219460896, 38.53117628241464]),
            {
              "Class": 4,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([23.523903810270372, 37.98132920804921]),
            {
              "Class": 4,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([23.516522371061388, 37.981904253929585]),
            {
              "Class": 4,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([23.52699371505553, 37.98224251410721]),
            {
              "Class": 4,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([23.524847947843615, 37.98021292965321]),
            {
              "Class": 4,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([23.50845428634459, 37.99167934443596]),
            {
              "Class": 4,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([23.512531244047228, 37.97984083308127]),
            {
              "Class": 4,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([23.516522371061388, 37.97703313448742]),
            {
              "Class": 4,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([23.51995559860045, 37.978724532045725]),
            {
              "Class": 4,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([23.518067323453966, 37.982648424262194]),
            {
              "Class": 4,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([23.525105439909044, 37.97584913300413]),
            {
              "Class": 4,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([22.5419721828369, 37.55900732589044]),
            {
              "Class": 4,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([22.528067611303698, 37.5708453828964]),
            {
              "Class": 4,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([22.51124479636229, 37.57302229202522]),
            {
              "Class": 4,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([22.511073134985338, 37.56771596454708]),
            {
              "Class": 4,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([22.555533431616198, 37.562001035252656]),
            {
              "Class": 4,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([21.695367940142116, 40.80811575445409]),
            {
              "Class": 4,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([21.681978352739772, 40.81019461667735]),
            {
              "Class": 4,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([21.682493336870632, 40.80603682710298]),
            {
              "Class": 4,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([21.676656850054226, 40.802788372735705]),
            {
              "Class": 4,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([21.659662373735866, 40.81818463705525]),
            {
              "Class": 4,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([21.65631497688528, 40.815781236183604]),
            {
              "Class": 4,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([21.651422627642116, 40.81883418991135]),
            {
              "Class": 4,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([21.686699040605983, 40.82558916256105]),
            {
              "Class": 4,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([21.6957970935845, 40.82948594922128]),
            {
              "Class": 4,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([21.698629506304226, 40.831174485660185]),
            {
              "Class": 4,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([21.698972829058132, 40.79551125798104]),
            {
              "Class": 4,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([21.706354268267116, 40.79953975936933]),
            {
              "Class": 4,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([21.679746754839382, 40.79960473319481]),
            {
              "Class": 4,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([21.675626881792507, 40.8018787770201]),
            {
              "Class": 4,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([21.647388585283718, 40.80597185957384]),
            {
              "Class": 4,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([21.626531727983913, 40.81116906092485]),
            {
              "Class": 4,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([21.685669072344265, 40.82091271630829]),
            {
              "Class": 4,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([21.69373715706106, 40.816560727088024]),
            {
              "Class": 4,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([21.697015448037103, 40.79067573123751]),
            {
              "Class": 4,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([21.674956961098626, 40.78710159573855]),
            {
              "Class": 4,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([21.67684523624511, 40.792300274687044]),
            {
              "Class": 4,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([21.697702093544915, 40.78944105163288]),
            {
              "Class": 4,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([22.500414610962522, 37.54674422698917]),
            {
              "Class": 4,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([22.522387267212522, 37.530818495638236]),
            {
              "Class": 4,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([22.495779753784788, 37.573483634233455]),
            {
              "Class": 4,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([22.50376200781311, 37.58355094885622]),
            {
              "Class": 4,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([22.548479796509397, 37.560013071274426]),
            {
              "Class": 4,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([22.49071574316467, 37.53816925585045]),
            {
              "Class": 4,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([22.5239322196051, 37.57484416169782]),
            {
              "Class": 4,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([22.52719378576721, 37.58042206442439]),
            {
              "Class": 4,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([22.53097033606018, 37.575456390947394]),
            {
              "Class": 4,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([22.533373595337522, 37.57355166119699]),
            {
              "Class": 4,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([22.45981669531311, 37.59157661628152]),
            {
              "Class": 4,
              "system:index": "121"
            })]),
    Waterbodies = 
    /* color: #0b45ff */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([21.443070961099306, 38.344144626480045]),
            {
              "Class": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([21.43294293985907, 38.36070268842809]),
            {
              "Class": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([21.45268399820868, 38.3553183682725]),
            {
              "Class": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([21.453027320962587, 38.34952977750356]),
            {
              "Class": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([21.758266574652367, 40.710677167446555]),
            {
              "Class": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([21.76822293451565, 40.73019253497373]),
            {
              "Class": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([21.776119357855492, 40.751782871830834]),
            {
              "Class": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([21.77989590814846, 40.77076617065964]),
            {
              "Class": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([21.79019559076565, 40.79338302081294]),
            {
              "Class": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([21.805301791937524, 40.79156355914943]),
            {
              "Class": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([21.801525241644555, 40.7731062019453]),
            {
              "Class": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([21.801525241644555, 40.743979944349654]),
            {
              "Class": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([21.693378574164086, 40.719524843017126]),
            {
              "Class": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([21.710888034613305, 40.72655010069993]),
            {
              "Class": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([21.69475186517971, 40.738257215641646]),
            {
              "Class": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([21.70024502924221, 40.73071286645185]),
            {
              "Class": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([21.687885410101586, 40.73305430775119]),
            {
              "Class": 3,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([21.701618320257836, 40.72759081655072]),
            {
              "Class": 3,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([21.69681180170315, 40.71718292567598]),
            {
              "Class": 3,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([23.377836070486353, 40.68141412270454]),
            {
              "Class": 3,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([23.402555308767603, 40.67724827449172]),
            {
              "Class": 3,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([23.42384131950979, 40.67724827449172]),
            {
              "Class": 3,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([23.42109473747854, 40.66579084958092]),
            {
              "Class": 3,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([23.449933848806666, 40.67672752516034]),
            {
              "Class": 3,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([23.495939097830103, 40.68089340591509]),
            {
              "Class": 3,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([23.513105235525416, 40.67151980812505]),
            {
              "Class": 3,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([23.52821143669729, 40.66214489243842]),
            {
              "Class": 3,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([23.55842383904104, 40.65276865892098]),
            {
              "Class": 3,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([23.548124156423853, 40.664228320924394]),
            {
              "Class": 3,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([23.55018409294729, 40.64651710448029]),
            {
              "Class": 3,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([23.167722545095728, 40.685579710578395]),
            {
              "Class": 3,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([23.183515391775416, 40.678810498079635]),
            {
              "Class": 3,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([23.175962291189478, 40.67099901404963]),
            {
              "Class": 3,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([23.152616343923853, 40.683496949184175]),
            {
              "Class": 3,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([23.13545020622854, 40.69078632931038]),
            {
              "Class": 3,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([23.130643687673853, 40.68505902633165]),
            {
              "Class": 3,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([23.164975963064478, 40.670478215906634]),
            {
              "Class": 3,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([23.381955943533228, 40.67099901404963]),
            {
              "Class": 3,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([25.094746720958554, 41.05897559885448]),
            {
              "Class": 3,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([25.100926530528866, 41.047066179315365]),
            {
              "Class": 3,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([25.10161317603668, 41.03567254332548]),
            {
              "Class": 3,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([25.12427247779449, 41.02738502376122]),
            {
              "Class": 3,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([25.14899171607574, 41.02842102075707]),
            {
              "Class": 3,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([25.15929139869293, 41.01909646100695]),
            {
              "Class": 3,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([25.21422303931793, 40.95275040921213]),
            {
              "Class": 3,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([25.24512208716949, 40.94289647802449]),
            {
              "Class": 3,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([25.15997804420074, 41.00821613934032]),
            {
              "Class": 3,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([25.13731874244293, 41.020132588399264]),
            {
              "Class": 3,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([25.100926530528866, 41.03049296584892]),
            {
              "Class": 3,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([21.114472724188108, 40.770957202778604]),
            {
              "Class": 3,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([21.100053168524045, 40.76471673439255]),
            {
              "Class": 3,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([21.075333930242795, 40.76939714062239]),
            {
              "Class": 3,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([21.092500067938108, 40.7537945046206]),
            {
              "Class": 3,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([21.091126776922483, 40.73922874003916]),
            {
              "Class": 3,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([21.08494696735217, 40.7262208973489]),
            {
              "Class": 3,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([21.283387519109983, 40.54123517684107]),
            {
              "Class": 3,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([21.30192694782092, 40.537060580639725]),
            {
              "Class": 3,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([21.300553656805295, 40.528188699985286]),
            {
              "Class": 3,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([21.306733466375608, 40.506264900303925]),
            {
              "Class": 3,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([21.286134101141233, 40.496866791575584]),
            {
              "Class": 3,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([21.070688674294654, 40.82932680638014]),
            {
              "Class": 3,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([21.026056716286842, 40.84750882660807]),
            {
              "Class": 3,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([21.005457351052467, 40.840236616973506]),
            {
              "Class": 3,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([21.00339741452903, 40.82465062368705]),
            {
              "Class": 3,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([21.111887404763404, 40.76227001597165]),
            {
              "Class": 3,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([21.076868483864967, 39.82903238314227]),
            {
              "Class": 3,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([20.884607741677467, 39.65374059937312]),
            {
              "Class": 3,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([20.901087233864967, 39.6584983639113]),
            {
              "Class": 3,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([20.895594069802467, 39.64845381024441]),
            {
              "Class": 3,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([20.911386916482154, 39.65902698420002]),
            {
              "Class": 3,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([20.87705464109153, 39.65638384232518]),
            {
              "Class": 3,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([20.889414260232154, 39.670127076271584]),
            {
              "Class": 3,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([20.89078755124778, 39.64739640390369]),
            {
              "Class": 3,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([20.859201857888404, 39.68122538517999]),
            {
              "Class": 3,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([22.739923903786842, 39.526746105596445]),
            {
              "Class": 3,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([22.732370803200904, 39.516682432815934]),
            {
              "Class": 3,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([22.82163471921653, 39.49814027113644]),
            {
              "Class": 3,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([22.785242507302467, 39.456269777537294]),
            {
              "Class": 3,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([22.773569533669654, 39.49919995651913]),
            {
              "Class": 3,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([22.693918654763404, 39.57915953993963]),
            {
              "Class": 3,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([22.71726460202903, 39.53001838259394]),
            {
              "Class": 3,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([22.734430739724342, 39.547493103479695]),
            {
              "Class": 3,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([22.76670307859153, 39.53584377838314]),
            {
              "Class": 3,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([22.757090041482154, 39.518366124629694]),
            {
              "Class": 3,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([22.742670485818092, 39.508831004844104]),
            {
              "Class": 3,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([22.691172072732154, 39.572373746692485]),
            {
              "Class": 3,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([22.674692580544654, 39.59089608674178]),
            {
              "Class": 3,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([22.797602126443092, 39.50141389580266]),
            {
              "Class": 3,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([22.807215163552467, 39.49187644955125]),
            {
              "Class": 3,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([22.817514846169654, 39.46643686257222]),
            {
              "Class": 3,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([22.83262104734153, 39.48180772559448]),
            {
              "Class": 3,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([22.842920729958717, 39.49399599513646]),
            {
              "Class": 3,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([22.842234084450904, 39.4786278256735]),
            {
              "Class": 3,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([22.86832661374778, 39.47968780846708]),
            {
              "Class": 3,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([22.877939650857154, 39.48763716452702]),
            {
              "Class": 3,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([22.851160476052467, 39.476507811627116]),
            {
              "Class": 3,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([22.82987446531028, 39.47014738182285]),
            {
              "Class": 3,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([21.75520363490913, 39.29897944804195]),
            {
              "Class": 3,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([21.74421730678413, 39.31013715334167]),
            {
              "Class": 3,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([21.751770407370067, 39.294197029844526]),
            {
              "Class": 3,
              "system:index": "99"
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
    Crops = 
    /* color: #f7ff39 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([23.081746940836233, 38.46514099512135]),
            {
              "Class": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([23.134446983560842, 38.44685911124758]),
            {
              "Class": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([23.14474666617803, 38.44457355003252]),
            {
              "Class": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([23.150068168863577, 38.444707996813484]),
            {
              "Class": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([23.10474956534795, 38.43126207903129]),
            {
              "Class": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([23.138395195230764, 38.44712799604369]),
            {
              "Class": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([23.081231956705373, 38.464603358781055]),
            {
              "Class": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([23.034540062174123, 38.46621625577833]),
            {
              "Class": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([23.082433586344045, 38.41606517823354]),
            {
              "Class": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([23.08209026359014, 38.424269212094664]),
            {
              "Class": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([23.079687004312795, 38.43327912635015]),
            {
              "Class": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([23.159166221842092, 38.43327912635015]),
            {
              "Class": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([23.155389671549123, 38.439867754916726]),
            {
              "Class": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([23.160024528726858, 38.45331206984647]),
            {
              "Class": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([23.15676296256475, 38.46527540358022]),
            {
              "Class": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([23.13152874015264, 38.469038738727015]),
            {
              "Class": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([23.115564232096, 38.47172671502076]),
            {
              "Class": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([23.104234581217092, 38.473070665591905]),
            {
              "Class": 0,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([23.097368126138967, 38.47186111120515]),
            {
              "Class": 0,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([23.096853142008108, 38.476833593919956]),
            {
              "Class": 0,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([23.133073692545217, 38.446993553770845]),
            {
              "Class": 0,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([23.086896782144827, 38.3977708633326]),
            {
              "Class": 0,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([23.07505214713506, 38.3977708633326]),
            {
              "Class": 0,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([22.916209832484235, 38.499227255498425]),
            {
              "Class": 0,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([22.914664880091657, 38.49788379261997]),
            {
              "Class": 0,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([22.916209832484235, 38.49734640045294]),
            {
              "Class": 0,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([22.91208995943736, 38.49801814003534]),
            {
              "Class": 0,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([22.89784206515025, 38.496943353696814]),
            {
              "Class": 0,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([22.895438805872907, 38.49788379261997]),
            {
              "Class": 0,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([22.906940118128766, 38.499227255498425]),
            {
              "Class": 0,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([22.932174340540875, 38.494793732913024]),
            {
              "Class": 0,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([22.931659356410016, 38.49156918147262]),
            {
              "Class": 0,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([22.9225613034315, 38.493181475232355]),
            {
              "Class": 0,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([22.917754784876813, 38.49627160409212]),
            {
              "Class": 0,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([22.91758312349986, 38.49465937948432]),
            {
              "Class": 0,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([22.922389642054547, 38.49049429892244]),
            {
              "Class": 0,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([22.92410625582408, 38.48955376353751]),
            {
              "Class": 0,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([22.916381493861188, 38.4894194003375]),
            {
              "Class": 0,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([22.917068139369, 38.487269555063776]),
            {
              "Class": 0,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([23.17520900876916, 38.517096045090966]),
            {
              "Class": 0,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([23.175123178080682, 38.51676026505235]),
            {
              "Class": 0,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([23.177869760111932, 38.49923037239785]),
            {
              "Class": 0,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([23.17666813047326, 38.50090966568806]),
            {
              "Class": 0,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([23.1871394744674, 38.515954386569504]),
            {
              "Class": 0,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([23.18593784482873, 38.51763328989497]),
            {
              "Class": 0,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([23.1871394744674, 38.51481270994254]),
            {
              "Class": 0,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([23.187826119975213, 38.514006809658014]),
            {
              "Class": 0,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([23.187997781352166, 38.513603856132775]),
            {
              "Class": 0,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([23.171346627787713, 38.503462116507556]),
            {
              "Class": 0,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([23.17040249021447, 38.50332777924587]),
            {
              "Class": 0,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([23.17692562253869, 38.49902885457211]),
            {
              "Class": 0,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([23.17941471250451, 38.497752561917416]),
            {
              "Class": 0,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([23.181817971781854, 38.49815560414606]),
            {
              "Class": 0,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([23.18387790830529, 38.498491470947336]),
            {
              "Class": 0,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([23.169973336772088, 38.52038660658363]),
            {
              "Class": 0,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([22.29331397300224, 40.65705778264925]),
            {
              "Class": 0,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([22.292627327494426, 40.656667102771166]),
            {
              "Class": 0,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([22.279237740092082, 40.63986570378532]),
            {
              "Class": 0,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([22.2802677083538, 40.645336391118]),
            {
              "Class": 0,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([22.278722755961223, 40.648853024770474]),
            {
              "Class": 0,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([22.27528952842216, 40.64833205369993]),
            {
              "Class": 0,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([22.27528952842216, 40.647680834142456]),
            {
              "Class": 0,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([22.27752112632255, 40.636088062756485]),
            {
              "Class": 0,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([22.277692787699504, 40.69142865220496]),
            {
              "Class": 0,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([22.394250862650676, 40.661094674089725]),
            {
              "Class": 0,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([22.36918830161552, 40.683228122546495]),
            {
              "Class": 0,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([22.261728279642863, 40.636869661197274]),
            {
              "Class": 0,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([22.260698311381145, 40.639474923247036]),
            {
              "Class": 0,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([22.16238960418082, 40.66416970396765]),
            {
              "Class": 0,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([22.163247911065586, 40.66410459775531]),
            {
              "Class": 0,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([22.16264709624625, 40.66397438513999]),
            {
              "Class": 0,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([22.164192048638828, 40.66410459775531]),
            {
              "Class": 0,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([22.120246736138828, 40.68181114510876]),
            {
              "Class": 0,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([22.12273582610465, 40.6841543063651]),
            {
              "Class": 0,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([22.130803910821445, 40.68103007305148]),
            {
              "Class": 0,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([22.126769868463047, 40.68291764818918]),
            {
              "Class": 0,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([22.12668403777457, 40.682527119787686]),
            {
              "Class": 0,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([22.12642654570914, 40.68239694314537]),
            {
              "Class": 0,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([22.351862142920638, 40.70654035948214]),
            {
              "Class": 0,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([22.352377127051497, 40.70549931450414]),
            {
              "Class": 0,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([22.355982015967513, 40.69651962611129]),
            {
              "Class": 0,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([22.352205465674544, 40.72982948509163]),
            {
              "Class": 0,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([22.529016683936263, 40.738649362301324]),
            {
              "Class": 0,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([22.52884502255931, 40.738129092889615]),
            {
              "Class": 0,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([22.452627371192122, 40.732796096817786]),
            {
              "Class": 0,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([22.415827955343367, 40.76873898591965]),
            {
              "Class": 0,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([22.447585310079695, 40.77445909141541]),
            {
              "Class": 0,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([22.441062177755477, 40.77718896816497]),
            {
              "Class": 0,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([22.304076398946883, 40.81786383436805]),
            {
              "Class": 0,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([22.43718504893984, 40.710134568863154]),
            {
              "Class": 0,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([22.44937300670351, 40.69972394864452]),
            {
              "Class": 0,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([22.452291250111713, 40.70024451830399]),
            {
              "Class": 0,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([22.38843321788515, 40.72275526303903]),
            {
              "Class": 0,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([22.38070845592226, 40.73823511451206]),
            {
              "Class": 0,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([22.38397002208437, 40.73940571310064]),
            {
              "Class": 0,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([22.351697683217182, 40.69881294195137]),
            {
              "Class": 0,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([22.40714430797304, 40.6937371051622]),
            {
              "Class": 0,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([22.40971922862734, 40.696730594154545]),
            {
              "Class": 0,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([23.220299184360407, 40.671483418226096]),
            {
              "Class": 0,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([23.220814168491266, 40.670572025427376]),
            {
              "Class": 0,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([23.217037618198297, 40.66588466569564]),
            {
              "Class": 0,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([23.3517917991065, 40.6824191601498]),
            {
              "Class": 0,
              "system:index": "101"
            })]),
    DW = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1"),
    Buildup = 
    /* color: #d604c2 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([25.649385311232365, 40.87130955660581]),
            {
              "Class": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([25.533342220412052, 41.16298954124934]),
            {
              "Class": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([25.925073482619084, 40.945776909489275]),
            {
              "Class": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([25.964555599318302, 40.94370230077384]),
            {
              "Class": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([25.959749080763615, 40.939293540861264]),
            {
              "Class": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([25.98481164179877, 40.96729712906072]),
            {
              "Class": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([26.007127620802677, 41.00876209056203]),
            {
              "Class": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([26.024980404005802, 41.01187091149622]),
            {
              "Class": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([26.082315303908146, 40.950185236613365]),
            {
              "Class": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([26.02601037226752, 40.896746862022816]),
            {
              "Class": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([25.858812191115177, 40.97714741835992]),
            {
              "Class": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([26.029100277052677, 41.03103873245312]),
            {
              "Class": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([26.021890499220646, 41.02223258852146]),
            {
              "Class": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([26.059656002150334, 40.98673707636633]),
            {
              "Class": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([26.076822139845646, 40.9439616304274]),
            {
              "Class": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([26.065149166212834, 40.86663633569044]),
            {
              "Class": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([25.791177608595646, 40.88325073383686]),
            {
              "Class": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([25.76886162959174, 40.89441119067642]),
            {
              "Class": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([25.721483089552677, 40.88402943144253]),
            {
              "Class": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([25.729036190138615, 40.9838862426069]),
            {
              "Class": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([25.76062188349799, 40.989328636473964]),
            {
              "Class": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([25.766801693068302, 40.97144479854151]),
            {
              "Class": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([25.87494836054877, 40.93851549385697]),
            {
              "Class": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([25.831689693556584, 40.927362479719754]),
            {
              "Class": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([25.96764550410346, 40.937218728483955]),
            {
              "Class": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([26.123857357130802, 41.02818981475748]),
            {
              "Class": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([24.635325372015128, 41.07067520275564]),
            {
              "Class": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([24.634123742376456, 41.06938103533114]),
            {
              "Class": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([24.63824361542333, 41.07093403318369]),
            {
              "Class": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([24.644423424993644, 41.07934546739411]),
            {
              "Class": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([24.678069054876456, 41.06252152270185]),
            {
              "Class": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([24.696093499456534, 41.04504594676318]),
            {
              "Class": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([24.54966634491552, 40.98987036219001]),
            {
              "Class": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([24.54812139252294, 40.994275744418545]),
            {
              "Class": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([24.597388207708487, 41.07274581764919]),
            {
              "Class": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([24.629832207952628, 41.0939658602149]),
            {
              "Class": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([24.6365270016538, 41.0701575388427]),
            {
              "Class": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([24.64047521332372, 41.0775338648158]),
            {
              "Class": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([23.96535137783471, 41.311545579531774]),
            {
              "Class": 2,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([24.030239378322992, 41.303550796809475]),
            {
              "Class": 2,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([24.017364775051508, 41.30806410110159]),
            {
              "Class": 2,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([24.02028301845971, 41.31451113674039]),
            {
              "Class": 2,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([24.00758007656518, 41.272206956545176]),
            {
              "Class": 2,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([23.95865658413354, 41.30883777904141]),
            {
              "Class": 2,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([23.981659208645258, 41.30870883335567]),
            {
              "Class": 2,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([24.07675961147729, 41.25220610703561]),
            {
              "Class": 2,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([24.07349804531518, 41.2476889384293]),
            {
              "Class": 2,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([24.07572964321557, 41.251044579223596]),
            {
              "Class": 2,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([24.096843992580805, 41.2550453103025]),
            {
              "Class": 2,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([23.891022001614008, 41.289751043502214]),
            {
              "Class": 2,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([23.985779081692133, 41.27943156352668]),
            {
              "Class": 2,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([23.94166210781518, 41.303163927619885]),
            {
              "Class": 2,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([23.944237028469477, 41.32302024753138]),
            {
              "Class": 2,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([21.84768948742527, 40.41026094923905]),
            {
              "Class": 2,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([21.843397953001443, 40.407254625977906]),
            {
              "Class": 2,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([21.83944974133152, 40.404771040256115]),
            {
              "Class": 2,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([21.85266766735691, 40.41326713820808]),
            {
              "Class": 2,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([21.773703433958474, 40.486942091096985]),
            {
              "Class": 2,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([21.77233014294285, 40.48472257282601]),
            {
              "Class": 2,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([21.722720005003396, 40.4595193660516]),
            {
              "Class": 2,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([20.950027884393112, 40.091883113989134]),
            {
              "Class": 2,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([20.936294974236862, 40.087286649455585]),
            {
              "Class": 2,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([20.951916159539596, 40.092014436986275]),
            {
              "Class": 2,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([20.928741873650925, 40.08452862174642]),
            {
              "Class": 2,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([20.949169577508346, 40.0855793121447]),
            {
              "Class": 2,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([20.950886191277878, 40.081639139536954]),
            {
              "Class": 2,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([23.606680619693655, 38.66031748566092]),
            {
              "Class": 2,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([23.60384820697393, 38.662797257874516]),
            {
              "Class": 2,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([23.63079904315557, 38.65254250809171]),
            {
              "Class": 2,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([23.628653275943655, 38.65535768364173]),
            {
              "Class": 2,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([23.62479089496221, 38.64966018993747]),
            {
              "Class": 2,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([23.57981561420049, 38.6593121481402]),
            {
              "Class": 2,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([23.577755677677054, 38.66273023813288]),
            {
              "Class": 2,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([23.579043138004202, 38.663467451841335]),
            {
              "Class": 2,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([23.576554048038382, 38.660652595031806]),
            {
              "Class": 2,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([23.57638238666143, 38.65763655424565]),
            {
              "Class": 2,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([23.579214799381155, 38.6573684555848]),
            {
              "Class": 2,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([23.662556397891898, 38.66326639430988]),
            {
              "Class": 2,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([23.661612260318655, 38.66554501327836]),
            {
              "Class": 2,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([23.661183106876273, 38.66748848392448]),
            {
              "Class": 2,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([23.65877984759893, 38.66869474951739]),
            {
              "Class": 2,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([23.628653275943655, 38.653480912234336]),
            {
              "Class": 2,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([23.60453485248174, 38.661925996340756]),
            {
              "Class": 2,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([23.659380662418265, 38.665075891770975]),
            {
              "Class": 2,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([23.640154588199515, 38.66943190181959]),
            {
              "Class": 2,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([23.57955812213506, 38.66239513848379]),
            {
              "Class": 2,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([24.02862452087563, 35.35652413143691]),
            {
              "Class": 2,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([24.033087716676413, 35.35554411586911]),
            {
              "Class": 2,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([24.059523568727194, 35.306808352140905]),
            {
              "Class": 2,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([24.06639002380532, 35.31395249989169]),
            {
              "Class": 2,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([24.08836268005532, 35.306808352140905]),
            {
              "Class": 2,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([24.09007929382485, 35.30316599478187]),
            {
              "Class": 2,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([24.063471780397116, 35.29097691442159]),
            {
              "Class": 2,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([24.09231089172524, 35.30274571222729]),
            {
              "Class": 2,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([24.08407114563149, 35.30092446259792]),
            {
              "Class": 2,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([24.02089975891274, 35.281168275690355]),
            {
              "Class": 2,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([24.04287241516274, 35.34994379875941]),
            {
              "Class": 2,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([24.035319314576803, 35.35274400585624]),
            {
              "Class": 2,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([24.040469155885397, 35.35036383601292]),
            {
              "Class": 2,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([24.056262002565084, 35.31745430264138]),
            {
              "Class": 2,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([24.070509896852194, 35.32291681215736]),
            {
              "Class": 2,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([24.102610574342428, 35.29293849956706]),
            {
              "Class": 2,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([25.41363331888759, 36.35219393264893]),
            {
              "Class": 2,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([25.41642281626308, 36.35406034095783]),
            {
              "Class": 2,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([25.426035853372454, 36.34659443924313]),
            {
              "Class": 2,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([25.426765414224505, 36.34597224845069]),
            {
              "Class": 2,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([25.419212313638567, 36.34794250223796]),
            {
              "Class": 2,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([25.415993662820696, 36.349014022841345]),
            {
              "Class": 2,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([25.40964219187343, 36.35094963558341]),
            {
              "Class": 2,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([25.425778361307025, 36.351986551185746]),
            {
              "Class": 2,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([25.373850794778704, 36.35634144589971]),
            {
              "Class": 2,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([25.371790858255267, 36.35654881576153]),
            {
              "Class": 2,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([25.369344683633685, 36.356203199018275]),
            {
              "Class": 2,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([25.43018318618739, 36.346041878145265]),
            {
              "Class": 2,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([23.48004107988024, 38.166498185597156]),
            {
              "Class": 2,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([23.480727725388054, 38.14976081236831]),
            {
              "Class": 2,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([23.49652057206774, 38.142200739441755]),
            {
              "Class": 2,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([23.589561038376335, 38.130048980937545]),
            {
              "Class": 2,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([23.46905475175524, 38.11249286886459]),
            {
              "Class": 2,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([23.47283130204821, 38.108981139921774]),
            {
              "Class": 2,
              "system:index": "119"
            })]);


//----------------------- Land Cover Classification ------------------------//


//------------------------Constants----------------------------------//
//visualization parameters
var Viz_CI = {min:0, max:6000,bands:['B8', 'B4', 'B3']};
  
var classPalette_RFwDW = [
  '#ffff00',   //Crops (0)
  '#c4281b',   //Buildup (1)
  '#7a87c6',   //Baren (2)
  '#e6a600',   //Soil(3)
  '#419bdf',   //Waterbodies(4)
  '#ffffa8',   //Sparse Vegetation (5)
  '#a6e64d',   //Transitional Woodland (6)
  '#4dff00',   //MixedForest (7)
  '#00a600'  //Coniferous (8)
  
  ];
  
  
// Define list pairs of DW LULC label and color.
var CLASS_NAMES = [
    'water', 'trees', 'grass', 'flooded_vegetation', 'crops',
    'shrub_and_scrub', 'built', 'bare', 'snow_and_ice'];

var VIS_PALETTE = [
    '419bdf', '397d49', '88b053', '7a87c6', 'e49635', 'dfc35a', 'c4281b',
    'a59b8f', 'b39fe1'];
    
//DW visualization
var dwClassInfo = {
  0: {name: 'water', color: '#419BDF'},
  1: {name: 'trees', color: '#397D49'},
  2: {name: 'grass', color: '#88B053'},  
  3: {name: 'flooded_vegetation', color: '#7A87C6'},
  4: {name: 'crops', color: '#E49635'},
  5: {name: 'shrub_and_scrub', color: '#DFC35A'},
  6: {name: 'built', color: '#C4281B'},
  7: {name: 'bare', color: '#A59B8F'},
  8: {name: 'snow_and_ice', color: '#B39FE1'},
};

// Extract a list of property values from a dictionary.
function getClassProperty(dict, prop) {
  return ee.Dictionary(dict).values().map(
    function (v) {return ee.Dictionary(v).get(prop)});
}

var probabilityBands = getClassProperty(dwClassInfo, 'name');
var dwClassPalette = getClassProperty(dwClassInfo, 'color');
var dwVisParams = {min: 0, max: 8, palette: dwClassPalette.getInfo()};

//Greece 
var Greece = LISB.filter(ee.Filter.equals('country_na', 'Greece'));

//Corine 2018
var CorineLC2018_Clip = Corine.select('landcover').clip(Greece);

// Function to mask clouds
function s2ClearSky(image) {
      var scl = image.select('SCL');
      var clear_sky_pixels = scl.eq(1).or(scl.eq(2)).or(scl.eq(3)).or(scl.eq(4)).or(scl.eq(5)).or(scl.eq(6)).or(scl.eq(7)).or(scl.eq(10)).or(scl.eq(11));
      return image.updateMask(clear_sky_pixels);
}

//------------------------Parameters---------------------------------//

//Specify start and end period to build an image collection for training
var date_start = '2023-09-01';
var date_end = '2023-10-27';


//Specify cloud cover theshold
var cloud = 10;


//Smoothing effect pixel radius
var smooth = 1;

//Number of trees
var treeNo = 100;


//-----------------------Model-------------------------------------//
function sampling(){
  
//Creates an image from S2 database
 var Img = S2.filterDate(date_start,date_end)
                    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', cloud))
                    .filterBounds(Greece)
                    .map(s2ClearSky)
                    .median()
                    .clip(Greece);
 
 Map.addLayer(Img,Viz_CI)
 
  //Creates a training dataset
  var training = Waterbodies
    .merge(Soil)
    .merge(Buildup)
    .merge(SparseVeg)
    .merge(Crops)
    .merge(Transitional)
    .merge(MixedForest)
    .merge(Coniferous);
  
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
  var classifier = ee.Classifier.smileRandomForest({
      numberOfTrees: treeNo,
      minLeafPopulation: 3,  // Minimum number of pixels in a leaf node
      bagFraction: 0.7,      // Fraction of input used for training each tree
      maxNodes: 1000,        // Maximum number of leaf nodes in each tree
      seed: 0                // Seed for reproducibility
      }).train(trainSet, label, bands);
  
  
  // Accuracy Assessment
  var confusionMatrix = classifier.confusionMatrix();
  print('Train Overall Accuracy:', confusionMatrix.accuracy());
  print('Train Kappa statistic', confusionMatrix.kappa());
  
  var errorMatrix = ee.ConfusionMatrix(testSet.classify(classifier)
     .errorMatrix({
       actual: 'Class', 
        predicted: 'classification'
      }));

  print('Confusion matrix:', errorMatrix);
  print('Validation Overall Accuracy:', errorMatrix.accuracy());
  print('Validation Kappa statistic', errorMatrix.kappa());
  
  
  return classifier;
  }
  
  
function main (){
  
  var classifier = sampling();
  
  //Band selection
  var band = ['B2', 'B3', 'B4', 'B8','B11','B12'];
 
 //----------------------2022 Classification
 //DW classification dataset
 var DW2022 = DW.filter(ee.Filter.date('2022-09-01','2022-10-30'))
                 .select(probabilityBands)
                 .reduce(ee.Reducer.mean())
                 .toArray().arrayArgmax().arrayGet(0).rename('label')
                 .clip(Greece);
                 
 //Creates an image from S2 database 
 var Img2022 = S2.filterDate('2022-09-01','2022-10-30')
                    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', cloud))
                    .filterBounds(Greece)
                    .map(s2ClearSky)
                    .median()
                    .clip(Greece);
 
  
  var img_input2022 = Img2022.select(band);
 
  // Classify the image
  var classifiedImg2022 = img_input2022.classify(classifier);
  
  //Classified image smoothing
  var Kernel = ee.Kernel.square({radius:smooth,units:"pixels"});

  var classifiedImg_smooth2022 = classifiedImg2022.reduceNeighborhood({
    reducer: ee.Reducer.mode(),
    kernel: Kernel
  });
  
  //Create hubrid land cover from RF and DW data sets
  var DW_select2022 = DW2022.select('label');
  
  
  var DW_mask2022 = ee.Image(0)
  .where(DW_select2022.neq(4).and(DW_select2022.neq(6)).and(DW_select2022.neq(7)),1)
  .clip(Greece);
  
  var classifiedImg2022_maskDW = classifiedImg2022.updateMask(DW_mask2022);
  
  //Compose image from DW and RF 
  var classifiedImg2022_RFwDW = ee.Image(0)
  .where(DW_select2022.eq(4),0) // Isolate crops DW (class 0)
  .where(DW_select2022.eq(6),1) // Isolate buildup DW (class 1)
  .where(DW_select2022.eq(7),2) // Isolate bare land DW (class 2)
  .where(classifiedImg2022_maskDW.eq(0),0) //Isolate crops RF
  .where(classifiedImg2022_maskDW.eq(1),3) //Isolate soil RF (class 3)
  .where(classifiedImg2022_maskDW.eq(2),2) //Isolate baren RF
  .where(classifiedImg2022_maskDW.eq(3),4) //Isolate waterbodies RF (class 4)
  .where(classifiedImg2022_maskDW.eq(4),5) //Isolate Sparse Vegetation RF (class 5)
  .where(classifiedImg2022_maskDW.eq(5),6) //Isolate Transitional Woodland RF (class 6)
  .where(classifiedImg2022_maskDW.eq(6),7) //Isolate MixedForest RF (class 7)
  .where(classifiedImg2022_maskDW.eq(7),8) //Isolate Coniferous RF (class 8)
  .clip(Greece);
  
  //Classified image smoothing
  var classifiedImg2022_RFwDWsmooth = classifiedImg2022_RFwDW.reduceNeighborhood({
    reducer: ee.Reducer.mode(),
    kernel: Kernel
  });
  
  
  //----------------------2023 Classification
  //DW classification dataset
 var DW2023 = DW.filterDate('2023-09-01','2023-10-30')
                 .select(probabilityBands)
                 .reduce(ee.Reducer.mean())
                 .toArray().arrayArgmax().arrayGet(0).rename('label')
                 .clip(Greece);
                 
 //Creates an image from S2 database 
 var Img2023 = S2.filterDate('2023-09-01','2023-10-30')
                    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', cloud))
                    .filterBounds(Greece)
                    .map(s2ClearSky)
                    .median()
                    .clip(Greece);
 
  var img_input2023 = Img2023.select(band);
 
  // Classify the image
  var classifiedImg2023 = img_input2023.classify(classifier);
  
  
  //Create hubrid land cover from RF and DW data sets
  var DW_select2023 = DW2023.select('label');
  
  var DW_mask2023 = ee.Image(0)
  .where(DW_select2023.neq(4).and(DW_select2023.neq(6)).and(DW_select2023.neq(7)),1)
  .clip(Greece);
  
  var classifiedImg2023_maskDW = classifiedImg2023.updateMask(DW_mask2023);
  
  //Compose image from DW and RF 
  var classifiedImg2023_RFwDW = ee.Image(0)
  .where(DW_select2023.eq(4),0) // Isolate crops DW (class 0)
  .where(DW_select2023.eq(6),1) // Isolate buildup DW (class 1)
  .where(DW_select2023.eq(7),2) // Isolate bare land DW (class 2)
  .where(classifiedImg2023_maskDW.eq(0),0) //Isolate crops RF
  .where(classifiedImg2023_maskDW.eq(1),3) //Isolate soil RF (class 3)
  .where(classifiedImg2023_maskDW.eq(2),2) //Isolate baren RF
  .where(classifiedImg2023_maskDW.eq(3),4) //Isolate waterbodies RF (class 4)
  .where(classifiedImg2023_maskDW.eq(4),5) //Isolate Sparse Vegetation RF (class 5)
  .where(classifiedImg2023_maskDW.eq(5),6) //Isolate Transitional Woodland RF (class 6)
  .where(classifiedImg2023_maskDW.eq(6),7) //Isolate MixedForest RF (class 7)
  .where(classifiedImg2023_maskDW.eq(7),8) //Isolate Coniferous RF (class 8)
  .clip(Greece);
  
  //Classified image smoothing
  var classifiedImg2023_RFwDWsmooth = classifiedImg2023_RFwDW.reduceNeighborhood({
    reducer: ee.Reducer.mode(),
    kernel: Kernel
  });

  //Add to map
  dwVisParams.bands ='label';
  
  Map.centerObject(Greece,8);
  Map.addLayer(classifiedImg2022_RFwDW, {palette: classPalette_RFwDW, min: 0, max: 8}, 'Land Cover 2022');
  Map.addLayer(classifiedImg2023_RFwDW, {palette: classPalette_RFwDW, min: 0, max: 8}, 'Land Cover 2023');
  Map.addLayer(CorineLC2018_Clip, {}, 'Corine 2018');
  
  //Create a legend panel
  var legendPanel = ui.Panel({
    style: {
      backgroundColor: 'white',
      border: '1px solid black',
      padding: '10px',
      width: '280px',
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
  
  
  //----------------RF with DW lagend
   // Create legend title
  var legendTitle2 = ui.Label({
    value: 'Land Cover (DW with RF)',
    style: {
      fontWeight: 'bold',
      fontSize: '14px',
      margin: '0 0 4px 0',
      padding: '0'
      }
  });
 
  // Add the title to the panel
  legend.add(legendTitle2);
  
  // name of the legend
  var names2 = ['Crops','Buildup','Baren' ,'Soil','Waterbodies', 'Sparse vegetation', 'Transitional vegetation', 'Mixed forest', 'Coniferous'];
  
  // Add color and and names to legend
  for (var j = 0; j < 9; j++) {
    legend.add(makeRow(classPalette_RFwDW[j], names2[j]));
    }  
 

  legendPanel.add(legend);
  
  
  //Export results

  // Export.image.toDrive({
  //   image: classifiedImg,
  //   description: 'Classified_Image',
  //   scale: 20,
  //   region: AOI_Selection,
  //   maxPixels: 1e13,
  
}

main();
