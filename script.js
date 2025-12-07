$(function(){
const photos = [
    "photos/antaifasy.webp",
    "photos/antaimoro.jpg",
    "photos/antaisaka.jpg",
    "photos/antakarana.webp",
    "photos/antambahoaka.jpg",
    "photos/antandroy.webp",
    "photos/antanosy.webp",
    "photos/bara.webp",
    "photos/betsileo.jpg",
    "photos/betsimisaraka.webp",
    "photos/bezanozano.webp",
    "photos/mahafaly.webp",
    "photos/merina.webp",
    "photos/sakalava.webp",
    "photos/sihanaka.webp",
    "photos/tanala.jpg",
    "photos/tsimihety.webp",
    "photos/vezo.webp"
]
const titres = [
    "Antaifasy",
    "Antaimoro",
    "Antaisaka",
    "Antakarana",
    "Antambahoaka",
    "Antandroy",
    "Antanosy",
    "Bara",
    "Betsileo",
    "Betsimisaraka",
    "Bezanozano",
    "Mahafaly",
    "Merina",
    "Sakalava",
    "Sihanaka",
    "Tanala",
    "Tsimihety",
    "Vezo"
]
const textes = [
    "Les Antaifasy ou « Ceux qui vivent dans les sables » demeurent autour de Farafangana. C'est dans cette ville que le canal des Pangalanes se termine. Ce sont les Français qui ont fondé cette ville en 1897. Elle a perdu sa valeur après la colonisation.",
    "Les Antaimoro ou « Ceux des rivages » occupent le nord et le sud de Manakara, de Mananjary à Vohipeno. Ces peuples cultivateurs de la côte est de Madagascar sont les descendants des navigateurs et commerçants arabes. Ils conservent leur Sorabe (grande et sainte écriture) et des manuscrits du Coran qui comportent des formules magiques arabes (à vocation médicale), sortilèges et histoires de tous les clans de cette ethnie. Ces peuples sont réputés par la Papier Antaimoro qui a une valeur importante dans le domaine de la décoration : papiers à lettres, abats jour, tapisseries…",
    "Les Antaisaka ou « ceux qui viennent de Sakalava » occupent la côte est de l'île, dans la ville de Vangaindrano. C'étaient de redoutables guerriers et s'activent dans la pêche et l'agriculture. Ils pratiquent aussi la vannerie en utilisant des joncs séchés. Ces peuples sont d'origine Sakalava, car ce fut au bord du Menagnara que le prince Sakalava s'installa il y a des siècles pour former cette tribu. Ma petite maman fait partie de cette ethnie.",
    "Les Antakarana ou «  ceux qui peuplent les montagnes Rocheuses » sont localisés à l'extrême nord de Madagascar : d'Ambilobe au cap d'Ambre dans la région d'Antsiranana. Cette tribu est constituée de peu d'individus. C'est là où on produit le meilleur poivre de la grande île. Ce sont surtout des éleveurs et pêcheurs influencés par l'islam.",
    "Les Antambahoaka ou « Ceux du peuple » occupent la ville de Mananjary, une des régions du sud-est. Ils sont d'origine arabe avec une culture et tradition faisant apparaître l'empreinte islam. La plupart d'eux ne consomment pas ainsi le porc ou de la viande provenant d'animaux non saignés. Tous les sept ans, ce peuple célèbre la Sambatra, une fête traditionnelle de la circoncision durant laquelle plusieurs milliers de garçons sont circoncis. Cette festivité a lieu durant la saison sèche et peut durer de deux semaines à… trois mois.",
    "Les Antandroy  ou « Ceux des épines » peuplent la région la plus sèche de Madagascar : région d'Ambovombe ou la pointe sud de l'île. Ils forment 5% de la population malgache. Ce sont de grands éleveurs de zébus et cultivateurs de maïs et manioc. Ils sont toujours à la recherche de sources d'eau et de nouveaux pâturages pour leurs troupeaux, ce qui fait qu'on admire leur courage. Ces peuples sont réputés par leur maîtrise de l'art de la divination et des sortilèges. Leurs tombeaux se différencient aussi des autres par des pierres élevées comme décoration et poteaux de bois sculptés appelés aloalo.",
    "Les Antanosy ou « Ceux de l'île » sont centrés autour de Fort-Dauphin dont leurs ancêtres viennent du sud-est de l'île. Ils sont à la fois marins et pêcheurs, mais aussi de très bons riziculteurs et éleveurs. La plupart de ces habitants pratiquent la forge et la charpenterie. Ils possèdent aussi d'importants troupeaux de zébus. Tolagnaro est fréquenté par les pirates et les marins.",
    "Les Bara ou « Ceux des pasteurs nomades » vivent dans la région d'Ihosy, au centre sud de l'île. Ils se caractérisent par leur apparence africaine très prononcée selon leur origine bantoue. Ces peuples sont célèbres par leurs grands troupeaux de zébus (qui constituent la richesse et la fierté du peuple) qu'ils gardent armés de sagaies et de fusils. Les vols de zébus font partie de leur tradition, mais aussi le rodéo et la lutte à la main nue appelée ringa.",
    "Les Betsileo ou « Les nombreux invincibles » a comme cité principale la ville de Fianarantsoa, mais aussi Ambositra. Leur origine indonésienne ne pose aucun doute et ils sont d'habiles agriculteurs et vignobles. Ils constituent à peu près 12% de la population malgache. La plupart des peuples de cette tribu entretiennent aussi des relations avec les morts et érigent des pierres dressées (ou vatolahy) comme le font les Merina. Mon papa fait partie de ce groupe ethnique.",
    "Les Betsimisaraka ou « Les nombreux qui ne se séparent pas » constituent 15% de la population et occupent la région de Tamatave. La plupart des peuples de cette tribu sont des cultivateurs de canne à sucre, poivre, café, vanille, girofle. Ce sont aussi des grands exportateurs grâce à leur proximité au canal des Pangalanes. C'est la partie des grandes pluies tropicales, de forêt dense et de végétations luxuriantes.",
    "Les Bezanozano ou « Ceux aux ombreuses petites tresses » se localisent à proximité de la ville de Moramanga dans la vallée du fleuve Mangoro. La dénomination de ces peuples provient de leurs coiffures qui désignent des petites brindilles. Ce sont des bucherons qui dominaient le transport de marchandises vers la capitale à des conditions vraiment difficiles à une époque où il n'y a pas eu encore d'évolution.",
    "Les Mahafaly ou « qui rend heureux » sont des guerriers redoutés qui occupent la côte sud-ouest de Madagascar. C'est encore une région aride occupée par ces peuples de pasteurs qui se nourrissent de maïs, manioc, miel, lentilles, tubercules sauvages… Ils sont célèbres par leur artisanat et culte des morts. J'ai déjà visité cette tribu lors de mon travail de recherche avec les professeurs internationaux de l'Université de Genève de 2011 à 2014 et c'était magnifique : et les peuples et le paysage.",
    "Les Merina ou « Ceux des hautes terres » occupent la capitale de Madagascar : Tananarive. Ils constituent 26% de la population et leurs ancêtres proviennent de l'Indonésie et de Malaisie. On les surnomme aussi les Ambaniandro ou « ceux qui vivent sous le soleil ». Ce groupe ethnique se distingue des autres par sa relation avec les morts en optant par leur retournement…",
    "Les Sakalava ou «  Ceux des longues vallées » forment 6 % de la population. Ils occupent le quart de Madagascar qui s'étend de Tuléar à Nosy Be. C'est une région de savane. Ces peuples sont célèbres par leurs troupeaux de zébus. Ce sont aussi de grands cultivateurs de riz, maïs et manioc dans les vallées. Cette ethnie est formée de deux grands royaumes : le Sakalava du Boina au nord et celui de Menabe au sud. Ce dernier se divise encore en trois sous-groupes, dont les Vezo, Makoa et Masikoro.",
    "Les Sihanaka ou « Ceux qui errent autour des marais » vivent entre Ambatondrazaka et Mandritsara : dans les régions du lac Alaotra. C'est le grenier à riz de Madagascar : ces peuples sont des riziculteurs et pêcheurs. Ils sont aussi réputés par leur vannerie à la fois solides et fines. Leurs tombeaux se distinguent des autres par la présence d'un mat funéraire très élevé ou d'un poteau moins haut surmontés d'un crâne de zébu ou de statuettes en bois du défunt.",
    "Les Tanala ou « Ceux de la forêt » occupent la région forestière du sud de l'île entre les tribus Antaimoro et Betsileo. C'est dans la forêt qu'ils se ressourcent : plantes, miel sauvage, chasse, bois… Ils pratiquent la culture de riz sur brulis et cultivent le café. Ce sont aussi des guérisseurs très réputés qui connaissent les vertus de nombreuses plantes.",
    "Les Tsimihety ou « Ceux qui ne se coupent pas les cheveux » forment 7% de la population de Madagascar. Cette ethnie fut nommée ainsi, car ils refusèrent de couper leurs cheveux à la mort d'un roi Sakalava en signe de deuil. Ils sont localisés près de Bealanana et Befandriana. Ce sont des peuples de riziculteurs et de pasteurs. Ils se répandent dans toute la partie nord-ouest de Madagascar.",
    "Les Vezo ou « Ramer » peuplent la région de Tuléar jusqu'à Morombe. Ce sont des marins qui vivent en symbiose avec le grand lagon. La plupart de ces peuples utilisent encore les matériels de pêche traditionnels.",
]

let i=0, dir=1,
    $img=$("#page img"), $hdr=$("#page h1"),
    $titre=$("#titre"), $texte=$("#texte"),
    len=photos.length;
    
function show(n){
    $titre.fadeOut(200,()=>$titre.text(titres[n]).fadeIn(500));
    $texte.fadeOut(200,()=>$texte.text(textes[n]).fadeIn(500));

    $("#page").stop().animate({left:dir*100+"%",opacity:0},300,()=>{
        $img.attr("src",photos[n]);
        $hdr.text(`${n+1} / ${len}`);
        $("#page").css({left:-dir*100+"%"}).animate({left:"0%",opacity:1},500);
    });
}

show(i);

$("#suivant").click(()=>{dir=-1;i=(i+1)%len;show(i)});
$("#precedent").click(()=>{dir=1;i=(i-1+len)%len;show(i)});

function adjustImageSize() {
    const windowWidth = $(window).width();
    const $page = $("#page");
    const $pageImg = $("#page img");
    
    if (windowWidth >= 1200) {
        $page.css({ width: "18.5em", height: "35em" });
        $pageImg.css({ maxHeight: "32em" });
    } else if (windowWidth >= 1024) {
        $page.css({ width: "17em", height: "32em" });
        $pageImg.css({ maxHeight: "29em" });
    } else if (windowWidth >= 900) {
        $page.css({ width: "16em", height: "30em" });
        $pageImg.css({ maxHeight: "27em" });
    } else if (windowWidth >= 768) {
        $page.css({ width: "15em", height: "28em" });
        $pageImg.css({ maxHeight: "25em" });
    } else if (windowWidth >= 600) {
        $page.css({ width: "14em", height: "26em" });
        $pageImg.css({ maxHeight: "22em" });
    } else if (windowWidth >= 480) {
        $page.css({ width: "12em", height: "22em" });
        $pageImg.css({ maxHeight: "18em" });
    } else {
        $page.css({ width: "10em", height: "18em" });
        $pageImg.css({ maxHeight: "15em" });
    }
}

$(window).on("load resize", adjustImageSize);
adjustImageSize();
});