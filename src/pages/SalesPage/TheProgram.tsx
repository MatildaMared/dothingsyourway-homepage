import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import SectionHeader from "../../components/SectionHeader";

function TheProgram() {
    return (
        <Wrapper>
            <SectionHeader text="Om programmet" />
            <div>
                <div>
                    <h2>Upplägget</h2>
                    <p>
                        Kursen består av sex delar och pågår under 12 veckor.
                        Varannan vecka håller jag i liveföreläsning och varanna
                        vecka har vi ett gruppcoachingstillfälle. På detta sätt
                        varvas teori med praktik så att vi ser till så du kan
                        direkt tillämpa dina nya kunskaper. Du kan läsa mer om
                        varje del om du skrollar lite längre ner.
                    </p>
                </div>
                <div>
                    <h2>Vad ingår?</h2>
                    <ul>
                        <li>
                            <strong>Sex st liveföreläsningar</strong> där du kan
                            ställa frågor under tiden. Där får du all
                            inspiration och information du behöver för att skapa
                            det liv du vill leva.
                        </li>
                        <li>
                            <strong>
                                Sex st gruppcoachingstillfällen med mig, Markus.
                            </strong>{" "}
                            Alla får chansen att coachas av mig live.
                            Tillsammans lär vi oss när vi tar del av varandras
                            problem och utmaningar. Du kommer lära dig massor av
                            att höra de andras lösningar på deras problem och
                            samtidigt så kommer du känna massvis av gemenskap
                            med de andra som står inför samma utmaningar som du.
                        </li>
                        <li>
                            <strong>
                                En kopia av affärssystemet jag själv använder
                                för mitt företagande, min personliga utveckling
                                och produktivitet.
                            </strong>{" "}
                            Dessutom får du två timmar med
                            affärssystemsutveckling där jag anpassar ditt system
                            efter dina behov.
                        </li>
                        <li>
                            <strong>
                                Tillgång till mig via vår Slack kanal där du
                                närsomhelst kan ställa frågor.
                            </strong>{" "}
                            Jag kommer besvara dina frågor och du kommer också
                            få tillfälle att bidra med dina unika erfarenheter
                            när någon annan behöver det.
                        </li>
                        <li>
                            <strong>
                                Föreläsningarna och gruppcoachingen spelas in
                            </strong>{" "}
                            så du kan titta på det i efterhand ifall du skulle
                            missa något tillfälle.
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>När sätter det igång?</h2>
                    <p>
                        Nästa programstart är den 2 Juni 2022!{" "}
                        <strong>
                            Alla tillfällen sker på torsdagar mellan kl 18:00 –
                            19:30.
                        </strong>{" "}
                        Första datumet är alltså den 2 Juni och sista datumet är
                        den 18 Augusti.
                    </p>
                </div>
                <a href="#offer">
                    <Button>Ja, jag vill investera i mig själv!</Button>
                </a>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    margin-block-end: var(--spacing-xl);

    & > *:not(:first-child) {
        max-width: var(--max-width);
        margin-inline: auto;
    }
`;

export default TheProgram;
