# camlytics
**Bringing analytics to retail using computer vision**

**Submission @ PennApps Retro XVII**


## Inspiration
Nowadays, website owners have access to a plethora of data on their customers. Valuable information, such as the average time spent on the website, the bounce rate, which pages are most visited, are readily available.

Unfortunately, in retail stores, there is very little data available to most store owners. Fitting with the theme of old and new, we wanted to find a way to modernize retail stores.

## What it does
Using already installed security cameras in stores, we use computer vision to track the position of customers in real time. With the position of customers, we extract valuable data including the number of customers in the store, the average time spent in the store, and the most visited parts of the store. All this data is presented in a beautiful web dashboard that a store owner can easily access.

Retail store owners can use this data to greatly improve their store's experience. For instance, a store owner may see that many customers come between 1:30 PM and 2:30 PM, but that the customer to buyer rate during that time interval is low. Such owner may want to increase the number of employees on the floor at that time to serve the larger number of customers.

## How we built it
Our people recognition software is built with tensorflow and computer vision. Using this algorithm, we were able to detect where customers are in the store and leverage this data to provide valuable insights to the store manager such as where the customers are populated or how many people are in the store at any time of day.

Our frontend is built with React and communicates with the backend through an API which we created.

## Challenges we ran into
At first, OpenCV was not working effectively for what we wanted to do. It was slow and half of our team couldn't even get it to work on their computer. So, we ended up switching mid-hackathon to tensorflow.

Another challenge was bringing all the components of the project together such as the backend recognition algorithm and getting it to send its data to the frontend, where it would either be charted, plotted, or listed.

## Accomplishments that we're proud of
We're proud of building a real, working, and beautiful project that can be applied to any retail business simply by adding our software to security cameras.

## What we learned
We learned a ton - from tensorflow object detection to designing our own APIs, we all had a blast at PennApps and look forward to improving our project even more.

## What's next for Camlytics
We have some pretty big plans for Camlytics including scaling our software to security cameras, adding features for multiple cameras, and testing our concept in retail stores.
