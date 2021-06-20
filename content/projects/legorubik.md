---
id: 3
title: Rubik cube solver with Lego and cellphone (2009)
description: Qtek 9100 with WM5 solves cube through Lego Mindstorms Robot with Bluetooth messages. Used VB.NET, Kociemba Algorithm in C, pocket NXT remote and design from Tiltedtwister.
tech: C++ Bluetooth Robotics
logo: /images/Rubik.png
website: https://www.youtube.com/watch?v=bkWLQZgi9uE
github: https://github.com/InterviewReady
twitter: klaudioz
---

I worked on this project in 2008-2009 to get my engineer degree. There are no iPhone or Android to work at this time, so I chose a cellphone with Windows mobile 5 to use a Kociemba algorithm solver I had coded in C.

I need to make a lot of adaptations to the code to work with it in the cellphone. It was in an old version of C, and I finished with a newer version of Visual C++.
Finally, I needed to convert the six dimensions solution given by the Kociemba algorithm (manageable by a human with two hands) to a one in two dimensions (The total of movements the robot was able to do), creating an algorithm to do this job. Then, a 20 movements solution for a human was converted into an approximately 60 movements solution for the robot. I used Bluetooth to send these movements to the Lego Mindstorms.