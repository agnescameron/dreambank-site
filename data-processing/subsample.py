import pandas as pd
df=pd.read_csv("dreambank.csv")

# cleaning bad dates
df['date'] = pd.to_datetime(df['date'], errors='coerce')
df = df.dropna(subset=['date'])
df = df[pd.to_numeric(df['number'], errors='coerce').notnull()]

# getting proper names
# df = df[df['id'].map(len) > 3]

df = df[~df['name'].str.contains("Miami")]
df = df[~df['name'].str.contains("Pregnancy")]
df = df[~df['name'].str.contains("Vietnam")]
df = df[~df['name'].str.contains("Norman")]
df = df[~df['name'].str.contains("#2")]
df = df[~df['report'].str.contains("<")]


df.sample(100).to_json("../dreambank-sample.json", orient='records', indent=2 )