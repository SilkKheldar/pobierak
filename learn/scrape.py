import requests
from bs4 import BeautifulSoup
import pprint

res = requests.get('https://news.ycombinator.com/news')
# print(res.text)
soup = BeautifulSoup(res.text,'html.parser')
#print(soup.find(id='up_22031644'))
#print(soup.select('.score'))
#print(soup.select('#score_22031644'))
links = soup.select('.storylink')
subtext = soup.select('.subtext')

def sort_stories_by_votes(hnlist):
    return sorted(hnlist, key= lambda k:k['votes'], reverse=True)

def create_custom_hackernews(links, subtext):
    hn = []
    for idx, item in enumerate(links):
        #item = links[idx]
        title = item.getText()
        href = item.get('href', None)  #None if there is no href for item
        vote = subtext[idx].select('.score') #via subtext not votes because sometimes there are items without votes
        if len(vote):
            points = int(vote[0].getText().replace(' points', ''))
            if points > 99:
                hn.append({'title': title, 'link': href, 'votes': points})
    return sort_stories_by_votes(hn)

pprint.pprint(create_custom_hackernews(links, subtext))    