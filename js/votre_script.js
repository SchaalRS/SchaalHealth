function changeLanguage(lang) {
    // Obtenez l'URL actuelle
    var url = window.location.href;

    // Remplacez le paramètre de langue existant ou ajoutez-le s'il n'existe pas
    var newUrl = updateQueryStringParameter(url, 'lang', lang);

    // Redirigez vers la nouvelle URL avec le paramètre de langue mis à jour
    window.location.href = newUrl;
}

// Fonction pour mettre à jour le paramètre de requête dans l'URL
function updateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";

    if (uri.match(re)) {
        return uri.replace(re, '$1' + key + "=" + value + '$2');
    }
    else {
        return uri + separator + key + "=" + value;
    }
}
// JavaScript Document
