"""
PyAudio example: Record a few seconds of audio and save to a WAVE file.

installation: 
python -m pip install pyaudio  #nie działa !!!
ale można zainstalować bezpośrednio z WHL:
pip install py3-solution\PyAudio-0.2.11-cp38-cp38-win_amd64.whl

webpage:
http://people.csail.mit.edu/hubert/pyaudio/

"""

#import sounddevice as sd
import pyaudio
import wave

CHUNK = 1024
FORMAT = pyaudio.paInt16
CHANNELS = 2
RATE = 44100
RECORD_SECONDS = 8
WAVE_OUTPUT_FILENAME = "output.wav"

p = pyaudio.PyAudio()

# input selection

# print(sd.query_devices())

info = p.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')
for i in range(0, numdevices):
    if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
        print("Input Device id ", i, " - ",
              p.get_device_info_by_host_api_device_index(0, i).get('name'))

# recording settings
stream = p.open(format=FORMAT,
                channels=CHANNELS,
                rate=RATE,
                input=True,
                frames_per_buffer=CHUNK,
                # this number can change!!! we need audio input device named "przechwytywanie nagrywania..." (dependent on system/hardware)
                input_device_index=1
                )

print("* recording")

frames = []

for i in range(0, int(RATE / CHUNK * RECORD_SECONDS)):
    # print(i)
    data = stream.read(CHUNK)
    frames.append(data)

print("* done recording")

stream.stop_stream()
stream.close()
p.terminate()

wf = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
wf.setnchannels(CHANNELS)
wf.setsampwidth(p.get_sample_size(FORMAT))
wf.setframerate(RATE)
wf.writeframes(b''.join(frames))
wf.close()
