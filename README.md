# Approach Microservice

The Approach Microservice is designed to interpret scores, providing human-readable insights into various attributes such as toxicity, insults, threats, and identity attacks.

## Overview

This microservice offers an easy way to obtain interpretations of scores related to different attributes and provides understandable interpretations.

## Features

- Offers interpretations for scores related to toxicity, insults, threats, and identity attacks.
- Enhances comprehension of the nature and context of input scores.
- Facilitates better understanding and utilization of score-related information.

## Usage
```
Start
  |
  v
Client Sends POST Request to Microservice Endpoint
  |
  v
Microservice Processes Data and Generates Interpretations
  |
  v
Microservice Sends Interpretations as Response to Client
  |
  v
End
```

### Requesting Data

Send a POST request to the provided endpoint:
```
https://approach-microservice.onrender.com/api/interpret
```

#### Example Call

Include sample data in this format:
```json
{
  "scores": [0.5, 0.1, 0.8, 1]
}
```

### Receiving Data

Upon sending a POST request with the specified data format to the endpoint, the microservice will respond with human-readable interpretations of the scores.

#### Example Response
```json
{
    "interpretations": [
        "There is uncertainty whether this message contains toxicity.",
        "It is unlikely that this message contains an insult.",
        "This message is very likely to contain a threat.",
        "This message is very likely to contain an identity attack."
    ]
}
```

## Note

This repository contains the code and implementation for the Approach Microservice.
