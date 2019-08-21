# My Efforts

This project was a nice challenge. There were a few hurdles to overcome. First I had to decide how to make the app useable on mobile and desktop. I had two choices, adaptive or responsive. I decided to use the adaptive approach over the responsive approach. I made two UIs essentially and I check the screen size on load then display the appropriate UI.

I also wanted to use the new React hooks, but I found that it would be a little difficult to handle the state between components. Things could get a little messy passing the state around. So in the end I opted to use Redux instead. Also, hypothetically, if we were going to actually use the app and scale it up redux would probably be necessary anyway.