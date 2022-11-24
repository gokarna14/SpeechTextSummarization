from sklearn.feature_extraction.text import CountVectorizer
from ntpath import join
import numpy as np
import pandas as pd
from sklearn.decomposition import TruncatedSVD







doc = [
    "An intern at OpenGenus",
    "Developer at OpenGenus",
    "A ML intern",
    "A ML developer"
]
# Converting each document into an vector
vectorizer = CountVectorizer()

bag_of_words = vectorizer.fit_transform(doc)

# print(bag_of_words)
bag_of_words.todense()


svd = TruncatedSVD(n_components=2)
lsa = svd.fit_transform(bag_of_words)

# Using pandas to look at the output of lsa


topic_encoded_df = pd.DataFrame(lsa, columns=["topic1", "topic2"])
topic_encoded_df["doc"] = doc

print('\n------------\n')

print(topic_encoded_df[["doc", "topic1", "topic2"]])

print('\n------------\n')

dictionary = vectorizer.get_feature_names()
print(dictionary)

encoding_matrix = pd.DataFrame(
    svd.components_, index=["topic1", "topic2"], columns=dictionary).T
encoding_matrix
# numerical values can be thought of as an expression of that word in respective topic
# print('\n------------\n')
# print(encoding_matrix)

encoding_matrix['abs_topic1'] = np.abs(encoding_matrix["topic1"])
encoding_matrix['abs_topic2'] = np.abs(encoding_matrix["topic2"])
encoding_matrix.sort_values('abs_topic1', ascending=False)

print('\n------------\n')
print("Encoding Matrix")
print(encoding_matrix)

# We need the matrix with absolute values only to determine the strength of each part of sentence effectively

final_matrix = encoding_matrix.sort_values('abs_topic1', ascending=False)
final_matrix[["abs_topic1", "abs_topic2"]]

# Extracting out final sentence from topic 1

sentence1 = final_matrix[final_matrix["abs_topic1"] >= 0.4]
sentence1[['abs_topic1']]

# Extracting out final sentence from topic 2

sentence2 = final_matrix[final_matrix["abs_topic2"] >= 0.4]
sentence2[['abs_topic2']]

print('\n------------\n')
print('Final Conclusion:')
print(' '.join(sentence1.index))
print(' '.join(sentence2.index))
print('\n------------\n')
print(f'SummarizedWords/InputWords = {5/12}')

print('\n------------\n')
