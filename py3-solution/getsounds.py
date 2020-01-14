import requests
from bs4 import BeautifulSoup
import pprint  # tymczasowo do lepszego podglądu przy tworzeniu kodu

# pobierz listę dostępnych płyt  ==========================================================
url = 'https://edesk.pearson.pl/'
headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7',
    'Cache-Control': 'max-age=0',
    'Connection': 'keep-alive',
    'Cookie': '_ga=GA1.2.1979373371.1578644857; __RequestVerificationToken=ndm0vRVEA6mTFJXkN-WPZbP2YIpC-6XGTHnmTudKPYCUdqDwxP8ge4NZAIJ-Yx_IE-JrDZL6EGafmhFGg8GN8gGchBglLs5_c-tli8VXI5A1; _gid=GA1.2.735724816.1578907802; eDeskAuth=jlNIC5AlEwNszNrv9JAvH9VXujH6qbGU_PrxYfIikR8daJKCwOqvdX7Kt7YimjpABo6VX7O9qXBsWEdaRH5wFZttFymXUGR27LZn6jf71ztcKIxW6RknBbfVNlJP6r0bc8wR7leOqWl72v3-Dd57pmdc5ZdCBPmJonbYiJpr40eEXZzR9fHFUuEbWb4tsqe83z_3xczb2QFrUlVAYGe014bKxQxJC9QuVBeL2zW_GuzwgOFicADlA62RKnNrsmu8DZIAL2FI3RwtVshT3MJ83PYwTsAD3VQpicALoui1lAKuJM98kMJlDnCGg5rqvTj_kI-ZXgRf3_kpvHpptlgDRENGHujBBtuxkhPE8kizQaL4kvvZ3aF8b4kLYO9aTbzB0LP1SZ19Q2N6ESXRtXR5kbnEtzZQ5OOJw3LkUHitP0gaWZJmcLQVyO4OaxnzjpYQdG3r7xsA8El_faFKKaU-81WXk16ErR3uYviznvpsqnqLLcRyRvCpe7j4yxtv2lEh; ASP.NET_SessionId=',
    'DNT': '1',
    'Host': 'edesk.pearson.pl',
    'Referer': 'https://iam.pearson.com/auth/SSORedirect/metaAlias/pearson/idp?ReqID=_ff7fad08-dd39-489b-9ccb-6d39eca11f50&index=null&acsURL=https%3A%2F%2Fedesk.pearson.pl%2FLogin%2FVerify&spEntityID=https%3A%2F%2Fedesk.pearson.pl&binding=',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'cross-site',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36'
}

# treść ciągów autoryzujących musi być aktualna!
# Najprościej wkleić z Request Headers po zalogowaniu i wywołaniu strony

res = requests.get(url, headers=headers)
soup = BeautifulSoup(res.text, 'html.parser')

temp = soup.find_all("a", attrs={"class": "widget"})

# pprint.pprint(temp)

# print(soup.find(id='up_22031644'))
# print(soup.select('.score'))
# print(soup.select('#score_22031644'))


def create_cds_list(templinks):
    cds = []
    for idx, item in enumerate(templinks):
        href = item.get('href', None)  # None if there is no href for item
        cdTitle = item.find(
            "strong", attrs={"class": "text-light-op ellipsis"}).text
        serie = item.find("span", attrs={"class": ""}).text
        cds.append({'serie': serie, 'title': cdTitle, 'link': href})
    return cds


cdlist = create_cds_list(temp)
# pprint.pprint(cdlist)

# ustawienie dla pierwszego CD  (potem do zamiany na pętlę)
cd = cdlist[0]

# POBIERZ LISTĘ UTWORÓW DLA DANEGO CD =============================================>

url = 'https://edesk.pearson.pl' + cd['link']
headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7',
    'Cache-Control': 'max-age=0',
    'Connection': 'keep-alive',
    'Cookie': '_ga=GA1.2.1979373371.1578644857; __RequestVerificationToken=ndm0vRVEA6mTFJXkN-WPZbP2YIpC-6XGTHnmTudKPYCUdqDwxP8ge4NZAIJ-Yx_IE-JrDZL6EGafmhFGg8GN8gGchBglLs5_c-tli8VXI5A1; _gid=GA1.2.735724816.1578907802; eDeskAuth=jlNIC5AlEwNszNrv9JAvH9VXujH6qbGU_PrxYfIikR8daJKCwOqvdX7Kt7YimjpABo6VX7O9qXBsWEdaRH5wFZttFymXUGR27LZn6jf71ztcKIxW6RknBbfVNlJP6r0bc8wR7leOqWl72v3-Dd57pmdc5ZdCBPmJonbYiJpr40eEXZzR9fHFUuEbWb4tsqe83z_3xczb2QFrUlVAYGe014bKxQxJC9QuVBeL2zW_GuzwgOFicADlA62RKnNrsmu8DZIAL2FI3RwtVshT3MJ83PYwTsAD3VQpicALoui1lAKuJM98kMJlDnCGg5rqvTj_kI-ZXgRf3_kpvHpptlgDRENGHujBBtuxkhPE8kizQaL4kvvZ3aF8b4kLYO9aTbzB0LP1SZ19Q2N6ESXRtXR5kbnEtzZQ5OOJw3LkUHitP0gaWZJmcLQVyO4OaxnzjpYQdG3r7xsA8El_faFKKaU-81WXk16ErR3uYviznvpsqnqLLcRyRvCpe7j4yxtv2lEh; ASP.NET_SessionId=',
    'DNT': '1',
    'Host': 'edesk.pearson.pl',
    'Referer': 'https://edesk.pearson.pl/',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36'
}

# treść ciągów autoryzujących musi być aktualna!
# Najprościej wkleić z Request Headers po zalogowaniu i wywołaniu strony

res = requests.get(url, headers=headers)
soup = BeautifulSoup(res.text, 'html.parser')

temp = soup.find_all(
    "div", attrs={"class": "material col-md-3 col-xs-4 material-4"})


def create_songs_list(templinks):
    songs = []
    for idx, item in enumerate(templinks):
        href = item.find("a", attrs={"class": "openmodal widget"}).get(
            'href', None)  # None if there is no href for item
        title = item.find("strong").text
        songs.append({'title': title, 'link': href})
    return songs


songs = create_songs_list(temp)
pprint.pprint(songs)
