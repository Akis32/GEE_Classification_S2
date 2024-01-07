var GAUL_L2 = ee.FeatureCollection("FAO/GAUL/2015/level2"),
    S2 = ee.ImageCollection("COPERNICUS/S2_SR"),
    Corine = ee.Image("COPERNICUS/CORINE/V20/100m/2018"),
    LISB = ee.FeatureCollection("USDOS/LSIB_SIMPLE/2017"),
    DW = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1"),
    DEM = ee.Image("USGS/SRTMGL1_003"),
    Pop = ee.ImageCollection("CIESIN/GPWv411/GPW_Population_Density"),
    Buildup = 
    /* color: #d63000 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([23.647520544822246, 37.9721887281325]),
            {
              "Class": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([23.648067715461284, 37.972070321029285]),
            {
              "Class": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([23.64917278557542, 37.97155440213627]),
            {
              "Class": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([23.65112543373826, 37.9747513493542]),
            {
              "Class": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([23.64764929085496, 37.97439613987233]),
            {
              "Class": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([23.646522763068706, 37.97407475838375]),
            {
              "Class": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([23.65239143639329, 37.97401555637713]),
            {
              "Class": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([23.652595284278423, 37.972349423181385]),
            {
              "Class": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([23.648968937690288, 37.97024344437494]),
            {
              "Class": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([23.64463448792222, 37.974032471241024]),
            {
              "Class": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([23.655266764457256, 37.97646817095098]),
            {
              "Class": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([23.64093303948167, 37.96867026415971]),
            {
              "Class": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([23.640353682334453, 37.96765529129211]),
            {
              "Class": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([23.641576769645244, 37.96748612778335]),
            {
              "Class": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([23.64041805535081, 37.975622451044934]),
            {
              "Class": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([23.640096190269023, 37.97645125664834]),
            {
              "Class": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([23.63921642571214, 37.97898835848279]),
            {
              "Class": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([23.63994598656419, 37.978836134845956]),
            {
              "Class": 0,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([23.640589716727764, 37.979529595523346]),
            {
              "Class": 0,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([23.641834261710674, 37.980459837360875]),
            {
              "Class": 0,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([23.641812804038555, 37.97917440916568]),
            {
              "Class": 0,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([23.643379214103252, 37.979529595523346]),
            {
              "Class": 0,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([23.639559748466045, 37.97281459107674]),
            {
              "Class": 0,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([23.640739920432598, 37.97415087517927]),
            {
              "Class": 0,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([23.659300806815654, 37.97589308247509]),
            {
              "Class": 0,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([23.65964412956956, 37.97518267284271]),
            {
              "Class": 0,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([23.659536841208965, 37.97497969739916]),
            {
              "Class": 0,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([23.657240870292217, 37.97712782571293]),
            {
              "Class": 0,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([23.65893602638963, 37.97886996234808]),
            {
              "Class": 0,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([23.659472468192607, 37.97861625570199]),
            {
              "Class": 0,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([23.639066222007305, 37.97017578140355]),
            {
              "Class": 0,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([23.636384012992412, 37.96730004747356]),
            {
              "Class": 0,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([23.63395929604295, 37.9708524083111]),
            {
              "Class": 0,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([23.634860518271953, 37.971106141793655]),
            {
              "Class": 0,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([23.63095522194627, 37.9739309819991]),
            {
              "Class": 0,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([23.630032542045146, 37.97327129850624]),
            {
              "Class": 0,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([23.63071918755296, 37.97354193860511]),
            {
              "Class": 0,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([23.63119125633958, 37.9769248556484]),
            {
              "Class": 0,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([23.630397322471172, 37.97689102724975]),
            {
              "Class": 0,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([23.6302042034221, 37.97606222661221]),
            {
              "Class": 0,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([23.630290034110576, 37.974793636082794]),
            {
              "Class": 0,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([23.629603388602764, 37.97423544930394]),
            {
              "Class": 0,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([23.639602663810283, 37.97707708324941]),
            {
              "Class": 0,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([23.638980391318828, 37.97707708324941]),
            {
              "Class": 0,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([23.6401820209575, 37.97788895845585]),
            {
              "Class": 0,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([23.638293745811016, 37.979428113882285]),
            {
              "Class": 0,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([23.6377143886638, 37.97968181772182]),
            {
              "Class": 0,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([23.64041805535081, 37.98029070335838]),
            {
              "Class": 0,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([23.647799494559795, 37.97711091156231]),
            {
              "Class": 0,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([23.64863634377244, 37.97653582812249]),
            {
              "Class": 0,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([23.655481341178447, 37.973220553376635]),
            {
              "Class": 0,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([23.654344084556133, 37.97354193860511]),
            {
              "Class": 0,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([23.66811991005662, 37.971495198096946]),
            {
              "Class": 0,
              "system:index": "52"
            })]),
    Baren = 
    /* color: #d3c6ff */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([21.865127462056904, 40.454102785940876]),
            {
              "Class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([21.862552541402607, 40.452404683694596]),
            {
              "Class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([21.85345448842409, 40.43725048694304]),
            {
              "Class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([21.845901387838154, 40.43894897208686]),
            {
              "Class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([21.85070790639284, 40.44090870931815]),
            {
              "Class": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([21.85276784291628, 40.42039396281444]),
            {
              "Class": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([21.86152257314089, 40.4087618050093]),
            {
              "Class": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([21.85894765248659, 40.403663933681635]),
            {
              "Class": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([21.85448445668581, 40.39921932057177]),
            {
              "Class": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([21.872165578511982, 40.45436402863146]),
            {
              "Class": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([21.866157430318623, 40.45292718126403]),
            {
              "Class": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([21.85002126088503, 40.42836540388574]),
            {
              "Class": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([21.7798117577112, 40.42457582019343]),
            {
              "Class": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([21.84178151479128, 40.43124011805]),
            {
              "Class": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([21.824958699849873, 40.41451278603853]),
            {
              "Class": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([21.84246816029909, 40.42052464979263]),
            {
              "Class": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([21.83903493276003, 40.398173486605664]),
            {
              "Class": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([21.842639821676045, 40.407193270340684]),
            {
              "Class": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([21.822383779195576, 40.413336488993274]),
            {
              "Class": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([21.83131017079714, 40.42614394968635]),
            {
              "Class": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([21.83903493276003, 40.42666665139307]),
            {
              "Class": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([21.8457297264612, 40.42954143816903]),
            {
              "Class": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([21.841438192037373, 40.44025546992196]),
            {
              "Class": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([21.796634572652607, 40.47565189314955]),
            {
              "Class": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([21.748873910632128, 40.456935962087584]),
            {
              "Class": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([21.744925698962206, 40.494151234845674]),
            {
              "Class": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([21.798140725817674, 40.48240127191547]),
            {
              "Class": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([21.801917276110643, 40.478875881896066]),
            {
              "Class": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([21.61584391282442, 40.82134153594806]),
            {
              "Class": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([21.617217203840045, 40.823419983775196]),
            {
              "Class": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([21.619019648298053, 40.821146678124975]),
            {
              "Class": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([21.616273066266803, 40.81991256528511]),
            {
              "Class": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([21.610436579450397, 40.85238156999576]),
            {
              "Class": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([21.61309733079317, 40.85355015760429]),
            {
              "Class": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([21.615157267316608, 40.8541993640361]),
            {
              "Class": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([21.61833300279024, 40.854913483763426]),
            {
              "Class": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([21.60039438889864, 40.86147004144048]),
            {
              "Class": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([21.589322230085163, 40.857380383594126]),
            {
              "Class": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([21.60314097092989, 40.84816149869556]),
            {
              "Class": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([21.61764635728243, 40.84381129774473]),
            {
              "Class": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([21.611552378400592, 40.84595396972126]),
            {
              "Class": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([21.61258234666231, 40.845304682498444]),
            {
              "Class": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([21.61610140488985, 40.84965478542016]),
            {
              "Class": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([21.61610140488985, 40.85160250013923]),
            {
              "Class": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([21.61507143662813, 40.85309570931685]),
            {
              "Class": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([21.60614504502657, 40.863222674649585]),
            {
              "Class": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([25.436482323493514, 36.39433150223824]),
            {
              "Class": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([25.43656815418199, 36.39267333349247]),
            {
              "Class": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([25.432534111823593, 36.400065729790924]),
            {
              "Class": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([25.431761635627304, 36.40766465656809]),
            {
              "Class": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([25.43811310657457, 36.3730489844151]),
            {
              "Class": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([25.43631066211656, 36.372012349416266]),
            {
              "Class": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([24.062014560327984, 35.30928976890729]),
            {
              "Class": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([24.070254306421734, 35.30494707261195]),
            {
              "Class": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([24.085703830347516, 35.3050871632278]),
            {
              "Class": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([24.090510348902203, 35.30452679930899]),
            {
              "Class": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([24.08862207375572, 35.30172492149945]),
            {
              "Class": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([24.075747470484234, 35.29836254005758]),
            {
              "Class": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([24.066992740259625, 35.29275826052894]),
            {
              "Class": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([24.059954623804547, 35.28995597524406]),
            {
              "Class": 1,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([24.036093692408063, 35.286733227238976]),
            {
              "Class": 1,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([24.108019809351422, 35.33744159477459]),
            {
              "Class": 1,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([24.10510156594322, 35.33394065768848]),
            {
              "Class": 1,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([24.103213290796734, 35.29205769830252]),
            {
              "Class": 1,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([24.097376803980328, 35.29836254005758]),
            {
              "Class": 1,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([24.078150729761578, 35.28799431782395]),
            {
              "Class": 1,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([24.076605777369, 35.29429947608423]),
            {
              "Class": 1,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([24.043646792994, 35.3489236038132]),
            {
              "Class": 1,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([24.041758517847516, 35.3489236038132]),
            {
              "Class": 1,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([24.070769290552594, 35.323016759267844]),
            {
              "Class": 1,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([24.05188653908775, 35.290236208138005]),
            {
              "Class": 1,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([24.023734073267438, 35.29261814856871]),
            {
              "Class": 1,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([22.33949094279604, 37.00258924304875]),
            {
              "Class": 1,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([22.33949094279604, 37.00169815150975]),
            {
              "Class": 1,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([25.435971438158916, 37.47114346139846]),
            {
              "Class": 1,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([25.435971438158916, 37.470189770131086]),
            {
              "Class": 1,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([25.446271120776103, 37.472437737227494]),
            {
              "Class": 1,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([25.443267046679424, 37.47209714049796]),
            {
              "Class": 1,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([25.428246676196025, 37.481497040492734]),
            {
              "Class": 1,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([25.39691847490208, 37.49504988684686]),
            {
              "Class": 1,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([25.39417189287083, 37.49552657536708]),
            {
              "Class": 1,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([25.392369448412822, 37.49532228065956]),
            {
              "Class": 1,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([25.388850390185283, 37.494436997135764]),
            {
              "Class": 1,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([25.38618963884251, 37.49511798539318]),
            {
              "Class": 1,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([25.384988009203838, 37.49368790288068]),
            {
              "Class": 1,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([25.38241308854954, 37.49266639860629]),
            {
              "Class": 1,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([25.420521914233134, 37.47999858493134]),
            {
              "Class": 1,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([25.404557406176494, 37.483608449597355]),
            {
              "Class": 1,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([25.81562837810772, 36.810477438347284]),
            {
              "Class": 1,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([25.84790071697491, 36.82500989919597]),
            {
              "Class": 1,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([25.830070640995526, 36.786114166338436]),
            {
              "Class": 1,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([25.82148757214787, 36.78305518492515]),
            {
              "Class": 1,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([25.85715022320988, 36.786939039298765]),
            {
              "Class": 1,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([25.85895266766789, 36.78704214779446]),
            {
              "Class": 1,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([25.85968222851994, 36.7871108867145]),
            {
              "Class": 1,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([25.804149773075604, 36.76875540542967]),
            {
              "Class": 1,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([25.894636832418012, 36.81255529599186]),
            {
              "Class": 1,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([25.902576171102094, 36.815853595654396]),
            {
              "Class": 1,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([25.9019109832664, 36.8154756726938]),
            {
              "Class": 1,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([25.901481829824018, 36.81525235370369]),
            {
              "Class": 1,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([26.390999417461373, 36.578400977961046]),
            {
              "Class": 1,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([22.404345347826425, 36.81533861475327]),
            {
              "Class": 1,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([22.405375316088143, 36.82275931929985]),
            {
              "Class": 1,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([22.405546977465097, 36.799189225458505]),
            {
              "Class": 1,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([22.40468867058033, 36.79774592275948]),
            {
              "Class": 1,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([22.403401210253183, 36.81836195160574]),
            {
              "Class": 1,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([22.404602839891854, 36.82255319833346]),
            {
              "Class": 1,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([22.392844035570565, 36.78819194769986]),
            {
              "Class": 1,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([22.386149241869393, 36.78331139999782]),
            {
              "Class": 1,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([22.383917643969003, 36.781455335488985]),
            {
              "Class": 1,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([22.383831813280526, 36.77966797162568]),
            {
              "Class": 1,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([22.40348704094166, 36.784686233615794]),
            {
              "Class": 1,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([22.397822215502206, 36.833202054896134]),
            {
              "Class": 1,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([22.3946749853992, 36.83719856958067]),
            {
              "Class": 1,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([22.39587661503787, 36.834862940297846]),
            {
              "Class": 1,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([24.950956536012338, 36.62080730369623]),
            {
              "Class": 1,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([24.94969053335731, 36.62146173490241]),
            {
              "Class": 1,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([24.944841099458383, 36.62487157603248]),
            {
              "Class": 1,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([24.950613213258432, 36.620824525641254]),
            {
              "Class": 1,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([24.93382605226966, 36.6302128268725]),
            {
              "Class": 1,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([24.933203779778204, 36.63081551910912]),
            {
              "Class": 1,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([24.922968470177373, 36.63200366999831]),
            {
              "Class": 1,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([24.921162188422965, 36.631504152581165]),
            {
              "Class": 1,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([24.916377127540397, 36.63188298190346]),
            {
              "Class": 1,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([24.89305025373646, 36.647054997158406]),
            {
              "Class": 1,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([24.89338284765431, 36.64677093129118]),
            {
              "Class": 1,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([24.895646632062878, 36.64473079109862]),
            {
              "Class": 1,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([24.89586120878407, 36.64442949999273]),
            {
              "Class": 1,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([24.868129968079423, 36.66215128029098]),
            {
              "Class": 1,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([24.867035626801346, 36.66309797331234]),
            {
              "Class": 1,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([24.867743729981278, 36.6623578324887]),
            {
              "Class": 1,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([24.8395727077239, 36.65890073360241]),
            {
              "Class": 1,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([24.83931521565847, 36.65866835190503]),
            {
              "Class": 1,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([24.838403264593406, 36.65870277886743]),
            {
              "Class": 1,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([24.841214219641014, 36.654683326982756]),
            {
              "Class": 1,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([24.839240113806053, 36.65852203714309]),
            {
              "Class": 1,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([25.480427701497835, 36.35771892067752]),
            {
              "Class": 1,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([25.43413594093011, 36.34321457447447]),
            {
              "Class": 1,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([25.4328913959472, 36.34281704701028]),
            {
              "Class": 1,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([25.42838528480218, 36.343041736695895]),
            {
              "Class": 1,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([25.427805927654962, 36.34328370947848]),
            {
              "Class": 1,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([25.425960567852716, 36.34457997943974]),
            {
              "Class": 1,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([25.429930237194757, 36.34155531596544]),
            {
              "Class": 1,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([25.43035939063714, 36.34119234845415]),
            {
              "Class": 1,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([25.43081000175164, 36.34069110482425]),
            {
              "Class": 1,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([25.43162539329217, 36.33993059108742]),
            {
              "Class": 1,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([25.42310669746087, 36.34675766439889]),
            {
              "Class": 1,
              "system:index": "146"
            })]),
    Waterbodies = 
    /* color: #00ccf2 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([23.389070128673655, 38.47117252289121]),
            {
              "Class": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([23.379113768810374, 38.46740929910113]),
            {
              "Class": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([23.369500731701, 38.46364587892157]),
            {
              "Class": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([23.355424498790843, 38.459344586818574]),
            {
              "Class": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([23.341348265880686, 38.453429891375585]),
            {
              "Class": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([23.329331969493968, 38.44859023442853]),
            {
              "Class": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([23.268220519298655, 38.41793153649168]),
            {
              "Class": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([23.247964476818186, 38.42250427347262]),
            {
              "Class": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([23.25208434986506, 38.40797810837722]),
            {
              "Class": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([23.249681090587718, 38.396139814599806]),
            {
              "Class": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([23.287446593517405, 38.39856144150904]),
            {
              "Class": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([23.289163207286936, 38.41093737887441]),
            {
              "Class": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([23.298432921642405, 38.39587073993616]),
            {
              "Class": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([23.311479186290843, 38.40474967508215]),
            {
              "Class": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([23.233544921154124, 38.40905422076103]),
            {
              "Class": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([21.618568449728986, 38.53528148980645]),
            {
              "Class": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([21.593162565939924, 38.554614889295806]),
            {
              "Class": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([21.566383391135236, 38.568574667411085]),
            {
              "Class": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([21.54853060793211, 38.57233260592938]),
            {
              "Class": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([21.524498015158674, 38.573943090839094]),
            {
              "Class": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([21.499778776877424, 38.57233260592938]),
            {
              "Class": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([21.475059538596174, 38.554614889295806]),
            {
              "Class": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([21.365882902853986, 38.56750093459043]),
            {
              "Class": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([21.38098910402586, 38.55783661720985]),
            {
              "Class": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([21.31507113527586, 38.481012821897444]),
            {
              "Class": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([21.330177336447736, 38.469186499966995]),
            {
              "Class": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([21.2292404467993, 38.64208716557795]),
            {
              "Class": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([21.22168734621336, 38.663000308535324]),
            {
              "Class": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([21.3336105639868, 38.68765924468879]),
            {
              "Class": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([21.32880404543211, 38.684979337047835]),
            {
              "Class": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([21.44622042726805, 38.345970086564975]),
            {
              "Class": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([21.854087858908674, 38.666217173251596]),
            {
              "Class": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([21.594541051626802, 38.88464298133354]),
            {
              "Class": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([21.581151464224458, 38.887315394641234]),
            {
              "Class": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([21.571195104361177, 38.888117099030524]),
            {
              "Class": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([21.557805516958833, 38.888117099030524]),
            {
              "Class": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([21.540982702017427, 38.88945325290679]),
            {
              "Class": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([21.521756627798677, 38.89212548526125]),
            {
              "Class": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([21.528623082876802, 38.906019472876174]),
            {
              "Class": 2,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([21.534116246939302, 38.922314723882806]),
            {
              "Class": 2,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([21.545102575064302, 38.92952618139803]),
            {
              "Class": 2,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([21.509397008658052, 38.91056114838738]),
            {
              "Class": 2,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([21.500813939810396, 38.92578699863865]),
            {
              "Class": 2,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([21.495664098501802, 38.939674398188835]),
            {
              "Class": 2,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([21.495320775747896, 38.952491122599994]),
            {
              "Class": 2,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([21.55711887145102, 38.94955416125742]),
            {
              "Class": 2,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([21.54063937926352, 38.92525281358362]),
            {
              "Class": 2,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([21.509053685904146, 38.962102145180374]),
            {
              "Class": 2,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([21.49394748473227, 38.966106353188884]),
            {
              "Class": 2,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([21.511113622427583, 38.97464790717457]),
            {
              "Class": 2,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([21.468198278189302, 38.985323401085445]),
            {
              "Class": 2,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([21.455152013540864, 38.98772516539101]),
            {
              "Class": 2,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([21.44176242613852, 38.99012684820692]),
            {
              "Class": 2,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([21.43626926207602, 38.99866550489858]),
            {
              "Class": 2,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([21.424939611197114, 39.00346804653484]),
            {
              "Class": 2,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([21.41257999205649, 39.010671247741875]),
            {
              "Class": 2,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([21.390264013052583, 39.04347654808829]),
            {
              "Class": 2,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([21.405026891470552, 39.011204789021875]),
            {
              "Class": 2,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([21.39781711363852, 39.04907593135974]),
            {
              "Class": 2,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([21.747105187069316, 39.28698733149356]),
            {
              "Class": 2,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([21.75946480620994, 39.29336447308447]),
            {
              "Class": 2,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([21.747105187069316, 39.30930478615472]),
            {
              "Class": 2,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([21.73199898589744, 39.32205442289162]),
            {
              "Class": 2,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([21.72375923980369, 39.3268349376437]),
            {
              "Class": 2,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([21.030247276913066, 39.19179270990287]),
            {
              "Class": 2,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([21.02269417632713, 39.20775612560098]),
            {
              "Class": 2,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([20.81827136933965, 39.09540315835501]),
            {
              "Class": 2,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([20.799731940628714, 39.0692860512617]),
            {
              "Class": 2,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([20.825137824417776, 39.06075592236877]),
            {
              "Class": 2,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([20.83475086152715, 39.054890860837745]),
            {
              "Class": 2,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([20.890369147659964, 39.04902531213921]),
            {
              "Class": 2,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([20.918521613480276, 39.04902531213921]),
            {
              "Class": 2,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([20.910281867386526, 39.038359430095205]),
            {
              "Class": 2,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([20.893802375199026, 39.042092671985905]),
            {
              "Class": 2,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([20.825137824417776, 39.086343216551754]),
            {
              "Class": 2,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([21.016711921097464, 39.234353756938695]),
            {
              "Class": 2,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([21.008472175003714, 39.27954659898235]),
            {
              "Class": 2,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([21.01430866182012, 39.27529439695265]),
            {
              "Class": 2,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([21.047954291702933, 39.250307498172305]),
            {
              "Class": 2,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([21.023235053421683, 39.25402951568186]),
            {
              "Class": 2,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([22.825631833901728, 39.476760389563395]),
            {
              "Class": 2,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([22.839364744057978, 39.48735977517186]),
            {
              "Class": 2,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([22.805032468667353, 39.502196201114835]),
            {
              "Class": 2,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([20.898904538979853, 39.6577874346817]),
            {
              "Class": 2,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([20.886544919839228, 39.65567289134583]),
            {
              "Class": 2,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([20.896157956948603, 39.65144361060768]),
            {
              "Class": 2,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([21.88420707814611, 40.15360355593734]),
            {
              "Class": 2,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([21.896566697286737, 40.16514852270861]),
            {
              "Class": 2,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([21.90343315236486, 40.17590456576209]),
            {
              "Class": 2,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([21.910299607442987, 40.18351146938406]),
            {
              "Class": 2,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([21.916822739767206, 40.19033072685367]),
            {
              "Class": 2,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([21.925062485860956, 40.20003387279071]),
            {
              "Class": 2,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([21.94016868703283, 40.20921124644976]),
            {
              "Class": 2,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([21.947721787618768, 40.215503584577775]),
            {
              "Class": 2,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([21.95939476125158, 40.2270380204007]),
            {
              "Class": 2,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([21.9659178935758, 40.22992132251436]),
            {
              "Class": 2,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([21.9769042217008, 40.23883257121327]),
            {
              "Class": 2,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([21.9933837138883, 40.245646264251526]),
            {
              "Class": 2,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([22.013983079122674, 40.25403140654909]),
            {
              "Class": 2,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([22.02531273000158, 40.255603505074866]),
            {
              "Class": 2,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([22.008489915060174, 40.2440739344183]),
            {
              "Class": 2,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([21.872877427267206, 40.14835519484498]),
            {
              "Class": 2,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([21.860174485372674, 40.14074435088939]),
            {
              "Class": 2,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([22.03225519431353, 40.270390653927905]),
            {
              "Class": 2,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([22.044958136208063, 40.279820416446555]),
            {
              "Class": 2,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([22.057661078102594, 40.28610619422457]),
            {
              "Class": 2,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([23.559168360926382, 40.65111037871567]),
            {
              "Class": 2,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([23.541315577723257, 40.6641328930529]),
            {
              "Class": 2,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([23.52449276278185, 40.6737679170433]),
            {
              "Class": 2,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([23.508699916102163, 40.67871509107503]),
            {
              "Class": 2,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([23.501146815516226, 40.67272635994277]),
            {
              "Class": 2,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([23.522432826258413, 40.66491416307488]),
            {
              "Class": 2,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([23.54097225496935, 40.64746361917398]),
            {
              "Class": 2,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([23.480890773035757, 40.681318719426315]),
            {
              "Class": 2,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([23.44209530184435, 40.676632115174655]),
            {
              "Class": 2,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([23.408449671961538, 40.676111361030316]),
            {
              "Class": 2,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([23.378580592371694, 40.67897545848638]),
            {
              "Class": 2,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([23.1811700088756, 40.676371738610946]),
            {
              "Class": 2,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([23.185976527430288, 40.68990997145306]),
            {
              "Class": 2,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([23.172586940027944, 40.66387246767854]),
            {
              "Class": 2,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([23.191813014246694, 40.67272635994277]),
            {
              "Class": 2,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([23.1646905166881, 40.679756554618834]),
            {
              "Class": 2,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([23.162630580164663, 40.671424390686816]),
            {
              "Class": 2,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([23.14546444246935, 40.68912899430554]),
            {
              "Class": 2,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([23.158510707117788, 40.69303378851324]),
            {
              "Class": 2,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([23.1482110245006, 40.68314119876389]),
            {
              "Class": 2,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([23.129328273035757, 40.68626533312334]),
            {
              "Class": 2,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([23.13550808260607, 40.67819435320151]),
            {
              "Class": 2,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([23.41016628573107, 40.667778741523634]),
            {
              "Class": 2,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([23.549898646570913, 40.63938794242933]),
            {
              "Class": 2,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([23.12856691884918, 41.236084644073614]),
            {
              "Class": 2,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([23.123760400294493, 41.215943604787476]),
            {
              "Class": 2,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([23.122043786524962, 41.197604701193306]),
            {
              "Class": 2,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([23.16358583974762, 41.18727066105353]),
            {
              "Class": 2,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([23.19929140615387, 41.16427156931571]),
            {
              "Class": 2,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([23.18075197744293, 41.188820871067264]),
            {
              "Class": 2,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([23.173198876856993, 41.215943604787476]),
            {
              "Class": 2,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([23.151912866114806, 41.205095860222315]),
            {
              "Class": 2,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([22.772884545802306, 41.21000339602848]),
            {
              "Class": 2,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([22.7725412230484, 41.227047765566724]),
            {
              "Class": 2,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([25.126222183307487, 41.03559245383809]),
            {
              "Class": 2,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([25.11317591865905, 41.04478521141078]),
            {
              "Class": 2,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([25.11094432075866, 41.06213142444476]),
            {
              "Class": 2,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([25.117982437213737, 41.07274401538017]),
            {
              "Class": 2,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([25.09995799263366, 41.06096652356598]),
            {
              "Class": 2,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([25.09515147407897, 41.04815125215683]),
            {
              "Class": 2,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([25.09721141060241, 41.031966787981744]),
            {
              "Class": 2,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([25.155747940143424, 41.02471485723992]),
            {
              "Class": 2,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([25.148709823688346, 41.035980906193714]),
            {
              "Class": 2,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([25.133946945270377, 41.023808309739294]),
            {
              "Class": 2,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([25.14458995064147, 41.028988413080604]),
            {
              "Class": 2,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([25.116952468952018, 41.02290174975932]),
            {
              "Class": 2,
              "system:index": "151"
            })]),
    Crops = 
    /* color: #ffe64d */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([24.991982986530143, 41.06873213968728]),
            {
              "Class": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([25.01000743111022, 41.06031934749565]),
            {
              "Class": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([25.007604171832877, 41.06368459352072]),
            {
              "Class": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([25.034898330768424, 41.092023485614334]),
            {
              "Class": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([24.976190139850456, 41.089694722453224]),
            {
              "Class": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([24.953015853961784, 41.07973185937309]),
            {
              "Class": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([24.952157547077018, 41.07559100445495]),
            {
              "Class": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([24.98580317695983, 41.05177602655266]),
            {
              "Class": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([25.195230056842643, 41.07132047460717]),
            {
              "Class": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([25.187676956256706, 41.06640255113958]),
            {
              "Class": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([25.177033950885612, 41.06044878321918]),
            {
              "Class": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([25.162957717975456, 41.08387245342764]),
            {
              "Class": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([25.166734268268424, 41.08943596589562]),
            {
              "Class": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([25.188191940387565, 41.09137661523829]),
            {
              "Class": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([24.99902110298522, 41.021477130291814]),
            {
              "Class": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([24.910100509723502, 41.03041287006019]),
            {
              "Class": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([24.909757186969596, 41.06588485358734]),
            {
              "Class": 3,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([24.937223007282096, 41.069767485882636]),
            {
              "Class": 3,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([24.938939621051627, 41.073908707631404]),
            {
              "Class": 3,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([25.032323410114127, 41.067826198392666]),
            {
              "Class": 3,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([25.05601268013366, 41.081025823037834]),
            {
              "Class": 3,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([25.205358078082877, 41.047503950000966]),
            {
              "Class": 3,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([26.206668993287263, 40.895656834789094]),
            {
              "Class": 3,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([26.228641649537263, 40.90006850614207]),
            {
              "Class": 3,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([26.21096052771109, 40.88267962555746]),
            {
              "Class": 3,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([26.211303850464997, 40.87709864311093]),
            {
              "Class": 3,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([26.200832506470856, 40.88216048425062]),
            {
              "Class": 3,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([26.197055956177888, 40.87359406479695]),
            {
              "Class": 3,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([26.230358263306794, 40.90798282608016]),
            {
              "Class": 3,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([26.24391951208609, 40.92419773579887]),
            {
              "Class": 3,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([26.194824358277497, 40.888909003617755]),
            {
              "Class": 3,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([26.288551470093903, 40.896305628440835]),
            {
              "Class": 3,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([26.29284300451773, 40.940019652300975]),
            {
              "Class": 3,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([26.233619829468903, 40.91615563770491]),
            {
              "Class": 3,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([26.192421099000153, 40.87333445902305]),
            {
              "Class": 3,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([26.217826982789216, 40.90564755148692]),
            {
              "Class": 3,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([26.20821394567984, 40.91965796198845]),
            {
              "Class": 3,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([26.264518877320466, 40.93029351295761]),
            {
              "Class": 3,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([22.088279476131376, 39.41219868404641]),
            {
              "Class": 3,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([22.383848446157643, 39.731814099510544]),
            {
              "Class": 3,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([22.397581356313893, 39.74580629896237]),
            {
              "Class": 3,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([22.394319790151783, 39.74145054140336]),
            {
              "Class": 3,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([22.414060848501393, 39.7520094783253]),
            {
              "Class": 3,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([22.442041652944752, 39.749633858604675]),
            {
              "Class": 3,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([22.45182635143108, 39.74686219872323]),
            {
              "Class": 3,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([22.361875789907643, 39.763490485389696]),
            {
              "Class": 3,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([22.337328213003346, 39.77153924544989]),
            {
              "Class": 3,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([22.348142879751393, 39.74580629896237]),
            {
              "Class": 3,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([22.4803221400053, 39.68030891513934]),
            {
              "Class": 3,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([22.487875240591237, 39.67911988013007]),
            {
              "Class": 3,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([22.47980715587444, 39.66405699817096]),
            {
              "Class": 3,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([22.35741259410686, 39.664189142992804]),
            {
              "Class": 3,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([22.29475619151897, 39.67489203430684]),
            {
              "Class": 3,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([22.299391048696705, 39.76401830176228]),
            {
              "Class": 3,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([22.34076144054241, 39.76335853066437]),
            {
              "Class": 3,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([22.36342074230022, 39.705670118348266]),
            {
              "Class": 3,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([22.359129207876393, 39.7048777217882]),
            {
              "Class": 3,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([22.448736446645924, 39.74475038301972]),
            {
              "Class": 3,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([22.303682583120533, 39.777608179875]),
            {
              "Class": 3,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([22.351404445913502, 39.777872034450446]),
            {
              "Class": 3,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([22.2825682337553, 39.696953255704344]),
            {
              "Class": 3,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([22.294584530142018, 39.68202637401188]),
            {
              "Class": 3,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([22.4263809344455, 38.864975130671716]),
            {
              "Class": 3,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([22.4373672625705, 38.83275573500828]),
            {
              "Class": 3,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([22.476506056515813, 38.825400715852666]),
            {
              "Class": 3,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([22.500710310666204, 38.83502895082223]),
            {
              "Class": 3,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([22.450756849972844, 38.808949468605924]),
            {
              "Class": 3,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([22.445950331418157, 38.815637425902686]),
            {
              "Class": 3,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([22.423462691037297, 38.861098880319105]),
            {
              "Class": 3,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([22.486462416379094, 38.87392979749942]),
            {
              "Class": 3,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([22.49178391906464, 38.87580077942867]),
            {
              "Class": 3,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([22.3604629656955, 38.876602613748936]),
            {
              "Class": 3,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([22.51873475524628, 38.877404439022385]),
            {
              "Class": 3,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([22.50551682922089, 38.82633685140283]),
            {
              "Class": 3,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([22.53349763366425, 38.834895234254695]),
            {
              "Class": 3,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([22.51753312560761, 38.83904033102856]),
            {
              "Class": 3,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([22.506203474728704, 38.841313346112955]),
            {
              "Class": 3,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([22.450928511349797, 38.83863920318262]),
            {
              "Class": 3,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([22.403034987179876, 38.87005403539202]),
            {
              "Class": 3,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([22.415051283566594, 38.865643428339446]),
            {
              "Class": 3,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([22.516674818722844, 38.88248245566249]),
            {
              "Class": 3,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([22.314972700802922, 38.91427862100126]),
            {
              "Class": 3,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([22.303986372677922, 38.92790119039415]),
            {
              "Class": 3,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([22.27411729308808, 38.92376127438761]),
            {
              "Class": 3,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([22.199272932736516, 38.927634106329386]),
            {
              "Class": 3,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([22.153519926118324, 38.9211138531543]),
            {
              "Class": 3,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([22.14940005307145, 38.92832543273409]),
            {
              "Class": 3,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([22.16364794735856, 38.929260213451116]),
            {
              "Class": 3,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([22.212228117036293, 38.9359368603205]),
            {
              "Class": 3,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([22.16759615902848, 38.902413751631705]),
            {
              "Class": 3,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([22.17858248715348, 38.949288268423174]),
            {
              "Class": 3,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([22.20553332333512, 38.90762356069196]),
            {
              "Class": 3,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([22.667935523970066, 36.820377940335945]),
            {
              "Class": 3,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([22.68527332304233, 36.83315675362649]),
            {
              "Class": 3,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([22.693341407759128, 36.842911185129054]),
            {
              "Class": 3,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([22.691624793989597, 36.83343154337294]),
            {
              "Class": 3,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([22.69677463529819, 36.82353849064854]),
            {
              "Class": 3,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([22.69728961942905, 36.81969084690891]),
            {
              "Class": 3,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([22.6890498733353, 36.81831664154931]),
            {
              "Class": 3,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([22.763035926802097, 36.83150799441893]),
            {
              "Class": 3,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([22.655232582075534, 36.83123319776286]),
            {
              "Class": 3,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([22.678235206587253, 36.84483444731594]),
            {
              "Class": 3,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([22.627938423139987, 36.83315675362649]),
            {
              "Class": 3,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([22.698147926313816, 36.81639271259405]),
            {
              "Class": 3,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([22.6451045608353, 36.81460616383403]),
            {
              "Class": 3,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([22.78346363065952, 36.816804987155585]),
            {
              "Class": 3,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([22.767499122602878, 36.81254470960578]),
            {
              "Class": 3,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([22.75683486602915, 37.63896274563811]),
            {
              "Class": 3,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([22.740140797120457, 37.6385889254424]),
            {
              "Class": 3,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([22.73756587646616, 37.6436863115127]),
            {
              "Class": 3,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([22.73932540557993, 37.64660865510882]),
            {
              "Class": 3,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([22.778850437623387, 37.65207924506451]),
            {
              "Class": 3,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([22.775116802674656, 37.6385889254424]),
            {
              "Class": 3,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([22.768164516908055, 37.643142606995966]),
            {
              "Class": 3,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([22.759195209962254, 37.65034636887136]),
            {
              "Class": 3,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([22.790909649354344, 37.643822237020075]),
            {
              "Class": 3,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([22.765117527467137, 37.62914084517054]),
            {
              "Class": 3,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([22.756877781373387, 37.63760339045615]),
            {
              "Class": 3,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([22.76056850097788, 37.64759407063198]),
            {
              "Class": 3,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([22.738467098695164, 37.651127867062385]),
            {
              "Class": 3,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([22.743659855347996, 37.65102593298211]),
            {
              "Class": 3,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([22.75228583953989, 37.653744127240095]),
            {
              "Class": 3,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([22.749195934754734, 37.654627518950875]),
            {
              "Class": 3,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([22.752242924195652, 37.63760339045615]),
            {
              "Class": 3,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([22.775889278870945, 37.651263778951765]),
            {
              "Class": 3,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([22.809534908753758, 37.631791866630955]),
            {
              "Class": 3,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([22.735634685975437, 37.653268450427376]),
            {
              "Class": 3,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([22.72430503509653, 37.65343833535314]),
            {
              "Class": 3,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([22.809656028701667, 37.58936350740483]),
            {
              "Class": 3,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([22.880552177383308, 37.55072239093349]),
            {
              "Class": 3,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([22.88795054679905, 37.54755555451697]),
            {
              "Class": 3,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([22.890525467453347, 37.54980119286734]),
            {
              "Class": 3,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([22.877822525558816, 37.55606140315701]),
            {
              "Class": 3,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([22.064322075850292, 39.3406121741644]),
            {
              "Class": 3,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([22.085436425215526, 39.314320479513]),
            {
              "Class": 3,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([22.041491112715526, 39.31883591787925]),
            {
              "Class": 3,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([22.009562096602245, 39.344594901948]),
            {
              "Class": 3,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([21.99342592716865, 39.29931119348413]),
            {
              "Class": 3,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([22.015055260664745, 39.30010822764496]),
            {
              "Class": 3,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([21.95051058293037, 39.28908178291949]),
            {
              "Class": 3,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([21.954115471846386, 39.30542155680074]),
            {
              "Class": 3,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([21.977804741865917, 39.33184937423175]),
            {
              "Class": 3,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([22.017115197188183, 39.36636313565296]),
            {
              "Class": 3,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([22.113760552412792, 39.35693991582541]),
            {
              "Class": 3,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([22.121656975752636, 39.35972719775051]),
            {
              "Class": 3,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([22.138136467940136, 39.28801890131413]),
            {
              "Class": 3,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([22.13075502873115, 39.244293923432]),
            {
              "Class": 3,
              "system:index": "146"
            })]),
    SparceVeg = 
    /* color: #d5ffc6 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([27.533907940669724, 36.22207388447255]),
            {
              "Class": 4,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([27.536397030635545, 36.22622831959898]),
            {
              "Class": 4,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([27.525324871822068, 36.22463581221513]),
            {
              "Class": 4,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([27.54746918944902, 36.22505125205009]),
            {
              "Class": 4,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([27.565579464717576, 36.22380492592531]),
            {
              "Class": 4,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([27.58523469237871, 36.226712989323154]),
            {
              "Class": 4,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([24.148513064866954, 35.31252138119028]),
            {
              "Class": 4,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([24.155036197191173, 35.27202881971726]),
            {
              "Class": 4,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([24.022170291429454, 35.30047380873275]),
            {
              "Class": 4,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([24.03229831266969, 35.33871165428392]),
            {
              "Class": 4,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([24.035388217454845, 35.32526744019979]),
            {
              "Class": 4,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([24.097357974534923, 35.337171284860574]),
            {
              "Class": 4,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([24.70081742905439, 35.25892975794657]),
            {
              "Class": 4,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([24.726394974220405, 35.26313475998575]),
            {
              "Class": 4,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([24.591039978492866, 35.19596883053591]),
            {
              "Class": 4,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([24.629234634864936, 35.196880640088516]),
            {
              "Class": 4,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([24.580826126564155, 35.197231333345044]),
            {
              "Class": 4,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([24.585546814430366, 35.195758411493394]),
            {
              "Class": 4,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([24.552587830055366, 35.15064602137736]),
            {
              "Class": 4,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([24.732059799659858, 35.26306467840644]),
            {
              "Class": 4,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([25.469953685955392, 36.37292967752912]),
            {
              "Class": 4,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([25.47900882358967, 36.36484354580345]),
            {
              "Class": 4,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([25.453431278423654, 36.36442884972809]),
            {
              "Class": 4,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([25.46403136845051, 36.37002706027009]),
            {
              "Class": 4,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([25.465833812908517, 36.371512937396744]),
            {
              "Class": 4,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([22.150920903296406, 38.63869324475797]),
            {
              "Class": 4,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([22.15383914670461, 38.66657739944522]),
            {
              "Class": 4,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([22.135471379370625, 38.677969242371546]),
            {
              "Class": 4,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([22.14731601438039, 38.68024739341672]),
            {
              "Class": 4,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([22.230571782202656, 38.60878615911002]),
            {
              "Class": 4,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([22.099937474341328, 38.68185545637654]),
            {
              "Class": 4,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([22.13581470212453, 38.68748339218408]),
            {
              "Class": 4,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([22.23572162351125, 38.61844362189759]),
            {
              "Class": 4,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([21.003880481252253, 38.75920755063791]),
            {
              "Class": 4,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([21.038212756642878, 38.714216830961476]),
            {
              "Class": 4,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([21.05640886259991, 38.72774380610964]),
            {
              "Class": 4,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([21.069283465871393, 38.72466363097884]),
            {
              "Class": 4,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([21.023278216847956, 38.72238689445211]),
            {
              "Class": 4,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([20.993409137258112, 38.75291591087746]),
            {
              "Class": 4,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([20.99598405791241, 38.75666418858322]),
            {
              "Class": 4,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([20.999588946828425, 38.7558610027882]),
            {
              "Class": 4,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([21.03237626982647, 38.69707005529433]),
            {
              "Class": 4,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([21.0037088198753, 38.76804168296958]),
            {
              "Class": 4,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([21.05211732817608, 38.725199323148715]),
            {
              "Class": 4,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([21.55377535981962, 39.13730328545494]),
            {
              "Class": 4,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([21.55652194185087, 39.1121340660576]),
            {
              "Class": 4,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([21.54227404756376, 39.189477436452755]),
            {
              "Class": 4,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([21.57900958223173, 39.20943179682614]),
            {
              "Class": 4,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([21.499702026079387, 39.205042323844]),
            {
              "Class": 4,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([21.508285094927043, 39.20051954960323]),
            {
              "Class": 4,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([21.5608134762747, 39.11772800310759]),
            {
              "Class": 4,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([20.97728287669448, 39.360914494939394]),
            {
              "Class": 4,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([20.966124887192528, 39.34857018335032]),
            {
              "Class": 4,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([20.95805680247573, 39.39262804263264]),
            {
              "Class": 4,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([20.972648019516747, 39.41093306944]),
            {
              "Class": 4,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([20.970759744370262, 39.3437911546147]),
            {
              "Class": 4,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([20.813861245835106, 39.348702929483494]),
            {
              "Class": 4,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([20.97882782908706, 39.373389324583016]),
            {
              "Class": 4,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([20.971618051255028, 39.39647514985545]),
            {
              "Class": 4,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([21.208591273757005, 39.45259773333261]),
            {
              "Class": 4,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([21.212281993361497, 39.457899468607074]),
            {
              "Class": 4,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([21.135721019240403, 39.47559108743035]),
            {
              "Class": 4,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([21.15580540034392, 39.42992826274161]),
            {
              "Class": 4,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([21.154174617262864, 39.44888627840488]),
            {
              "Class": 4,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([21.17176990840056, 39.403736505797255]),
            {
              "Class": 4,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([21.181554606886888, 39.40698614446706]),
            {
              "Class": 4,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([21.202840617629075, 39.47154957842367]),
            {
              "Class": 4,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([21.125163844557786, 39.47260966907431]),
            {
              "Class": 4,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([21.143703273268724, 39.45637526106996]),
            {
              "Class": 4,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([21.17623310420134, 39.4070524620469]),
            {
              "Class": 4,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([21.154174617262864, 39.44000449390501]),
            {
              "Class": 4,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([21.16704922053435, 39.43649123668564]),
            {
              "Class": 4,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([20.839642019474095, 39.9511504427124]),
            {
              "Class": 4,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([20.84771010419089, 39.960558786008825]),
            {
              "Class": 4,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([20.823849172794407, 39.966018979026494]),
            {
              "Class": 4,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([20.807884664737767, 39.9158740866446]),
            {
              "Class": 4,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([20.75733038922507, 39.9543744263918]),
            {
              "Class": 4,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([20.820158453189915, 39.941477579893565]),
            {
              "Class": 4,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([20.85998389264304, 39.946478686530995]),
            {
              "Class": 4,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([20.884617300235814, 39.926932811222855]),
            {
              "Class": 4,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([20.886505575382298, 39.93028957064286]),
            {
              "Class": 4,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([20.837324590885228, 39.94687349516983]),
            {
              "Class": 4,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([20.80977293988425, 39.932132427390975]),
            {
              "Class": 4,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([20.791233511173314, 39.95141363074997]),
            {
              "Class": 4,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([20.78204962750632, 39.96147981299395]),
            {
              "Class": 4,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([20.741022558414524, 39.94963709184422]),
            {
              "Class": 4,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([20.764007317548504, 39.98195025990056]),
            {
              "Class": 4,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([20.769414650922528, 39.956690873186425]),
            {
              "Class": 4,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([20.80882149296308, 39.96541635213905]),
            {
              "Class": 4,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([20.805705494948548, 39.94187383825375]),
            {
              "Class": 4,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([25.604727090437127, 40.45135104909878]),
            {
              "Class": 4,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([25.608331979353142, 40.46297584183245]),
            {
              "Class": 4,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([25.550396264631463, 40.473423377128526]),
            {
              "Class": 4,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([25.571596444685174, 40.46611027307012]),
            {
              "Class": 4,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([25.601551354963494, 40.458926985004254]),
            {
              "Class": 4,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([25.611078561384392, 40.44978350743672]),
            {
              "Class": 4,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([25.610306085188103, 40.45716369688526]),
            {
              "Class": 4,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([25.593740762312127, 40.438940343224985]),
            {
              "Class": 4,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([25.611936868269158, 40.4335181051903]),
            {
              "Class": 4,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([25.595972360212517, 40.42992481500791]),
            {
              "Class": 4,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([25.626785577375603, 40.47074635108298]),
            {
              "Class": 4,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([25.55666190489025, 40.47179105687135]),
            {
              "Class": 4,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([25.617773355085564, 40.43031681963099]),
            {
              "Class": 4,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([26.317983820319835, 36.57617797613148]),
            {
              "Class": 4,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([26.30459423291749, 36.57893503281088]),
            {
              "Class": 4,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([26.292749597907726, 36.55273901986934]),
            {
              "Class": 4,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([26.287943079353038, 36.54770561073367]),
            {
              "Class": 4,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([26.28339405286378, 36.546671307985]),
            {
              "Class": 4,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([26.299959375739757, 36.53901703751665]),
            {
              "Class": 4,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([26.29017467725343, 36.532879282267615]),
            {
              "Class": 4,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([26.272751047492687, 36.55418692616763]),
            {
              "Class": 4,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([26.290947153449718, 36.55687582303473]),
            {
              "Class": 4,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([26.305023386359874, 36.53867223272173]),
            {
              "Class": 4,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([26.295839502692882, 36.54908465953654]),
            {
              "Class": 4,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([26.301675989509288, 36.53108613822725]),
            {
              "Class": 4,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([26.297212793708507, 36.53825846493819]),
            {
              "Class": 4,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([26.29043216931886, 36.52839634421613]),
            {
              "Class": 4,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([26.3298284553296, 36.57541976828562]),
            {
              "Class": 4,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([26.297556116462413, 36.588239372253845]),
            {
              "Class": 4,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([26.307512476325694, 36.521016172602764]),
            {
              "Class": 4,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([26.2913763068921, 36.5827258249951]),
            {
              "Class": 4,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([26.288801386237804, 36.589342034446]),
            {
              "Class": 4,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([26.28562565076417, 36.58803262133901]),
            {
              "Class": 4,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([26.31163234937257, 36.577763295751254]),
            {
              "Class": 4,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([26.32888431775636, 36.57100822951583]),
            {
              "Class": 4,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([26.32038707959718, 36.573007239245904]),
            {
              "Class": 4,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([26.320987894416515, 36.576522613600275]),
            {
              "Class": 4,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([21.562401597435077, 39.1528070782583]),
            {
              "Class": 4,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([21.558968369896014, 39.157466031519796]),
            {
              "Class": 4,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([21.552788560325702, 39.140159793044745]),
            {
              "Class": 4,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([21.550213639671405, 39.13789635492546]),
            {
              "Class": 4,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([21.549183671409686, 39.136564886746086]),
            {
              "Class": 4,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([21.547982041771014, 39.21148734262101]),
            {
              "Class": 4,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([21.553475205833514, 39.21454642049481]),
            {
              "Class": 4,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([21.58677751296242, 39.20603387328273]),
            {
              "Class": 4,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([21.57252961867531, 39.19432743609047]),
            {
              "Class": 4,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([21.568238084251483, 39.20403859576964]),
            {
              "Class": 4,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([21.563431565696796, 39.20390557525349]),
            {
              "Class": 4,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([21.574246232444843, 39.21255138482301]),
            {
              "Class": 4,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([21.562229936058124, 39.21866931459132]),
            {
              "Class": 4,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([21.529270951683124, 39.212152370886685]),
            {
              "Class": 4,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([21.533047501976093, 39.191134432853275]),
            {
              "Class": 4,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([21.53012925856789, 39.18794128453014]),
            {
              "Class": 4,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([21.259712480002857, 38.76851023008697]),
            {
              "Class": 4,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([21.23945643752239, 38.767439491452166]),
            {
              "Class": 4,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([21.25215937941692, 38.781357840205736]),
            {
              "Class": 4,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([21.260742448264576, 38.75686508457757]),
            {
              "Class": 4,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([21.262287400657154, 38.76462872607871]),
            {
              "Class": 4,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([21.155685685569264, 38.80343426275444]),
            {
              "Class": 4,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([21.196541093284107, 38.822160410546424]),
            {
              "Class": 4,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([21.196369431907154, 38.83045184589806]),
            {
              "Class": 4,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([21.193622849875904, 38.835934361423256]),
            {
              "Class": 4,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([21.189674638205982, 38.84422419249308]),
            {
              "Class": 4,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([21.18349482863567, 38.842619784430255]),
            {
              "Class": 4,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([21.154655717307545, 38.833661174527315]),
            {
              "Class": 4,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([21.133198045188404, 38.83272513529119]),
            {
              "Class": 4,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([21.225036881858326, 38.79246380436014]),
            {
              "Class": 4,
              "system:index": "156"
            })]),
    Sclerophyllous = 
    /* color: #a6e64d */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([22.60014897243932, 37.06475937364912]),
            {
              "Class": 5,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([22.62289410488561, 37.047498180016845]),
            {
              "Class": 5,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([22.63911610500768, 37.05626626113672]),
            {
              "Class": 5,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([22.657655533718618, 37.057636182301636]),
            {
              "Class": 5,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([22.667440232204946, 37.06578670182736]),
            {
              "Class": 5,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([22.629932221340688, 37.0709916174233]),
            {
              "Class": 5,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([22.63739949123815, 37.04030485716724]),
            {
              "Class": 5,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([22.605985459255727, 37.06982739100033]),
            {
              "Class": 5,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([22.655252274441274, 37.032631228191065]),
            {
              "Class": 5,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([22.67954235928014, 37.05030681627371]),
            {
              "Class": 5,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([22.651304062771352, 37.06962193742339]),
            {
              "Class": 5,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([22.831214429774906, 37.172209079243686]),
            {
              "Class": 5,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([22.77748441878858, 37.15086780192004]),
            {
              "Class": 5,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([22.76100492660108, 37.16413840719543]),
            {
              "Class": 5,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([22.756885053554203, 37.170499263058225]),
            {
              "Class": 5,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([22.753880979457524, 37.17761184408756]),
            {
              "Class": 5,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([22.747787000575688, 37.18356127732998]),
            {
              "Class": 5,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([22.746413709560063, 37.169883719760385]),
            {
              "Class": 5,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([22.770274640956547, 37.15490395414071]),
            {
              "Class": 5,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([22.825549604335453, 37.182877458263484]),
            {
              "Class": 5,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([22.860225202479985, 37.15066256808513]),
            {
              "Class": 5,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([22.88751936141553, 37.14601045175973]),
            {
              "Class": 5,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([22.539640717916736, 37.18570735619884]),
            {
              "Class": 5,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([22.519384675436267, 37.193980841105564]),
            {
              "Class": 5,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([22.521272950582752, 37.18926301450507]),
            {
              "Class": 5,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([22.187660231139706, 37.198077332929685]),
            {
              "Class": 5,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([22.18156625225787, 37.20272624454686]),
            {
              "Class": 5,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([22.181652082946346, 37.212570053369156]),
            {
              "Class": 5,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([22.19057847454791, 37.195274174331054]),
            {
              "Class": 5,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([22.121330624776192, 37.17397731076795]),
            {
              "Class": 5,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([22.11665285225422, 37.16713797394043]),
            {
              "Class": 5,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([22.119571095662423, 37.16118724737104]),
            {
              "Class": 5,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([22.1196569263509, 37.164470464794654]),
            {
              "Class": 5,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([22.137466794209786, 37.17107066825333]),
            {
              "Class": 5,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([22.14081419106037, 37.17202816284318]),
            {
              "Class": 5,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([22.115966206746407, 37.17944833451996]),
            {
              "Class": 5,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([22.10841310616047, 37.18252561126626]),
            {
              "Class": 5,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([22.10661066170246, 37.176815453794546]),
            {
              "Class": 5,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([22.12141645546467, 37.18050829955309]),
            {
              "Class": 5,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([22.122832661824532, 37.16850589082751]),
            {
              "Class": 5,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([22.133733159261055, 37.16139245263808]),
            {
              "Class": 5,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([22.07687560258314, 37.19259831734251]),
            {
              "Class": 5,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([22.080673610548228, 37.19367519094038]),
            {
              "Class": 5,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([22.070567046980113, 37.19439309813947]),
            {
              "Class": 5,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([22.073785697797984, 37.19229063635065]),
            {
              "Class": 5,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([21.433228439873062, 38.782987953733326]),
            {
              "Class": 5,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([21.433915085380875, 38.77910723750707]),
            {
              "Class": 5,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([21.45502943474611, 38.800047217852004]),
            {
              "Class": 5,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([21.42404455620607, 38.77602927791949]),
            {
              "Class": 5,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([21.429795212334, 38.777434449862575]),
            {
              "Class": 5,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([21.458548492973648, 38.7985755991224]),
            {
              "Class": 5,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([21.496313995903336, 38.780445439372286]),
            {
              "Class": 5,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([21.451853699272476, 38.82024545748201]),
            {
              "Class": 5,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([21.459320969169937, 38.82425767080994]),
            {
              "Class": 5,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([21.425589508598648, 38.82285342186153]),
            {
              "Class": 5,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([21.441124863212906, 38.820981046849845]),
            {
              "Class": 5,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([21.467303223198257, 38.79944519568121]),
            {
              "Class": 5,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([21.47597212273439, 38.806134045219835]),
            {
              "Class": 5,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([21.469105667656265, 38.78245269508565]),
            {
              "Class": 5,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([21.17431612978082, 40.25488404827569]),
            {
              "Class": 5,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([21.17204161653619, 40.25318092178334]),
            {
              "Class": 5,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([21.469267344275877, 40.30983428848424]),
            {
              "Class": 5,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([21.47145602683203, 40.30593985251828]),
            {
              "Class": 5,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([21.471885180274413, 40.312517718723214]),
            {
              "Class": 5,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([21.455791926185057, 40.30067055232883]),
            {
              "Class": 5,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([21.459868883887694, 40.317687929988764]),
            {
              "Class": 5,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([21.44622180441992, 40.31366305282064]),
            {
              "Class": 5,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([21.481240725318358, 40.318211473612564]),
            {
              "Class": 5,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([23.205422298753867, 40.82036785134854]),
            {
              "Class": 5,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([23.200487034166464, 40.819426019408255]),
            {
              "Class": 5,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([23.2175673411733, 40.82588866616301]),
            {
              "Class": 5,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([23.233875171983847, 40.819166201347194]),
            {
              "Class": 5,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([23.222760097826132, 40.82936329630216]),
            {
              "Class": 5,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([23.195980923021445, 40.82137462242747]),
            {
              "Class": 5,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([23.186282055223593, 40.817087620222395]),
            {
              "Class": 5,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([23.216151134813437, 40.813774746936495]),
            {
              "Class": 5,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([23.224390880907187, 40.81435938365508]),
            {
              "Class": 5,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([23.246106045091757, 40.81819187455456]),
            {
              "Class": 5,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([23.17314995988668, 40.81689274990272]),
            {
              "Class": 5,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([23.254060454640758, 40.81870556732083]),
            {
              "Class": 5,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([23.25174302605189, 40.82367444585894]),
            {
              "Class": 5,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([23.313824400453672, 40.8211181361485]),
            {
              "Class": 5,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([23.322707876710997, 40.820566035636745]),
            {
              "Class": 5,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([23.96099837230528, 40.85812701430967]),
            {
              "Class": 5,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([23.9565351765045, 40.853193178393354]),
            {
              "Class": 5,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([23.974044636953717, 40.85845159589538]),
            {
              "Class": 5,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([23.96846564220274, 40.85488111097878]),
            {
              "Class": 5,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([23.977907017935163, 40.84845375318188]),
            {
              "Class": 5,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([24.026229695547467, 40.85202458448836]),
            {
              "Class": 5,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([24.02365477489317, 40.85721817740856]),
            {
              "Class": 5,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([23.991639928091413, 40.84241536427036]),
            {
              "Class": 5,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([24.000566319692975, 40.836051735444045]),
            {
              "Class": 5,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([23.964860753286725, 40.84163617723777]),
            {
              "Class": 5,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([23.963144139517194, 40.83819465827206]),
            {
              "Class": 5,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([23.948638753164655, 40.84209070412]),
            {
              "Class": 5,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([23.947608784902936, 40.85273872765729]),
            {
              "Class": 5,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([24.046228245962507, 40.85202458448836]),
            {
              "Class": 5,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([24.043481663931257, 40.85825684713481]),
            {
              "Class": 5,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([23.974817113150007, 40.88077899000304]),
            {
              "Class": 5,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([25.99940062603269, 41.19514528919513]),
            {
              "Class": 5,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([26.00182534298215, 41.19701822971212]),
            {
              "Class": 5,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([26.005022536127903, 41.20032803665458]),
            {
              "Class": 5,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([25.98734141430173, 41.200457196459055]),
            {
              "Class": 5,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([25.98912240108762, 41.20208781706759]),
            {
              "Class": 5,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([25.99483014187131, 41.19288477237474]),
            {
              "Class": 5,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([25.925534407903104, 41.22031288828866]),
            {
              "Class": 5,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([25.918818156529813, 41.22329873132684]),
            {
              "Class": 5,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([25.98470626513098, 41.28011800190794]),
            {
              "Class": 5,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([25.991830212274536, 41.28360097221296]),
            {
              "Class": 5,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([25.98444877306555, 41.28489091404131]),
            {
              "Class": 5,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([25.981573445001587, 41.27631232185132]),
            {
              "Class": 5,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([25.97500739733313, 41.29540298915109]),
            {
              "Class": 5,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([25.94965366692404, 41.29185977409658]),
            {
              "Class": 5,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([25.962485354851285, 41.28728085427054]),
            {
              "Class": 5,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([25.941714328239957, 41.29086017817477]),
            {
              "Class": 5,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([25.950984042595426, 41.29463276647136]),
            {
              "Class": 5,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([25.955018084953824, 41.27779953402897]),
            {
              "Class": 5,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([25.95961002678732, 41.28354008972917]),
            {
              "Class": 5,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([25.96364406914572, 41.28366908517984]),
            {
              "Class": 5,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([25.977763217400113, 41.27879933004154]),
            {
              "Class": 5,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([25.970982593010465, 41.2763804424254]),
            {
              "Class": 5,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([25.575364369579468, 41.22938440436653]),
            {
              "Class": 5,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([25.563133496471558, 41.22547893489406]),
            {
              "Class": 5,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([25.556224126049194, 41.22983626181079]),
            {
              "Class": 5,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([25.546654004284058, 41.225156158385936]),
            {
              "Class": 5,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([25.531976956554566, 41.23461284949974]),
            {
              "Class": 5,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([25.550044316478882, 41.224671990636324]),
            {
              "Class": 5,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([25.55532290382019, 41.23667829284059]),
            {
              "Class": 5,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([25.55096362331006, 41.22271153312342]),
            {
              "Class": 5,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([25.47815812619602, 37.06861710038651]),
            {
              "Class": 5,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([25.479531417211646, 37.07176736914352]),
            {
              "Class": 5,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([25.458846221288795, 37.076287091399095]),
            {
              "Class": 5,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([25.462365279516334, 37.086284307744]),
            {
              "Class": 5,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([25.518756041845435, 37.04108092267424]),
            {
              "Class": 5,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([25.481076369604224, 37.04642454441045]),
            {
              "Class": 5,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([25.499615798315162, 37.09292556500818]),
            {
              "Class": 5,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([25.424170623144263, 37.0725206748937]),
            {
              "Class": 5,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([27.80924520719064, 36.02309356932979]),
            {
              "Class": 5,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([27.866837599158412, 36.038572295061584]),
            {
              "Class": 5,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([27.892672636389857, 36.04051559725838]),
            {
              "Class": 5,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([27.896706678748256, 36.04197304243409]),
            {
              "Class": 5,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([27.88460455167306, 36.00948643812118]),
            {
              "Class": 5,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([27.900225736975795, 36.03794765202801]),
            {
              "Class": 5,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([27.845036604285365, 36.014276971640356]),
            {
              "Class": 5,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([27.817313291907436, 36.00615372135853]),
            {
              "Class": 5,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([27.826325514197475, 36.002612555434844]),
            {
              "Class": 5,
              "system:index": "145"
            })]),
    Mixed = 
    /* color: #4dff00 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([22.75293684188428, 37.18868972298701]),
            {
              "Class": 6,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([22.753108503261235, 37.192587108769274]),
            {
              "Class": 6,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([22.754910947719242, 37.190604253420844]),
            {
              "Class": 6,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([22.7594599742085, 37.18096273194137]),
            {
              "Class": 6,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([22.74727201644483, 37.19251873531372]),
            {
              "Class": 6,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([22.518526368551502, 37.29100555100754]),
            {
              "Class": 6,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([22.509514146261463, 37.28602063922471]),
            {
              "Class": 6,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([22.50857000868822, 37.28322074942169]),
            {
              "Class": 6,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([22.49337797682787, 37.25528443904578]),
            {
              "Class": 6,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([22.48736982863451, 37.25555770498202]),
            {
              "Class": 6,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([22.644354157858142, 37.25289331982084]),
            {
              "Class": 6,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([22.539469056539783, 37.28588406165119]),
            {
              "Class": 6,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([22.507282548361072, 37.283562204975034]),
            {
              "Class": 6,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([22.56024008315111, 37.299950249513984]),
            {
              "Class": 6,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([22.19924737408404, 37.20299970101949]),
            {
              "Class": 6,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([22.27640916302447, 37.17537559444118]),
            {
              "Class": 6,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([22.270143522765682, 37.19069317894699]),
            {
              "Class": 6,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([22.27022935345416, 37.16374856868141]),
            {
              "Class": 6,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([22.194870008971737, 37.20559748809537]),
            {
              "Class": 6,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([22.19255258038287, 37.20129058181112]),
            {
              "Class": 6,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([22.131956114318417, 37.20928892643717]),
            {
              "Class": 6,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([22.280614866759823, 37.175717538704504]),
            {
              "Class": 6,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([22.09794176216633, 37.17401150589677]),
            {
              "Class": 6,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([22.09613931770832, 37.17507154721408]),
            {
              "Class": 6,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([22.083994275288887, 37.173361795802705]),
            {
              "Class": 6,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([22.08219183083088, 37.17127584668684]),
            {
              "Class": 6,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([22.078329449849434, 37.16901885327663]),
            {
              "Class": 6,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([22.16978204842121, 37.160708432914866]),
            {
              "Class": 6,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([22.092217838148326, 37.19126502398931]),
            {
              "Class": 6,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([21.956334814999078, 38.78057415051773]),
            {
              "Class": 6,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([21.96474622246978, 38.78418716359872]),
            {
              "Class": 6,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([21.974187598202203, 38.77455205524193]),
            {
              "Class": 6,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([21.980882391903375, 38.779905053931714]),
            {
              "Class": 6,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([21.737123236629937, 38.83394781580043]),
            {
              "Class": 6,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([21.886296973202203, 38.854403801625885]),
            {
              "Class": 6,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([21.88561032769439, 38.848521636939616]),
            {
              "Class": 6,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([21.95581983086822, 38.790074644509424]),
            {
              "Class": 6,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([21.461638397758804, 38.807271087196]),
            {
              "Class": 6,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([21.454428619926773, 38.80513075781793]),
            {
              "Class": 6,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([21.438120789116226, 38.7902804524811]),
            {
              "Class": 6,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([21.443871445244156, 38.80526453028781]),
            {
              "Class": 6,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([21.435202545708023, 38.78994595051344]),
            {
              "Class": 6,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([21.44876379448732, 38.80513075781793]),
            {
              "Class": 6,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([21.428593582695328, 38.783523208363015]),
            {
              "Class": 6,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([20.99455966872389, 39.92360678663267]),
            {
              "Class": 6,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([21.011897467796157, 39.97756088027019]),
            {
              "Class": 6,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([20.964175605003188, 39.91439085918262]),
            {
              "Class": 6,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([20.978251837913344, 39.9125475248603]),
            {
              "Class": 6,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([21.068545722190688, 39.98663677538016]),
            {
              "Class": 6,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([21.097384833518813, 40.00386450530215]),
            {
              "Class": 6,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([21.098758124534438, 39.999262102142765]),
            {
              "Class": 6,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([20.984774970237563, 39.92531817945643]),
            {
              "Class": 6,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([21.01481571120436, 39.97835013639862]),
            {
              "Class": 6,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([20.755112157338736, 40.11949867747807]),
            {
              "Class": 6,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([20.72077988194811, 40.10256276155675]),
            {
              "Class": 6,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([20.763180242055533, 40.1177921483487]),
            {
              "Class": 6,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([20.729706273549674, 40.090481857781874]),
            {
              "Class": 6,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([20.824978337758658, 40.1616232330597]),
            {
              "Class": 6,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([20.67786453770983, 40.084309264025826]),
            {
              "Class": 6,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([20.76575516270983, 40.12396170501632]),
            {
              "Class": 6,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([20.7140461877707, 40.14893792793819]),
            {
              "Class": 6,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([20.722929664028023, 40.14982360971893]),
            {
              "Class": 6,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([20.7319848016623, 40.16641980596465]),
            {
              "Class": 6,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([20.725290007961128, 40.154317446706685]),
            {
              "Class": 6,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([20.725933738124702, 40.15054526781608]),
            {
              "Class": 6,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([20.750781722438667, 40.14552630501424]),
            {
              "Class": 6,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([21.17427321443658, 40.25858492537128]),
            {
              "Class": 6,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([21.17882224092584, 40.258486674612705]),
            {
              "Class": 6,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([21.165218076802304, 40.26556036455527]),
            {
              "Class": 6,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([21.161956510640195, 40.266771987243914]),
            {
              "Class": 6,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([21.16410227785211, 40.25740590685197]),
            {
              "Class": 6,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([21.187877378560117, 40.27682434377547]),
            {
              "Class": 6,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([21.15762206087213, 40.2683765352396]),
            {
              "Class": 6,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([21.19405718813043, 40.261696125599265]),
            {
              "Class": 6,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([23.256077475819957, 40.835429395146335]),
            {
              "Class": 6,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([23.275003142629036, 40.835072231253996]),
            {
              "Class": 6,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([23.28410119560755, 40.84228007553167]),
            {
              "Class": 6,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([23.29410047081507, 40.8400074164438]),
            {
              "Class": 6,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([23.29538793114222, 40.83776714765175]),
            {
              "Class": 6,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([23.30238313225306, 40.830104206694486]),
            {
              "Class": 6,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([23.31736058739222, 40.83383837754801]),
            {
              "Class": 6,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([23.29886407402552, 40.84260473475441]),
            {
              "Class": 6,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([23.262428946767223, 40.845266880394036]),
            {
              "Class": 6,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([23.258866973195445, 40.84042948759504]),
            {
              "Class": 6,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([23.28092546013392, 40.845461667339904]),
            {
              "Class": 6,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([23.280839629445442, 40.830071734721265]),
            {
              "Class": 6,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([23.290323920522102, 40.84429293707677]),
            {
              "Class": 6,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([23.30289811638392, 40.84487730478469]),
            {
              "Class": 6,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([23.299722380910286, 40.844942234211956]),
            {
              "Class": 6,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([23.33064721539508, 40.83069797205839]),
            {
              "Class": 6,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([23.32360909894, 40.83810110050926]),
            {
              "Class": 6,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([23.320476278810606, 40.84160755702662]),
            {
              "Class": 6,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([23.368507548190085, 40.84016966612849]),
            {
              "Class": 6,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([23.370052500582663, 40.844682430435526]),
            {
              "Class": 6,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([23.36786381802651, 40.84825346496915]),
            {
              "Class": 6,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([23.382283373690573, 40.84325396274143]),
            {
              "Class": 6,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([23.38884942135903, 40.84448764119931]),
            {
              "Class": 6,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([23.63011388807098, 40.79841482187133]),
            {
              "Class": 6,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([23.696890163705746, 40.802183262486516]),
            {
              "Class": 6,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([23.653717327402035, 40.78268901970263]),
            {
              "Class": 6,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([23.687105465219418, 40.80738076054108]),
            {
              "Class": 6,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([23.644962597177425, 40.80764062475891]),
            {
              "Class": 6,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([23.651914882944027, 40.80400243310657]),
            {
              "Class": 6,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([23.681612301156918, 40.79886964502208]),
            {
              "Class": 6,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([23.722296047494808, 40.80276800133788]),
            {
              "Class": 6,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([23.714828777597347, 40.80114371403086]),
            {
              "Class": 6,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([23.58968763379852, 40.795295950602686]),
            {
              "Class": 6,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([23.97919447826231, 40.86364468496451]),
            {
              "Class": 6,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([23.98897917674864, 40.866111259638245]),
            {
              "Class": 6,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([23.97370131419981, 40.87344553101911]),
            {
              "Class": 6,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([23.98717673229063, 40.85864634408339]),
            {
              "Class": 6,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([23.961170033682233, 40.86890227281644]),
            {
              "Class": 6,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([23.99318488048399, 40.88246621957884]),
            {
              "Class": 6,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([24.00391371654356, 40.842804954351585]),
            {
              "Class": 6,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([24.023826436270124, 40.863385040181115]),
            {
              "Class": 6,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([24.058072880972272, 40.87415944325013]),
            {
              "Class": 6,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([25.98585916002749, 41.096059579451364]),
            {
              "Class": 6,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([25.995815519890773, 41.11313360452232]),
            {
              "Class": 6,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([25.990837339959132, 41.12761717465719]),
            {
              "Class": 6,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([26.005943541131007, 41.14636347753871]),
            {
              "Class": 6,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([26.027229551873194, 41.134599182508346]),
            {
              "Class": 6,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([26.0110933824396, 41.116237495760174]),
            {
              "Class": 6,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([25.982597593865382, 41.139382721869055]),
            {
              "Class": 6,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([25.984485869011866, 41.11559086385492]),
            {
              "Class": 6,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([26.0275728746271, 41.1570917087022]),
            {
              "Class": 6,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([26.13348794420718, 41.069922552874836]),
            {
              "Class": 6,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([26.011436705193507, 41.06720474075024]),
            {
              "Class": 6,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([26.002166990838038, 41.06306309673671]),
            {
              "Class": 6,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([25.985515837273585, 41.11028824196368]),
            {
              "Class": 6,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([26.166790251336085, 41.07173436521396]),
            {
              "Class": 6,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([25.998218779168116, 41.05594403665196]),
            {
              "Class": 6,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([25.97418618639468, 41.073804946749675]),
            {
              "Class": 6,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([25.9891207261896, 41.10731341289111]),
            {
              "Class": 6,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([26.09300945330825, 41.177004519636824]),
            {
              "Class": 6,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([26.1148104481813, 41.20568195977398]),
            {
              "Class": 6,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([25.959099678810723, 41.2015016944785]),
            {
              "Class": 6,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([25.98768129807342, 41.17372691606299]),
            {
              "Class": 6,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([26.05008020859588, 41.16997964886206]),
            {
              "Class": 6,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([25.92888264031271, 41.286603662794036]),
            {
              "Class": 6,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([25.93261627526144, 41.29798599513291]),
            {
              "Class": 6,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([25.93437580437521, 41.29824392865894]),
            {
              "Class": 6,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([25.935062449883024, 41.281218128013776]),
            {
              "Class": 6,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([25.92986969323019, 41.28163737721309]),
            {
              "Class": 6,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([25.925835650871793, 41.27318737351094]),
            {
              "Class": 6,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([25.924548190544645, 41.27654170438871]),
            {
              "Class": 6,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([25.90042976708273, 41.294020138765504]),
            {
              "Class": 6,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([25.9166517672048, 41.2846042945712]),
            {
              "Class": 6,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([25.89373497338156, 41.280411871983546]),
            {
              "Class": 6,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([25.88472275109152, 41.28666815752319]),
            {
              "Class": 6,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([25.557690872279146, 41.285631222430084]),
            {
              "Class": 6,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([25.56953550728891, 41.28627617646469]),
            {
              "Class": 6,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([25.56661726388071, 41.263828026987746]),
            {
              "Class": 6,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([25.586358322230318, 41.26498932748944]),
            {
              "Class": 6,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([25.593739761439302, 41.24885830536299]),
            {
              "Class": 6,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([25.641804946986177, 41.27544010262186]),
            {
              "Class": 6,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([25.492802871790865, 41.22484797054434]),
            {
              "Class": 6,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([25.48765303048227, 41.21593866810737]),
            {
              "Class": 6,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([25.553914321986177, 41.28511525461251]),
            {
              "Class": 6,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([25.630303634730318, 41.2325942035006]),
            {
              "Class": 6,
              "system:index": "158"
            })]),
    Coniferous = 
    /* color: #00a600 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([22.540842347555408, 37.197604478753675]),
            {
              "Class": 7,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([22.58023863356615, 37.217838954767124]),
            {
              "Class": 7,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([22.620064073019275, 37.220572927265394]),
            {
              "Class": 7,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([22.58401518385912, 37.2194110010613]),
            {
              "Class": 7,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([22.524362855367908, 37.20840598902903]),
            {
              "Class": 7,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([22.619034104757556, 37.21893255565733]),
            {
              "Class": 7,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([22.64916067641283, 37.19644219883225]),
            {
              "Class": 7,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([22.647529893331775, 37.20115957684204]),
            {
              "Class": 7,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([22.647014909200916, 37.204372694517]),
            {
              "Class": 7,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([22.61920576613451, 37.191382654228335]),
            {
              "Class": 7,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([22.61517172377611, 37.20102284539617]),
            {
              "Class": 7,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([22.55603437941576, 37.21599346731412]),
            {
              "Class": 7,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([22.598863892965564, 37.225630515153625]),
            {
              "Class": 7,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([22.607618623190174, 37.22460535582549]),
            {
              "Class": 7,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([22.562214188986072, 37.22692903029737]),
            {
              "Class": 7,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([22.54624968092943, 37.21168715435415]),
            {
              "Class": 7,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([22.60246878188158, 37.19705752572558]),
            {
              "Class": 7,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([22.58950834792162, 37.25466958706499]),
            {
              "Class": 7,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([22.589165025167713, 37.26197916911955]),
            {
              "Class": 7,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([22.583929353170642, 37.25214180953337]),
            {
              "Class": 7,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([22.619034104757556, 37.24640275651902]),
            {
              "Class": 7,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([22.626587205343494, 37.24954562540916]),
            {
              "Class": 7,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([22.61199598830248, 37.26341367672082]),
            {
              "Class": 7,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([22.581697755270252, 37.276664502372185]),
            {
              "Class": 7,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([22.574402146749744, 37.27639131301829]),
            {
              "Class": 7,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([22.57122641127611, 37.27174694231139]),
            {
              "Class": 7,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([22.57002478163744, 37.27871339092339]),
            {
              "Class": 7,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([22.583328538351306, 37.25890513225328]),
            {
              "Class": 7,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([22.569938950948963, 37.28554261663292]),
            {
              "Class": 7,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([22.569853120260486, 37.28404024014696]),
            {
              "Class": 7,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([22.53303175490404, 37.274410660552]),
            {
              "Class": 7,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([22.53655081313158, 37.28151344841625]),
            {
              "Class": 7,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([22.555433564596424, 37.29168838991614]),
            {
              "Class": 7,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([22.605043702535877, 37.2909372667758]),
            {
              "Class": 7,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([22.6089919142058, 37.292712636658685]),
            {
              "Class": 7,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([22.248342527892635, 37.17503364863024]),
            {
              "Class": 7,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([22.22679902508502, 37.167373656872755]),
            {
              "Class": 7,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([22.21873094036822, 37.210861150896015]),
            {
              "Class": 7,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([22.207229628112362, 37.20853698142021]),
            {
              "Class": 7,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([22.239931120421932, 37.21072443702614]),
            {
              "Class": 7,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([22.25194741680865, 37.18809487894015]),
            {
              "Class": 7,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([22.25426484539752, 37.17831626452847]),
            {
              "Class": 7,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([22.239845289733456, 37.16600571949152]),
            {
              "Class": 7,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([21.800294623348687, 38.79783467193809]),
            {
              "Class": 7,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([21.853509650204156, 38.81495725994354]),
            {
              "Class": 7,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([21.84269498345611, 38.78820140786618]),
            {
              "Class": 7,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([21.88835690972564, 38.81107828415321]),
            {
              "Class": 7,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([21.812310919735406, 38.8471847134914]),
            {
              "Class": 7,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([21.710172400448297, 38.847452100191006]),
            {
              "Class": 7,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([21.724935278866266, 38.851863835638696]),
            {
              "Class": 7,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([21.729570136044, 38.78994084352442]),
            {
              "Class": 7,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([21.75257276055572, 38.820842199119106]),
            {
              "Class": 7,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([21.75549100396392, 38.82833141835766]),
            {
              "Class": 7,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([21.923719153377984, 38.83822667831332]),
            {
              "Class": 7,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([21.954446539852594, 38.814422241359075]),
            {
              "Class": 7,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([21.95530484673736, 38.82980242242461]),
            {
              "Class": 7,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([21.94431851861236, 38.83956377009107]),
            {
              "Class": 7,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([21.912217841122125, 38.859884471810325]),
            {
              "Class": 7,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([21.774202094051812, 38.75206507362089]),
            {
              "Class": 7,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([21.696611151669, 38.84103454202943]),
            {
              "Class": 7,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([21.639619574520562, 38.7617032192006]),
            {
              "Class": 7,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([21.657815680477594, 38.78231377226055]),
            {
              "Class": 7,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([21.628804907772516, 38.78499003053339]),
            {
              "Class": 7,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([21.566663489315484, 38.83073850009545]),
            {
              "Class": 7,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([20.980655097190688, 39.939929099175046]),
            {
              "Class": 7,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([20.967265509788344, 39.93821807163196]),
            {
              "Class": 7,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([20.938254737083266, 39.93624375592074]),
            {
              "Class": 7,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([20.929843329612563, 39.91741908644115]),
            {
              "Class": 7,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([20.96760883254225, 39.975982340666484]),
            {
              "Class": 7,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([20.957309149925063, 39.98834659166536]),
            {
              "Class": 7,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([20.909072303001235, 39.965457811515535]),
            {
              "Class": 7,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([20.91971530837233, 39.94269297636904]),
            {
              "Class": 7,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([20.98082675856764, 39.9837431426365]),
            {
              "Class": 7,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([21.018420600120375, 39.92558146686316]),
            {
              "Class": 7,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([21.03781833571608, 39.975982340666484]),
            {
              "Class": 7,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([20.895854376975844, 39.999262102142765]),
            {
              "Class": 7,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([21.064597510520766, 39.95137872072737]),
            {
              "Class": 7,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([21.078673743430922, 39.97769242359128]),
            {
              "Class": 7,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([21.129657172386, 39.968615340411205]),
            {
              "Class": 7,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([21.144763373557875, 39.94716758845661]),
            {
              "Class": 7,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([21.13669528884108, 39.95295782849223]),
            {
              "Class": 7,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([20.93791141432936, 39.955326421782615]),
            {
              "Class": 7,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([21.028205298606704, 39.9412452450957]),
            {
              "Class": 7,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([21.141845130149672, 39.9138641972956]),
            {
              "Class": 7,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([20.829613194936393, 40.18011828633219]),
            {
              "Class": 7,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([20.941364751332877, 40.175658947388925]),
            {
              "Class": 7,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([20.944111333364127, 40.17500313753223]),
            {
              "Class": 7,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([20.91407059239733, 40.12133643018046]),
            {
              "Class": 7,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([20.898449407094596, 40.11280358686166]),
            {
              "Class": 7,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([20.843861089223502, 40.10623913264446]),
            {
              "Class": 7,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([20.74245614565644, 40.15753183380221]),
            {
              "Class": 7,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([20.744601912868355, 40.15471105330147]),
            {
              "Class": 7,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([20.715161986720894, 40.15326781796738]),
            {
              "Class": 7,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([26.07128038864959, 41.19866016524831]),
            {
              "Class": 7,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([26.06930628281463, 41.19181415641518]),
            {
              "Class": 7,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([26.0470761344992, 41.189359752491036]),
            {
              "Class": 7,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([26.044501213844903, 41.19174956801707]),
            {
              "Class": 7,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([26.027935890968926, 41.18852006686728]),
            {
              "Class": 7,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([26.085957436379083, 41.218741964700996]),
            {
              "Class": 7,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([26.08973398667205, 41.17146565977676]),
            {
              "Class": 7,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([26.043213753517755, 41.19614143393085]),
            {
              "Class": 7,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([26.040982155617364, 41.20008094528453]),
            {
              "Class": 7,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([26.05651751023162, 41.2015016944785]),
            {
              "Class": 7,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([25.92639355034689, 41.27702548788815]),
            {
              "Class": 7,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([25.92841057152609, 41.276767470467995]),
            {
              "Class": 7,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([25.92793850273947, 41.2752193445284]),
            {
              "Class": 7,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([25.921501201103727, 41.28837724461681]),
            {
              "Class": 7,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([25.926779788445035, 41.29656734250651]),
            {
              "Class": 7,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([25.92467693657736, 41.29988823090854]),
            {
              "Class": 7,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([25.92291740746359, 41.30117785072416]),
            {
              "Class": 7,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([25.932573359917203, 41.30046856298135]),
            {
              "Class": 7,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([25.9227028307424, 41.29821168702398]),
            {
              "Class": 7,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([25.928067248772184, 41.27957335514597]),
            {
              "Class": 7,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([25.91892628044943, 41.292569155459134]),
            {
              "Class": 7,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([25.53712679786316, 41.24610104990794]),
            {
              "Class": 7,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([25.540045041271362, 41.24881145441855]),
            {
              "Class": 7,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([25.545666951366577, 41.24087352370308]),
            {
              "Class": 7,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([25.541032094188843, 41.24067990359064]),
            {
              "Class": 7,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([25.588668126293335, 41.2438745620935]),
            {
              "Class": 7,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([25.57210280341736, 41.24093806361307]),
            {
              "Class": 7,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([25.566223401256714, 41.24029266164495]),
            {
              "Class": 7,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([25.5140135119209, 41.222291905594126]),
            {
              "Class": 7,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([25.51628802516553, 41.223131157960104]),
            {
              "Class": 7,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([25.48893939735753, 41.231200342566595]),
            {
              "Class": 7,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([25.48941146614415, 41.23416955184235]),
            {
              "Class": 7,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([24.264350379489425, 41.52760076561169]),
            {
              "Class": 7,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([24.25877138473845, 41.52258860500139]),
            {
              "Class": 7,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([24.24821421005583, 41.514684024419516]),
            {
              "Class": 7,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([24.25997301437712, 41.53653173039599]),
            {
              "Class": 7,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([24.248042548678878, 41.501893268249376]),
            {
              "Class": 7,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([24.238944495700363, 41.51474829319494]),
            {
              "Class": 7,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([24.287095511935714, 41.487299722438]),
            {
              "Class": 7,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([24.309754813693527, 41.48485642874407]),
            {
              "Class": 7,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([24.272590125583175, 41.52380955168811]),
            {
              "Class": 7,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([24.21577020981169, 41.528950127131175]),
            {
              "Class": 7,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([24.20529886581755, 41.53441154102197]),
            {
              "Class": 7,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([24.2095045695529, 41.50080047343001]),
            {
              "Class": 7,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([24.206414664767745, 41.508128274118086]),
            {
              "Class": 7,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([24.197402442477706, 41.51500536765852]),
            {
              "Class": 7,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([24.266410316012863, 41.514362679585155]),
            {
              "Class": 7,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([24.29542108871794, 41.53286954146163]),
            {
              "Class": 7,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([24.313102210544113, 41.50607143132861]),
            {
              "Class": 7,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([24.310269797824386, 41.49970766016972]),
            {
              "Class": 7,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([24.22478243210173, 41.515198172836186]),
            {
              "Class": 7,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([26.3550585143203, 39.19918263642029]),
            {
              "Class": 7,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([26.35334190055077, 39.19066822705293]),
            {
              "Class": 7,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([26.342012249671864, 39.14035895691481]),
            {
              "Class": 7,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([26.32038291617577, 39.138494959612565]),
            {
              "Class": 7,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([26.317293011390614, 39.117721365380376]),
            {
              "Class": 7,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([26.30287345572655, 39.11612314281578]),
            {
              "Class": 7,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([26.34784873648827, 39.115856768863836]),
            {
              "Class": 7,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([26.362954937660145, 39.12890790824613]),
            {
              "Class": 7,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([26.386644207679677, 39.16937769000392]),
            {
              "Class": 7,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([27.819813839373406, 36.21687622609876]),
            {
              "Class": 7,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([27.84796630519372, 36.24235498081295]),
            {
              "Class": 7,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([27.849339596209344, 36.25066147541548]),
            {
              "Class": 7,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([27.851742855486687, 36.239862860276304]),
            {
              "Class": 7,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([27.855519405779656, 36.2561986479818]),
            {
              "Class": 7,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([27.79028808253747, 36.19166624899248]),
            {
              "Class": 7,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([27.792004696307, 36.19859287578417]),
            {
              "Class": 7,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([27.965382687029656, 36.273914962950066]),
            {
              "Class": 7,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([27.978772274432, 36.27253102056961]),
            {
              "Class": 7,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([27.975339046892937, 36.26810224010398]),
            {
              "Class": 7,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([28.021344295916375, 36.29024363031047]),
            {
              "Class": 7,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([28.019627682146844, 36.306292210573126]),
            {
              "Class": 7,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([28.01550780909997, 36.31403861921878]),
            {
              "Class": 7,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([27.85689269679528, 36.24263187819021]),
            {
              "Class": 7,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([27.82221709865075, 36.23266295464764]),
            {
              "Class": 7,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([27.915944210467156, 36.26699500573903]),
            {
              "Class": 7,
              "system:index": "168"
            })]),
    S1 = ee.ImageCollection("COPERNICUS/S1_GRD");

//-----------------------  Land Cover Classification with parameters ------------------------

//------------------------Constants----------------------------------//
//visualization parameters
var vis_CI = {min:0, max:6000,bands:['B8', 'B4', 'B3']};

var classPalette = [
  'd63000',//Buildup (0)
  'd3c6ff',//Baren (1)
  '00ccf2',//Waterbodies(2)
  'ffe64d',//Crops (3)
  'd5ffc6',//Sparse Vegetation (4)
  'a6e64d',//Sclerophyllous (5)
  '4dff00',//MixedForest (6)
  '#00a600'//Coniferous (7)
  ];
  


//Greece 
var Greece = LISB.filter(ee.Filter.equals('country_na', 'Greece'));

//Corine 2018
var CorineLC2018 = Corine.select('landcover').clip(Greece);

//DEM
var DEM_GR = DEM.clip(Greece);
var DEM_band = DEM_GR.select('elevation');


// Function to mask clouds
function s2ClearSky(image) {
      var scl = image.select('SCL');
      var clear_sky_pixels = scl.eq(1).or(scl.eq(2)).or(scl.eq(3)).or(scl.eq(4)).or(scl.eq(5)).or(scl.eq(6)).or(scl.eq(7)).or(scl.eq(10)).or(scl.eq(11));
      return image.updateMask(clear_sky_pixels);
}

//function to add NDVI
function addNDVI(image){
  var NDVI = image.normalizedDifference(['B8','B4']).rename('NDVI');
  return image.addBands(NDVI);
}

//------------------------Parameters---------------------------------//
//Specify cloud cover theshold
var cloud = 20;

//Smoothing effect
var smooth = 2;

//Number of trees
var treeNo = 100;


//-----------------------Model-------------------------------------//
function sampling(){
  
  //Creates an image from S2 database
  var Img_Shample = S2.filterDate('2022-01-01','2022-12-30')
                    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 5))
                    .filterBounds(Greece)
                    .map(s2ClearSky)
                    .median()
                    .clip(Greece);

 Map.addLayer(Img_Shample,vis_CI,'CI image 2022')
 
  var Img_fall = S2.filterDate('2022-09-01','2022-10-30')
                    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', cloud))
                    .filterBounds(Greece)
                    .map(s2ClearSky)
                    .map(addNDVI)
                    .median()
                    .clip(Greece)
                    .select(['B2', 'B3', 'B4', 'B8','B11','B12','NDVI'])
                    .rename(['B2_fall', 'B3_fall', 'B4_fall', 'B8_fall','B11_fall','B12_fall','NDVI_fall']);
  
  var Img_winter = S2.filterDate('2022-01-01','2022-02-28')
                    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', cloud))
                    .filterBounds(Greece)
                    .map(s2ClearSky)
                    .map(addNDVI)
                    .median()
                    .clip(Greece)
                    .select(['B2', 'B3', 'B4', 'B8','B11','B12','NDVI'])
                    .rename(['B2_winter', 'B3_winter', 'B4_winter', 'B8_winter','B11_winter','B12_winter','NDVI_winter']);
                    
  var Img_winter_bands =  Img_winter.select(['B2_winter', 'B3_winter', 'B4_winter', 'B8_winter','B11_winter','B12_winter','NDVI_winter']);
  
  var Img_spring = S2.filterDate('2022-03-01','2022-05-30')
                    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', cloud))
                    .filterBounds(Greece)
                    .map(s2ClearSky)
                    .map(addNDVI)
                    .median()
                    .clip(Greece)
                    .select(['B2', 'B3', 'B4', 'B8','B11','B12','NDVI'])
                    .rename(['B2_spring', 'B3_spring', 'B4_spring', 'B8_spring','B11_spring','B12_spring','NDVI_spring']);
                    
  var Img_spring_bands =  Img_spring.select(['B2_spring', 'B3_spring', 'B4_spring', 'B8_spring','B11_spring','B12_spring','NDVI_spring']);
  
  var Img_summer = S2.filterDate('2022-06-01','2022-08-30')
                    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', cloud))
                    .filterBounds(Greece)
                    .map(s2ClearSky)
                    .map(addNDVI)
                    .median()
                    .clip(Greece)
                    .select(['B2', 'B3', 'B4', 'B8','B11','B12','NDVI'])
                    .rename(['B2_summer', 'B3_summer', 'B4_summer', 'B8_summer','B11_summer','B12_summer','NDVI_summer']);
                    
  var Img_summer_bands = Img_summer.select(['B2_summer', 'B3_summer', 'B4_summer', 'B8_summer','B11_summer','B12_summer','NDVI_summer']);

  
  var Img = Img_fall.addBands(Img_winter_bands).addBands(Img_spring_bands).addBands(Img_summer_bands).addBands(DEM_band);
 
  //Creates a training dataset
  var training = Buildup
    .merge(Baren)
    .merge(Waterbodies)
    .merge(Crops)
    .merge(SparceVeg)
    .merge(Sclerophyllous)
    .merge(Mixed)
    .merge(Coniferous);
  
  // Stores the land cover labels
  var label = 'Class';
  var bands = ['B2_summer', 'B3_summer', 'B4_summer', 'B8_summer','B11_summer','B12_summer','NDVI_summer',
      'B2_spring', 'B3_spring', 'B4_spring', 'B8_spring','B11_spring','B12_spring','NDVI_spring',
      'B2_winter', 'B3_winter', 'B4_winter', 'B8_winter','B11_winter','B12_winter','NDVI_winter',
      'B2_fall', 'B3_fall', 'B4_fall', 'B8_fall','B11_fall','B12_fall','NDVI_fall','elevation'];
      
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
  
  //-------------------Filter Sentinel-1 Collection to idendify Urban areas
  //Collect Ascending image
  var S1_ImgA = S1.filter(ee.Filter.eq('instrumentMode','IW'))
                    .filter(ee.Filter.eq('orbitProperties_pass','ASCENDING'))
                    .filterMetadata('resolution_meters','equals',10)
                    .filterDate('2022-09-01','2022-12-01')
                    .filterBounds(Greece)
                    .select('VV')
                    .min()
                    .clip(Greece);

  //Collect Descendinc image
  var S1_ImgD = S1.filter(ee.Filter.eq('instrumentMode','IW'))
                    .filter(ee.Filter.eq('orbitProperties_pass','DESCENDING'))
                    .filterMetadata('resolution_meters','equals',10)
                    .filterDate('2022-09-01','2022-12-01')
                    .filterBounds(Greece)
                    .select('VV')
                    .min()
                    .clip(Greece);

  //Select mean to reduce mountain reflectance
  var S1_min = ee.ImageCollection([S1_ImgA,S1_ImgD]).min();

  //Apply Specle filter
  var S1_SF = S1_min.focalMean(15,'circle','meters');
  ///////Map.addLayer(S1_SF,{min:-15,max:-8},'S1');
  
  //Apply urban threshold
  var S1_urban = S1_SF.gt(-9.1);
  
  //Apply filters to reduce noise
  var S1_urban_fDEM = S1_urban.updateMask(DEM_GR.lt(900));
  
  //Create image with urban class with pixel value 0
   var S1_urban_Final = ee.Image(0).clip(Greece)
  .where(S1_urban_fDEM.eq(0),1)
  .where(S1_urban_fDEM.eq(1),0)
  .where(DEM_GR.gt(800),1);



  //---------------------Band selection for S2 classification
  var band = ['B2_summer', 'B3_summer', 'B4_summer', 'B8_summer','B11_summer','B12_summer','NDVI_summer',
      'B2_spring', 'B3_spring', 'B4_spring', 'B8_spring','B11_spring','B12_spring','NDVI_spring',
      'B2_winter', 'B3_winter', 'B4_winter', 'B8_winter','B11_winter','B12_winter','NDVI_winter',
      'B2_fall', 'B3_fall', 'B4_fall', 'B8_fall','B11_fall','B12_fall','NDVI_fall','elevation'];
 
  //----------------------2022 Classification
  //Creates an image from S2 database
  var Img_fall = S2.filterDate('2022-09-01','2022-10-30')
                    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', cloud))
                    .filterBounds(Greece)
                    .map(s2ClearSky)
                    .map(addNDVI)
                    .median()
                    .clip(Greece)
                    .select(['B2', 'B3', 'B4', 'B8','B11','B12','NDVI'])
                    .rename(['B2_fall', 'B3_fall', 'B4_fall', 'B8_fall','B11_fall','B12_fall','NDVI_fall']);
  
  var Img_winter = S2.filterDate('2022-01-01','2022-02-28')
                    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', cloud))
                    .filterBounds(Greece)
                    .map(s2ClearSky)
                    .map(addNDVI)
                    .median()
                    .clip(Greece)
                    .select(['B2', 'B3', 'B4', 'B8','B11','B12','NDVI'])
                    .rename(['B2_winter', 'B3_winter', 'B4_winter', 'B8_winter','B11_winter','B12_winter','NDVI_winter']);
                    
  var Img_winter_bands =  Img_winter.select(['B2_winter', 'B3_winter', 'B4_winter', 'B8_winter','B11_winter','B12_winter','NDVI_winter']);
  
  var Img_spring = S2.filterDate('2022-03-01','2022-05-30')
                    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', cloud))
                    .filterBounds(Greece)
                    .map(s2ClearSky)
                    .map(addNDVI)
                    .median()
                    .clip(Greece)
                    .select(['B2', 'B3', 'B4', 'B8','B11','B12','NDVI'])
                    .rename(['B2_spring', 'B3_spring', 'B4_spring', 'B8_spring','B11_spring','B12_spring','NDVI_spring']);
                    
  var Img_spring_bands =  Img_spring.select(['B2_spring', 'B3_spring', 'B4_spring', 'B8_spring','B11_spring','B12_spring','NDVI_spring']);
  
  var Img_summer = S2.filterDate('2022-06-01','2022-08-30')
                    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', cloud))
                    .filterBounds(Greece)
                    .map(s2ClearSky)
                    .map(addNDVI)
                    .median()
                    .clip(Greece)
                    .select(['B2', 'B3', 'B4', 'B8','B11','B12','NDVI'])
                    .rename(['B2_summer', 'B3_summer', 'B4_summer', 'B8_summer','B11_summer','B12_summer','NDVI_summer']);
                    
  var Img_summer_bands = Img_summer.select(['B2_summer', 'B3_summer', 'B4_summer', 'B8_summer','B11_summer','B12_summer','NDVI_summer']);
  
  
  var Img = Img_fall.addBands(Img_winter_bands).addBands(Img_spring_bands).addBands(Img_summer_bands).addBands(DEM_band);
 
  
  var img_bands = Img.select(band);
 
  // Classify the image
  var classifiedImg2022 = img_bands.classify(classifier);
  
  //Classified image smoothing
  var Kernel = ee.Kernel.square({radius:smooth,units:"pixels"});

  var classifiedImg_smooth2022 = classifiedImg2022;
  
  //Final classification layer
  var Land_Cover2022 = classifiedImg2022.multiply(S1_urban_Final);
  
    //----------------------2022 Classification
  //Creates an image from S2 database
  var Img_fall23 = S2.filterDate('2023-09-01','2023-10-30')
                    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', cloud))
                    .filterBounds(Greece)
                    .map(s2ClearSky)
                    .map(addNDVI)
                    .median()
                    .clip(Greece)
                    .select(['B2', 'B3', 'B4', 'B8','B11','B12','NDVI'])
                    .rename(['B2_fall', 'B3_fall', 'B4_fall', 'B8_fall','B11_fall','B12_fall','NDVI_fall']);
  
  var Img_winter23 = S2.filterDate('2023-01-01','2023-02-28')
                    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', cloud))
                    .filterBounds(Greece)
                    .map(s2ClearSky)
                    .map(addNDVI)
                    .median()
                    .clip(Greece)
                    .select(['B2', 'B3', 'B4', 'B8','B11','B12','NDVI'])
                    .rename(['B2_winter', 'B3_winter', 'B4_winter', 'B8_winter','B11_winter','B12_winter','NDVI_winter']);
                    
  var Img_winter_bands23 =  Img_winter23.select(['B2_winter', 'B3_winter', 'B4_winter', 'B8_winter','B11_winter','B12_winter','NDVI_winter']);
  
  var Img_spring23 = S2.filterDate('2023-03-01','2023-05-30')
                    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', cloud))
                    .filterBounds(Greece)
                    .map(s2ClearSky)
                    .map(addNDVI)
                    .median()
                    .clip(Greece)
                    .select(['B2', 'B3', 'B4', 'B8','B11','B12','NDVI'])
                    .rename(['B2_spring', 'B3_spring', 'B4_spring', 'B8_spring','B11_spring','B12_spring','NDVI_spring']);
                    
  var Img_spring_bands23 =  Img_spring23.select(['B2_spring', 'B3_spring', 'B4_spring', 'B8_spring','B11_spring','B12_spring','NDVI_spring']);
  
  var Img_summer23 = S2.filterDate('2023-06-01','2023-08-30')
                    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', cloud))
                    .filterBounds(Greece)
                    .map(s2ClearSky)
                    .map(addNDVI)
                    .median()
                    .clip(Greece)
                    .select(['B2', 'B3', 'B4', 'B8','B11','B12','NDVI'])
                    .rename(['B2_summer', 'B3_summer', 'B4_summer', 'B8_summer','B11_summer','B12_summer','NDVI_summer']);
                    
  var Img_summer_bands23 = Img_summer23.select(['B2_summer', 'B3_summer', 'B4_summer', 'B8_summer','B11_summer','B12_summer','NDVI_summer']);
  
  
  var Img23 = Img_fall23.addBands(Img_winter_bands23).addBands(Img_spring_bands23).addBands(Img_summer_bands23).addBands(DEM_band);
 
  
  var img_bands23 = Img23.select(band);
 
  // Classify the image
  var classifiedImg2023 = img_bands23.classify(classifier);
  
  //Final classification layer
  var Land_Cover2023 = classifiedImg2023.multiply(S1_urban_Final);
  
  
  //Add to map
  Map.addLayer(Land_Cover2022, {palette: classPalette, min: 0, max: 7}, 'Land Cover 2022');
  Map.addLayer(Land_Cover2023, {palette: classPalette, min: 0, max: 7}, 'Land Cover 2023');
  //Map.addLayer(Land_Cover_2022FS , {palette: classPalette, min: 0, max: 7}, 'Land Cover 2022 Smooth');
  Map.addLayer(CorineLC2018, {}, 'Corine 2018');
  
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
  var names = ['Buildup' ,'Baren','Waterbodies','Crops', 'Sparse vegetation', 'Sclerophyllous', 'Mixed broadleaf', 'Coniferous'];
  
  // Add color and and names to legend
  for (var i = 0; i < 8; i++) {
    legend.add(makeRow(classPalette[i], names[i]));
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
