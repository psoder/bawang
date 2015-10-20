import dconst from "../../data-constants.js";


var blur = "blur(2px)";

export default {
    body: {
        fontFamily: 'Lato, Arial'
    },                
    delta: {
        height: 269,
        marginRight: 3,
        marginBottom: 31,
        zIndex: 10,
        position: "relative"
    },
    heading: {
        fontSize: 60,
        marginTop: 0,
        fontWeight: 900,
        color: dconst.colors.cerise,
        position: "relative",
        marginLeft: -81,
        marginBottom: 70,
        textShadow: "1px 1px 3px rgba(0, 0, 0, 0.34)",
        zIndex: 10,
    },
    sektionen: {
        marginLeft: 3,
        color: "white"
    },
    vidkth: {
        fontSize: 25,
        marginLeft: 12,
        position: "absolute",
        bottom: 14
    },
    content: {
        textAlign: "center",
        marginTop: 95,
        width: "100%"
    },
    bottom: {
        color: "white",
        position: "absolute",
        top: 50,
        left: 0,
        right: 0,
        fontSize: 17.5,
        letterSpacing: "0.15px",
        display: "flex",
        flexDirection: "row",
        minHeight: "calc(100% - 50px)",
    },
    overlay: {
        width: "50%",
        backgroundColor: "rgba(1, 1, 1, 0.5)",
        overflow: "hidden",
        position: "relative",
        paddingTop: 540
    },
    bgimg: {
        zIndex: -10,
        position: "absolute",
        top: 0,
        left: 0,
        WebkitFilter: blur,
        MozFilter: blur,
        OFilter: blur,
        MsFilter: blur,
        filter: blur,
        transform: "scale(1.03)",    // Get rid of white frame from blur
        height: "100%",
        minWidth: "100%"
    },
    left: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    right: {
        backgroundColor: "rgba(230, 41, 119, 0.85)",
    },
    article: {
        textAlign: "justify",
        lineHeight: "35px",
        maxWidth: dconst.site_width /2 - 50, // minus whatever with we need for margins
        display: "inline-block",
        margin: "0 50px 0 50px",
    },
};