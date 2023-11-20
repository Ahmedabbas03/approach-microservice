# Approach Microservice

The Approach Microservice is designed to interpret scores, providing human-readable insights into various attributes such as toxicity, insults, threats, and identity attacks.

## Communication Contract

- **Discord:** For quick questions, updates, etc.
- **Email:** For official communications and sharing detailed information.
- **Biweekly Meetings:** Scheduled virtual meetings via Zoom on other Thursdays at 2:00 PM (CST) for project updates, discussions, and issue resolution.

### Response Time

- **Discord:** We aim to respond within 24 hours during weekdays.
- **Email:** Replies within 48 hours during weekdays.

### Guidelines for Effective Communication

1. **Clear Communication:** Be clear and specific when sharing ideas or information.
2. **Respectful Interaction:** Maintain a professional and respectful manner in all communications.
3. **Timely Responses:** Aim to respond promptly and be on time for scheduled meetings.

### Conflict Resolution

In the event of conflicts or disagreements:
- First, attempt to resolve the issue through discussion and compromise.
- If resolution isn’t possible, escalate the matter to a TA or professor.

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
