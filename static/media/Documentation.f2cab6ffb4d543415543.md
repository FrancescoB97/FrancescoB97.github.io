# Documentation

Training in virtual reality (VR) is a highly immersive and interactive learning method which enables learners to engage
in simulated real-world scenarios.
This approach provides a unique opportunity for learners to practice and develop critical skills in a safe and
controlled environment, without the risk of causing harm to themselves or others.

By offering a safe space to learn, trainees can experiment with different scenarios, make mistakes, and refine their
skills in a risk-free environment.
VR training has been shown to be a highly effective learning method across a wide range of fields, including medical and
veterinary education. Compared to traditional classroom or e-learning methods, VR training is more engaging, efficient,
and faster.

This approach not only enhances learners’ retention of knowledge and skills but also helps them to gain confidence in
applying them in real-life situations.

This thesis is focused on the development and implementation of a software program designed to simulate an equine
endoscopy procedure in collaboration with the Department of Veterinary Science of the University of Turin. The primary
goal of this project is to create a virtual learning tool for educational purposes that will replace, either entirely or
in part, the traditional training process for this procedure.

By doing so, it will overcome some of the limitations related to the limited availability of patients and the risks
associated with performing this procedure on live animals. The aim is to integrate the work that has been done,
enhancing its functionality, with a mechanism for simulating certain diseases and for monitoring and evaluating the
student, who must be able to follow the analysis procedure correctly.

To summarize, the validity and efficiency of this tool will be evaluated by collecting and analyzing the results of
experiments carried out by students who have tried out the application. These experiments will provide valuable insights
into the effectiveness of the tool and its potential to enhance the learning experience for veterinary students.

The results of these experiments will also serve as an important reference for future research and development in the
field of veterinary medicine and education.",

## Explanation of conditions implementation
---

### Clinical signs commonly linked with certain diseases

##### Swelling

Some diseases, such as melanoma or empyema, have swelling as a symptom. To implement this, a mesh deformation was
chosen, at vertex level.
The vertex that is translated by a certain value is picked and so are the neighboring vertices but with a certain
falloff (an approach very similar to the proportional editing proposed by Blender). This simulates well the behavior of
cancer cells that tend to expand by growing disproportionately.

|                           ![3](https://www.dropbox.com/scl/fi/1211d7t54rtl9vmoht1e1/3.jpg?rlkey=ydq54u5ym16xhqqrbb1yr94ox&raw=1)                           |
|:----------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Deformation with a fall-off that follows gauss's law (bell). The red wiresphere indicates the last key point that experienced the force due to deformation |

To prevent the deformation from having a permanent effect during this session, prior cloning of the mesh is carried out
in Unity. In summary, a new mesh is created at the beginning of the session having the same vertices, triangles,
normals, uv texture coordinates, and blendshapes for possible animations. Any deformation will then be applied to the
cloned mesh and when necessary it is possible to return to the initial situation. The same applies to the collider mesh.

|                              ![5](https://www.dropbox.com/scl/fi/j4pvvrzgincwkh0o4zhkz/5.jpg?rlkey=4y4skvz1vyg7du4ek23q68oc0&raw=1)                               |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Final result of mesh swelling deformation due to melanoma expansion. The little wiresphere indicates the key point, while the big ones is the radius of influence |

##### Hemorrage

The basic element of some diseases is bleeding, possibly associated with epistaxis.
For this reason, I was faced with the bleeding problem.
Excluding fluid simulation, which is overly expensive, I thought of a not-too-dissimilar strategy.
Fluid simulation in Blender and Houdini was used to find realistic textures, that are spawned via Fluid simulation-style
approach.

| ![10](https://www.dropbox.com/scl/fi/clapwhxqxv9k39w5rah8i/10.jpg?rlkey=rqj2a529vmjxk62q4iaulo3l5&raw=1) |
|:--------------------------------------------------------------------------------------------------------:|
|  Random spawn of projectors inside the mesh. Red wirespheres are the sampled points on the sphere path.  |

The concept is that one or more spheres (depending on the intensity of the bleeding, in terms of volume) that through
physics are dropped from the bleeding point.
During the path that the sphere travels, points are sampled based on the distance between one and the next (to avoid
dead spots where the sphere has stopped), and the intensity of the blood (small bleeding stops sooner than large
bleeding).

In this way, it is then possible to create a projected trail of blood (decals), which will give the idea of bleeding.

| ![12](https://www.dropbox.com/scl/fi/ou3sb0gwcuhgbssbxygou/12.jpg?rlkey=ec6u4twlcdgfkd7yy9ck9yzlv&raw=1) | ![13](https://www.dropbox.com/scl/fi/fhdh7nnf43l2tsfzmrvjd/13.jpg?rlkey=5kzqigceiqkm1tdlo7ax4yvcx&raw=1) | 
|:--------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------:| 
|                     Epistaxis in the Nasopharynx, caudal view (irrealistic in vivo)                      |         Same hemorrhage, cranial view (realistic in vivo image). Note the blood on the GP ostia          | 

### Left laryngeal hemiplegia

The left laryngeal hemiplegia influences the left arytenoid cartilage of the larynx.
First of all, I needed to implement the larynx in a particularly accurate manner as it is a fundamental element for this
project.

| ![10](https://www.dropbox.com/scl/fi/3vwp27wg6w4b97ui4xj8a/1.jpg?rlkey=hr3vp5158v5zevf0q582fjrpm&raw=1) |
|:-------------------------------------------------------------------------------------------------------:|
|            Inhaling and exhaling scheme. Swallowing and coughing are handled asynchronously.            |

Opening and closing are handled via script, thanks to the use of the DOTWEEN library. It was decided to act in this way
in order to parameterize everything and make it easy to override the behavior in the case of RLN.

| ![12](https://www.dropbox.com/scl/fi/bm2qvpsbbcwk6s5a8vhps/4.jpg?rlkey=5jnjp0giu2ggsdkcqb8gp6e6q&raw=1) | ![13](https://www.dropbox.com/scl/fi/sitw4756tagtf7j99obtb/5.jpg?rlkey=dinpyxc6qsoyj1lp0iq03q0mv&raw=1) | 
|:-------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------:| 
|                               Abduction of the arytenoids in real horses                                |                               Adduction of the arytenoids in the project                                | 

To implement the various degrees seen in table, I relied respectively on the time delays provided by DOTWEEN's
SetDelay() function and a dead zone concept.

|       ![10](https://www.dropbox.com/scl/fi/qn21gh1hrp07t4kt34qaw/6.jpg?rlkey=p6i6efnvw3hx8he2lvpislc6j&raw=1)       |
|:-------------------------------------------------------------------------------------------------------------------:|
| Asymmetry scheme; Red represents the dead zone, where the arytenoid can't move; green is the interval of randomness |

| ![10](https://www.dropbox.com/scl/fi/416stb18jzbcqvclg3dw6/7.jpg?rlkey=wwq437kj6ge8c7renpan7uxju&raw=1) |
|:-------------------------------------------------------------------------------------------------------:|
|          RLN grade 3: notice the obvious asymmetry between right and left arytenoid cartilage           |

### Removal of the ventricle and vocal fold

For the removal of the vocal cord as a result of a ventriculocordectomy, the relative mesh of the left laryngeal
ventricle is simply hidden

### Fixed abduction of arytenoid cartilage and Fixed adduction of arytenoid cartilage

| ![12](https://www.dropbox.com/scl/fi/iydlqwztentn4mhenlhx1/10.jpg?rlkey=yfkxsz84kui9l53bqh9qysiok&raw=1) | ![13](https://www.dropbox.com/scl/fi/6qtvet63ystcj4ihetj46/11.jpg?rlkey=0ydgbus9g35nsqvx4jh0xfpf9&raw=1) | 
|:--------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------:| 
|                         Fixed position of left arytenoid after tie-back surgery                          |                       Fixed position of left arytenoid after reinnervation surgery                       | 


