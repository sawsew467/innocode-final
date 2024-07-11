import React from 'react';

interface IconProps {
  color?: string;
  size?: number | string;
  width?: number | string;
  height?: number | string;
}

const Plant: React.FC<IconProps> = ({ color = 'currentColor', size, width = size, height = size }) => (
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="300pt" height="300pt" viewBox="0 0 300.000000 300.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.10, written by Peter Selinger 2001-2011
</metadata>
<g transform="translate(0.000000,300.000000) scale(0.050000,-0.050000)"
fill="#000" stroke="none">
<path d="M3062 5401 c-19 -12 -23 -37 -14 -86 10 -57 3 -81 -48 -145 -33 -41
-60 -97 -60 -123 0 -62 -28 -60 -57 4 -29 65 -30 159 0 207 27 43 8 109 -28
97 -16 -6 -23 -40 -20 -92 6 -93 -17 -108 -51 -33 -23 50 -71 66 -93 32 -19
-31 7 -70 68 -106 76 -43 180 -209 180 -286 l0 -60 -39 50 c-22 28 -49 79 -61
115 -12 36 -35 65 -51 65 -40 0 -38 -6 72 -187 99 -162 101 -166 111 -363 l11
-200 -112 218 c-61 120 -140 255 -176 299 -54 68 -64 98 -64 186 0 107 -105
265 -155 234 -44 -27 -4 -220 61 -299 80 -96 81 -116 5 -72 -32 18 -66 26 -75
17 -22 -22 51 -73 104 -73 63 0 112 -63 259 -335 168 -310 188 -402 154 -712
-33 -291 -38 -292 -158 -39 -137 291 -140 314 -66 432 61 95 78 196 43 252
-32 50 -88 -64 -74 -152 15 -89 -15 -155 -48 -106 -27 42 -25 267 3 329 25 55
10 92 -24 58 -33 -33 -48 -351 -21 -458 32 -127 20 -129 -87 -19 -116 119
-125 211 -31 313 61 67 88 237 42 266 -51 31 -127 -116 -114 -222 17 -144 -20
-153 -49 -12 -13 63 -36 169 -50 234 -21 100 -21 126 3 160 36 51 36 132 0
181 -60 83 -102 -70 -61 -222 41 -151 28 -184 -29 -73 -53 105 -222 191 -222
114 0 -95 93 -189 188 -189 30 0 59 -16 71 -39 31 -56 79 -301 60 -301 -32 0
-99 117 -99 173 -1 65 -31 123 -52 101 -8 -8 -4 -47 8 -88 31 -102 16 -106
-74 -18 -170 166 -242 379 -182 537 38 99 34 163 -7 149 -13 -4 -26 -49 -29
-101 -7 -102 -34 -121 -64 -43 -10 28 -28 50 -40 50 -36 0 -21 -52 28 -98 26
-25 52 -67 57 -94 11 -56 -16 -66 -30 -10 -11 41 -77 89 -153 112 -44 13 -46
10 -33 -43 18 -77 73 -128 152 -145 36 -7 70 -25 75 -40 6 -19 -3 -22 -34 -13
-30 10 -42 5 -42 -18 0 -20 18 -31 49 -31 29 0 58 -17 70 -39 30 -56 26 -65
-24 -52 -42 11 -43 10 -7 -14 515 -340 1008 -1041 1028 -1459 11 -213 -26
-235 -159 -95 -89 93 -92 112 -36 222 43 84 39 165 -6 120 -13 -13 -24 -43
-26 -68 -6 -120 -51 -192 -77 -123 -21 56 -13 105 38 220 58 132 60 148 20
148 -20 0 -30 -20 -30 -60 0 -33 -9 -60 -20 -60 -11 0 -20 22 -20 49 0 50 -29
84 -47 56 -5 -9 0 -53 12 -99 38 -141 -8 -205 -62 -86 -71 159 -73 193 -15
246 53 50 68 94 32 94 -12 0 -31 -22 -43 -49 -13 -28 -31 -45 -40 -39 -27 17
-20 80 18 146 26 46 30 70 14 95 -60 96 -94 23 -76 -162 l12 -121 -51 66 c-65
86 -58 291 13 348 23 18 36 40 28 48 -8 8 -33 -2 -55 -22 -39 -36 -40 -35 -40
54 0 61 -11 100 -33 119 -31 25 -32 18 -21 -83 7 -60 19 -155 25 -210 l12
-100 -62 70 c-80 89 -129 255 -116 389 11 109 3 151 -28 151 -12 0 -14 -37 -6
-95 12 -89 11 -92 -18 -55 -18 22 -32 55 -32 73 -1 36 -48 83 -66 65 -18 -17
5 -71 50 -122 24 -27 42 -81 47 -140 l7 -96 -43 95 c-45 100 -90 133 -55 42
26 -68 15 -77 -41 -31 -39 31 -46 55 -43 138 3 73 -7 114 -34 147 l-38 47 -13
-43 c-8 -23 0 -75 17 -116 40 -96 39 -103 -9 -59 -76 69 -111 240 -61 303 46
58 55 115 16 102 -14 -4 -35 -29 -48 -54 l-23 -46 -34 65 c-19 37 -40 107 -47
158 -10 65 -24 94 -48 98 -53 10 -66 -52 -21 -102 101 -112 52 -158 -57 -54
-66 63 -87 72 -106 42 -17 -28 30 -66 144 -120 97 -45 165 -137 165 -224 0
-24 -86 -2 -97 25 -9 25 -63 77 -79 77 -95 -2 -71 -120 23 -120 70 0 132 -46
272 -204 l84 -94 -71 12 c-47 7 -72 3 -72 -11 0 -25 -1 -25 104 -32 122 -8
276 -152 408 -381 l57 -100 -54 35 c-61 40 -95 45 -95 14 0 -12 35 -37 78 -55
65 -28 93 -59 154 -174 41 -77 96 -174 122 -215 67 -108 57 -121 -50 -67 -162
82 -364 363 -364 505 0 65 -21 107 -52 107 -39 0 -35 -48 13 -142 63 -123 41
-163 -30 -57 -50 75 -60 110 -63 224 -4 179 -3 175 -40 175 -25 0 -30 -12 -19
-55 7 -30 17 -100 22 -155 l9 -100 -38 84 c-52 111 -162 172 -162 89 0 -46 74
-143 108 -143 14 0 42 -18 62 -40 36 -40 36 -40 -30 -27 -44 9 -62 6 -53 -8 7
-11 42 -26 79 -33 38 -7 95 -42 134 -82 70 -73 72 -109 3 -72 -22 12 -57 22
-77 21 -68 -1 35 -59 105 -59 63 0 192 -124 162 -154 -24 -23 -246 105 -333
193 -233 233 -349 467 -289 583 30 59 23 149 -11 128 -9 -6 -23 -46 -30 -90
-27 -158 -90 -98 -90 86 0 74 -10 117 -31 135 -28 23 -30 14 -19 -83 l13 -108
-60 99 c-56 92 -58 103 -32 154 39 74 36 124 -9 180 l-39 47 -23 -60 c-12 -33
-19 -81 -14 -106 14 -73 -28 -40 -57 45 -32 94 -76 140 -117 124 -80 -30 6
-213 99 -213 33 0 58 -19 79 -60 38 -73 -1 -85 -61 -19 -23 25 -56 39 -88 35
-105 -12 -23 -83 122 -106 66 -10 281 -292 248 -325 -26 -27 -155 74 -201 158
-51 94 -90 125 -90 70 0 -15 18 -43 40 -63 22 -20 40 -51 40 -68 0 -21 -24 -6
-65 43 -88 101 -203 141 -274 96 -69 -44 129 -180 263 -182 160 -2 516 -271
516 -390 0 -61 -315 123 -368 215 -23 40 -41 56 -47 40 -5 -15 7 -44 26 -65
33 -36 33 -39 1 -39 -18 0 -39 14 -45 31 -25 65 -187 112 -187 53 0 -40 86
-104 140 -104 32 0 128 -37 214 -82 86 -45 197 -94 246 -109 56 -17 121 -59
170 -109 l79 -81 -62 13 c-37 7 -68 3 -76 -10 -9 -15 13 -22 66 -22 136 0 742
-254 850 -356 137 -129 250 -604 145 -604 -150 0 -280 228 -200 350 32 48 23
130 -14 130 -28 0 -57 -89 -44 -138 15 -59 -23 -52 -51 9 -28 62 -29 120 -3
169 22 41 6 106 -22 89 -10 -6 -18 -38 -18 -70 0 -33 -9 -59 -20 -59 -11 0
-20 19 -20 42 0 22 -29 70 -65 105 l-65 63 -6 -56 c-8 -64 43 -154 86 -154 26
0 170 -276 170 -327 0 -36 -240 211 -279 287 -20 39 -52 135 -71 215 -20 80
-43 145 -53 145 -22 0 -22 -53 0 -96 10 -19 24 -61 32 -94 18 -78 -11 -50 -74
70 -45 85 -200 202 -229 173 -42 -43 78 -215 189 -269 72 -36 144 -131 118
-158 -25 -25 -181 70 -301 185 -132 125 -191 241 -192 373 0 51 -10 100 -21
107 -39 24 -45 -8 -20 -99 14 -49 22 -100 17 -114 -13 -38 -176 138 -176 190
0 55 -53 132 -92 132 -41 0 -15 -94 45 -167 64 -76 59 -100 -13 -63 -55 29
-135 148 -161 240 -6 22 -33 51 -60 64 -86 43 -73 -30 19 -114 98 -90 109
-135 22 -90 -102 53 -195 148 -242 246 -87 185 -239 285 -211 139 13 -68 113
-175 163 -175 31 0 81 -76 62 -95 -7 -7 -32 7 -57 29 -92 84 -207 111 -275 65
-61 -41 68 -122 187 -117 57 2 130 -7 163 -21 l60 -25 -48 -18 c-26 -11 -76
-13 -111 -7 -45 9 -71 3 -90 -20 -42 -50 -8 -61 95 -32 174 49 190 48 304 -22
117 -73 79 -108 -64 -58 -82 28 -210 27 -228 -2 -26 -43 56 -81 142 -66 260
43 432 5 550 -124 72 -77 103 -158 36 -91 -29 29 -76 31 -76 4 0 -11 40 -29
88 -42 52 -13 112 -47 145 -82 l57 -61 -77 14 c-59 10 -75 7 -69 -13 5 -15 47
-29 97 -32 106 -8 159 -41 109 -69 -110 -62 -349 49 -375 175 -21 101 -85 170
-158 170 -91 0 -25 -156 79 -189 76 -24 94 -96 20 -80 -127 27 -336 190 -336
262 0 41 -63 92 -85 70 -14 -14 7 -52 62 -115 124 -140 67 -139 -109 4 -266
214 -334 247 -362 175 -17 -45 46 -88 111 -75 33 7 69 -2 93 -22 39 -32 38
-32 -15 -21 -30 6 -55 4 -55 -6 0 -10 37 -24 83 -31 45 -7 101 -27 125 -45 41
-31 41 -31 -15 -18 -31 7 -89 2 -129 -11 l-72 -24 55 -47 c58 -49 153 -61 237
-29 53 20 217 -32 231 -73 16 -47 -361 -43 -455 5 -37 19 -62 23 -70 10 -7
-11 -1 -24 14 -30 99 -35 222 -55 316 -52 122 4 113 -13 -43 -87 -71 -33 -157
-158 -128 -186 32 -33 124 31 166 115 78 156 279 199 547 118 159 -48 161 -50
69 -89 -93 -39 -143 -37 -241 11 -147 71 -291 -1 -150 -75 48 -25 106 -24 228
6 92 23 46 -23 -94 -94 -127 -64 -123 -64 -259 -7 -24 10 -35 5 -35 -16 0 -16
24 -36 53 -43 94 -24 21 -51 -138 -53 -103 -1 -161 -11 -176 -29 -54 -65 46
-93 131 -37 26 17 73 29 104 27 31 -3 89 10 130 28 88 39 96 40 96 12 0 -11
-16 -26 -35 -33 -78 -27 -158 -186 -94 -186 41 0 112 78 141 153 84 219 633
459 823 360 61 -32 225 -217 225 -254 0 -29 -180 43 -200 81 -26 48 -156 92
-185 63 -33 -33 89 -143 161 -143 52 0 196 -47 223 -73 23 -22 -57 -46 -151
-47 -125 0 -248 62 -312 158 -75 112 -218 138 -155 28 30 -53 44 -64 148 -110
32 -14 62 -37 66 -50 13 -41 -198 -8 -249 39 -43 39 -193 55 -223 25 -46 -46
104 -110 258 -110 221 0 209 -15 -104 -131 -21 -7 -56 10 -96 50 -65 64 -141
81 -141 32 0 -39 78 -91 136 -91 29 0 41 -8 33 -22 -9 -14 -49 -19 -107 -12
-123 14 -338 -92 -268 -131 82 -47 223 -19 313 61 37 33 38 32 23 -16 -8 -27
-41 -72 -73 -100 -58 -51 -85 -139 -45 -153 47 -17 128 74 128 144 0 91 34
160 93 187 82 37 92 16 27 -58 -43 -50 -51 -91 -21 -109 28 -18 81 70 81 134
0 50 15 64 125 116 120 56 335 85 335 44 0 -38 -181 -124 -238 -112 -59 11
-142 -20 -142 -53 0 -37 96 -43 160 -10 35 18 69 28 75 22 22 -23 -59 -88
-123 -100 -83 -16 -151 -87 -172 -180 -35 -158 154 -74 236 104 40 89 53 104
59 70 4 -24 -2 -62 -14 -84 -26 -49 -28 -142 -2 -142 38 0 64 83 51 163 -24
138 45 229 236 313 126 54 106 -23 -27 -107 -75 -47 -115 -149 -59 -149 30 0
100 76 100 108 0 15 14 38 30 52 52 43 37 -63 -20 -140 -35 -48 -50 -93 -50
-154 0 -99 16 -105 94 -38 59 51 59 57 40 339 -9 137 144 166 237 44 119 -156
104 -791 -26 -1131 l-34 -90 -12 80 -11 80 -31 -100 -31 -100 -16 80 c-18 91
-78 220 -113 242 -17 10 -19 3 -9 -24 29 -74 71 -255 62 -264 -5 -6 -15 7 -21
28 -35 106 -60 157 -112 229 -88 122 -101 94 -26 -56 95 -189 116 -290 35
-165 -64 97 -203 230 -222 211 -6 -7 20 -45 59 -86 136 -143 191 -259 66 -138
-106 103 -248 163 -277 116 -6 -9 44 -42 110 -74 112 -54 220 -137 133 -103
-95 38 -107 39 -66 6 36 -30 33 -32 -55 -32 -98 0 -126 -27 -49 -47 59 -16
1651 -16 1710 0 76 20 50 47 -46 47 l-92 0 42 53 c58 74 33 86 -39 17 -82 -79
-92 -54 -16 39 48 58 53 71 22 54 -23 -12 -65 -50 -94 -84 -66 -79 -67 -43 -2
61 28 44 50 85 50 93 0 29 -105 -86 -141 -153 -20 -38 -38 -58 -38 -44 -1 39
53 161 99 218 22 29 36 57 30 62 -21 22 -117 -89 -162 -186 -54 -118 -60 -92
-17 74 17 66 26 125 20 131 -17 18 -90 -160 -91 -221 0 -77 -32 -52 -52 41
l-16 75 -12 -80 -13 -80 -25 60 c-86 202 -127 880 -65 1058 118 332 283 256
238 -110 -20 -168 -19 -183 19 -234 102 -137 152 3 58 164 -33 58 -44 101 -37
147 12 81 45 86 45 6 0 -62 86 -182 112 -156 37 37 13 138 -47 201 -96 99
-109 178 -25 154 160 -46 224 -148 217 -349 -4 -115 24 -211 62 -211 47 0 55
170 10 229 -16 21 -28 57 -28 80 1 39 2 40 25 3 79 -124 183 -194 239 -159 42
26 -85 166 -151 167 -45 0 -154 79 -154 112 0 16 57 5 177 -33 271 -87 282
-94 296 -185 14 -83 74 -164 108 -144 36 23 19 74 -44 133 -80 75 -63 90 70
58 86 -21 122 -21 182 -1 l74 24 -45 48 c-54 58 -155 64 -238 15 -56 -33 -180
-10 -180 33 0 24 94 42 147 29 53 -13 193 38 193 70 0 68 -159 63 -237 -7 -48
-43 -240 -62 -276 -26 -22 22 32 53 95 54 52 0 149 82 125 106 -32 32 -109 9
-187 -56 -90 -75 -141 -85 -220 -41 -49 27 -48 28 55 42 151 20 129 45 -30 34
-210 -14 -427 85 -295 135 81 31 133 24 185 -25 53 -49 226 -62 268 -20 46 46
-122 103 -280 96 -147 -8 -194 11 -125 48 106 57 652 -47 714 -136 31 -43 88
-59 88 -24 0 10 -20 33 -44 50 l-45 31 43 0 c24 0 103 -40 177 -90 128 -86
213 -112 238 -71 18 29 -71 81 -140 81 -34 0 -79 13 -100 29 -36 26 -33 28 44
26 106 -4 169 39 115 79 -48 35 -109 33 -163 -5 -36 -25 -64 -27 -160 -10 -63
11 -180 30 -260 42 -195 30 -199 85 -5 65 108 -12 236 62 170 99 -66 37 -168
20 -265 -44 -60 -40 -110 -59 -135 -52 -22 6 -56 11 -75 11 -97 0 199 223 352
263 148 40 504 -64 555 -163 51 -99 79 -127 102 -104 25 25 -11 96 -64 124
-22 12 -40 30 -40 41 0 24 107 1 117 -25 40 -102 263 -200 263 -115 0 37 -104
119 -152 119 -158 0 -19 55 162 63 44 3 -37 10 -180 17 -154 7 -285 24 -320
40 l-60 28 60 7 c184 21 284 145 117 145 -48 0 -84 -18 -136 -70 -72 -72 -112
-81 -241 -52 l-60 13 100 73 c153 112 516 176 613 108 50 -35 128 -43 146 -14
18 29 -35 59 -119 66 -77 6 -78 7 -34 32 45 26 68 28 223 18 51 -3 72 5 76 28
11 53 -43 58 -178 17 -160 -49 -182 -49 -108 0 53 35 109 108 110 146 1 8 -22
15 -50 15 -64 0 -149 -83 -149 -147 0 -62 -30 -85 -135 -102 -94 -16 -113 -1
-36 29 51 19 125 113 105 133 -30 30 -112 -18 -143 -84 -29 -61 -121 -126
-144 -103 -4 5 28 53 72 108 72 91 110 116 226 153 19 7 35 21 35 32 0 32 -72
25 -100 -9 -14 -16 -35 -30 -47 -30 -12 0 -56 -34 -99 -75 l-78 -75 33 79 c18
44 47 96 65 115 18 20 27 42 20 49 -25 25 -70 -35 -112 -153 -57 -155 -118
-224 -271 -310 -150 -84 -204 -92 -169 -25 42 81 104 135 157 135 89 0 221
147 174 194 -26 25 -157 -46 -189 -104 -19 -33 -36 -64 -39 -68 -28 -47 -19
36 12 105 40 91 121 153 199 153 35 0 104 57 104 87 0 41 -119 7 -168 -49 -63
-70 -91 -66 -44 7 18 26 26 54 19 61 -7 8 -76 -113 -153 -269 -164 -330 -386
-570 -493 -534 -39 14 101 197 150 197 60 0 109 20 109 44 0 11 -26 13 -64 5
l-65 -14 65 73 c35 40 64 82 64 92 0 10 36 54 80 98 73 72 92 120 80 202 -15
110 -160 -52 -160 -180 0 -40 -30 -94 -97 -174 -53 -64 -152 -194 -219 -288
-126 -178 -224 -269 -224 -207 0 45 60 155 101 184 44 31 68 132 43 177 -32
57 -96 -28 -112 -148 -16 -127 -52 -157 -52 -45 0 60 -8 81 -31 81 -27 0 -30
-17 -18 -107 15 -128 -17 -205 -118 -282 -96 -73 -100 -68 -86 104 30 371 195
541 506 522 60 -4 109 2 112 13 3 11 -31 23 -75 26 -167 12 -160 48 18 88 138
31 212 136 95 136 -35 0 -74 -20 -105 -52 -75 -81 -398 -236 -398 -191 0 42
164 224 245 271 191 112 936 269 1116 234 66 -12 172 -32 236 -44 118 -22 203
-5 203 42 0 31 -95 46 -155 25 -80 -28 -341 15 -290 48 19 12 29 29 22 36 -8
8 -36 -1 -64 -19 -28 -18 -76 -30 -107 -26 -54 6 -53 8 44 66 102 61 124 63
394 47 92 -6 119 17 66 56 -38 27 -120 25 -201 -6 -53 -21 -30 24 31 60 37 22
108 37 180 39 199 7 304 153 110 154 -64 0 -190 -66 -190 -100 0 -11 -9 -20
-20 -20 -40 0 -18 38 70 127 89 89 115 153 62 153 -34 0 -62 -35 -82 -100 -36
-115 -395 -402 -443 -354 -18 18 68 119 149 175 84 58 112 139 47 139 -38 0
-123 -85 -123 -123 0 -35 -172 -255 -223 -285 -113 -68 -108 -40 30 154 20 28
33 72 30 98 l-7 46 -45 -45 c-25 -25 -45 -65 -45 -90 -1 -107 -108 -226 -234
-262 -158 -44 -160 -43 -77 34 68 65 91 113 53 113 -49 0 -87 -31 -122 -100
-33 -65 -53 -79 -140 -100 -135 -32 -136 -27 -19 111 139 165 197 195 356 180
99 -10 125 -7 118 13 -6 17 -37 24 -92 19 -117 -9 -105 5 82 99 91 46 212 114
270 152 97 65 112 69 207 56 82 -12 101 -9 93 13 -6 17 -32 25 -72 21 -119
-12 -69 53 72 93 89 26 185 134 185 209 0 89 -206 -11 -264 -127 -35 -72 -92
-139 -118 -139 -24 0 4 143 44 222 52 105 12 220 -41 119 -12 -21 -21 -77 -22
-125 -1 -137 -59 -273 -135 -320 l-66 -41 13 52 c21 82 -23 63 -58 -24 -27
-69 -157 -166 -184 -139 -17 17 174 276 203 276 35 0 148 106 148 138 0 67
-145 6 -179 -74 -13 -32 -49 -77 -81 -101 -31 -23 -86 -96 -121 -162 -54 -101
-170 -216 -195 -192 -3 3 33 68 82 144 48 75 113 184 143 241 65 121 108 163
231 227 152 80 204 139 121 139 -21 0 -59 -26 -85 -58 -41 -51 -136 -117 -136
-95 0 5 28 67 61 140 82 175 96 320 39 411 -80 127 -145 -111 -69 -253 33 -61
34 -74 8 -120 -44 -78 -73 -75 -88 9 -24 125 -91 176 -91 68 0 -31 14 -69 32
-84 72 -59 61 -238 -14 -238 -21 0 -58 118 -58 182 0 30 -16 71 -35 90 -58 58
-56 -23 4 -158 59 -133 62 -174 20 -255 -43 -84 -77 -76 -60 14 23 120 -60
252 -97 155 -23 -61 -11 -121 38 -188 64 -87 65 -83 -33 -222 -124 -177 -131
-165 -86 133 14 93 -26 153 -68 102 -27 -32 -28 -64 -11 -297 l13 -174 -148
-151 c-140 -142 -197 -180 -197 -129 0 52 131 261 193 309 65 50 101 189 48
189 -29 0 -97 -97 -111 -160 -7 -31 -27 -69 -44 -83 -39 -33 -20 108 27 204
29 58 21 139 -14 139 -37 0 -61 -83 -48 -168 16 -106 -21 -144 -47 -48 -9 37
-32 69 -50 72 -48 10 -44 -61 5 -106 82 -73 49 -228 -94 -445 -87 -132 -100
-140 -125 -74 -23 59 26 196 87 246 37 31 45 143 10 143 -37 0 -76 -66 -76
-131 -1 -99 -60 -161 -60 -64 -1 53 -10 75 -31 75 -37 0 -38 10 12 -193 46
-186 42 -228 -28 -315 l-47 -58 -24 262 c-30 330 -30 330 251 656 l214 249 89
-5 c62 -4 92 2 99 22 7 22 -7 25 -74 15 -140 -23 -39 109 120 156 47 13 89 35
94 48 9 29 -26 30 -77 2 -62 -33 -47 -6 81 145 65 78 134 180 151 227 25 65
51 93 111 120 43 19 78 47 78 62 0 39 -28 33 -70 -13 -20 -22 -40 -36 -45 -32
-13 14 38 98 81 133 30 24 37 46 27 85 -17 66 -69 52 -84 -23 -35 -167 -122
-251 -98 -95 13 89 -3 141 -62 201 -83 82 -99 -115 -19 -221 70 -92 63 -158
-32 -303 -74 -114 -128 -163 -109 -100 81 282 75 406 -23 444 -72 27 -80 -160
-11 -234 36 -38 43 -62 33 -112 -17 -81 -48 -102 -48 -32 0 59 -125 200 -159
179 -64 -39 -1 -188 100 -241 33 -16 59 -46 59 -65 -1 -31 -265 -366 -300
-380 -18 -7 46 232 78 293 27 49 29 123 3 123 -10 0 -24 -18 -31 -40 -18 -56
-50 -50 -50 8 0 62 -19 112 -42 112 -27 0 -20 -84 12 -140 32 -57 39 -172 12
-189 -10 -6 -25 15 -32 47 -7 33 -25 70 -41 83 -47 39 -37 -54 13 -124 l42
-59 -45 -110 c-56 -138 -227 -335 -207 -238 7 33 31 90 53 126 29 49 34 73 18
89 -30 30 -30 30 -87 -174 -66 -235 -103 -251 -93 -38 13 266 327 873 508 978
49 29 89 61 89 71 0 30 -64 20 -103 -15 -53 -48 -51 10 3 78 41 53 53 115 22
115 -32 0 -61 -53 -83 -154 -13 -61 -41 -120 -71 -148 l-50 -47 13 90 c40 288
40 287 173 356 67 35 137 63 157 63 49 0 67 61 29 99 -29 28 -37 24 -96 -42
-58 -67 -129 -117 -166 -117 -8 0 -1 16 16 35 46 53 58 104 44 179 l-13 68
-47 -44 c-39 -36 -48 -65 -48 -151 0 -59 -8 -107 -18 -107 -23 0 -42 50 -42
109 0 26 -18 68 -39 94 l-40 47 0 -73 c-1 -39 12 -83 27 -96 39 -32 71 -130
53 -160 -11 -17 -23 -3 -39 41 -16 46 -29 59 -44 44 -14 -14 -8 -41 21 -88 41
-67 55 -158 25 -158 -8 0 -26 29 -39 64 -18 48 -31 58 -47 42 -17 -17 -8 -41
32 -95 61 -79 62 -177 3 -315 l-28 -66 -35 79 c-22 51 -30 104 -22 152 7 47 2
86 -17 111 -65 88 -71 -29 -13 -249 l44 -168 -84 -178 c-96 -200 -117 -200
-118 4 0 92 12 154 40 209 45 89 53 178 15 165 -14 -4 -28 -30 -31 -57 -13
-113 -26 -147 -45 -117 -61 97 8 334 143 488 57 66 73 139 28 138 -11 -1 -60
-81 -108 -179 -79 -160 -89 -173 -103 -128 -31 104 -21 174 30 208 65 42 97
159 70 257 -17 60 -14 84 13 126 39 59 4 124 -50 90z"/>
<path d="M2147 5089 c-17 -44 25 -85 56 -54 25 25 9 85 -23 85 -12 0 -27 -14
-33 -31z"/>
<path d="M4584 4608 c-26 -40 -44 -75 -40 -79 16 -16 240 27 262 50 25 27 29
28 -146 -10 l-70 -15 45 49 c51 56 56 77 20 77 -14 0 -46 -33 -71 -72z"/>
<path d="M1389 4558 c-21 -33 26 -71 53 -44 23 23 9 66 -22 66 -10 0 -24 -10
-31 -22z"/>
<path d="M1569 4198 c-7 -12 -4 -31 7 -42 25 -25 64 -4 64 35 0 34 -51 39 -71
7z"/>
<path d="M2831 4121 c-18 -28 4 -61 42 -61 17 0 27 14 23 33 -7 41 -47 57 -65
28z"/>
<path d="M1749 3898 c-7 -12 -4 -31 7 -42 25 -25 64 -4 64 35 0 34 -51 39 -71
7z"/>
<path d="M2593 3691 c-14 -37 23 -63 51 -35 21 21 6 64 -23 64 -9 0 -22 -13
-28 -29z"/>
<path d="M5190 3520 c-17 -27 6 -60 41 -60 16 0 29 18 29 40 0 41 -48 55 -70
20z"/>
<path d="M5080 2806 c-38 -14 -120 -88 -120 -108 0 -60 187 -28 252 44 54 60
-30 101 -132 64z"/>
<path d="M926 2561 c-128 -78 -134 -171 -9 -149 96 16 145 49 189 126 l36 62
-76 0 c-42 0 -105 -18 -140 -39z"/>
<path d="M4548 2491 c-108 -47 -163 -151 -80 -151 62 0 172 91 172 142 0 45
-9 46 -92 9z"/>
<path d="M4909 2318 c-19 -30 22 -66 60 -51 17 6 31 26 31 42 0 35 -71 42 -91
9z"/>
<path d="M1169 2078 c-21 -33 26 -71 53 -44 23 23 9 66 -22 66 -10 0 -24 -10
-31 -22z"/>
<path d="M4747 1989 c-17 -44 25 -85 56 -54 25 25 9 85 -23 85 -12 0 -27 -14
-33 -31z"/>
</g>
</svg>
);

export default Plant;