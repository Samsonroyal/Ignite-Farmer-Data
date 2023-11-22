import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const PlantActivity = () => {
        const [selectedOption, setSelectedOption] = useState("Weekly");

        const handleOptionChange = (newOption) => {
            setSelectedOption(newOption);
        };

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Plant Activity</Text>
                    <View style={styles.dropdownContainer}>
                        <TouchableOpacity
                            style={styles.dropdownButton}
                            onPress={() => handleOptionChange("Daily")}
                        >
                            <Text style={styles.dropdownText}>Daily</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.dropdownButton}
                            onPress={() => handleOptionChange("Hourly")}
                        >
                            <Text style={styles.dropdownText}>Hourly</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.dropdownButton}
                            onPress={() => handleOptionChange("Weekly")}
                        >
                            <Text style={[styles.dropdownText, styles.selectedDropdownText]}>
                                Weekly
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.content}>
                    <View style={styles.dataSection}>
                        <Text style={styles.dataTitle}>Final growth</Text>
                        <Text style={styles.dataValue}>20%</Text>
                        <Image
                            style={styles.dataImage}
                            source={require("../assets/ellipse-12.svg")}
                        />
                    </View>
                    <View style={styles.dataSection}>
                        <Text style={styles.dataTitle}>Vegetation</Text>
                        <Text style={styles.dataValue}>80%</Text>
                        <Image
                            style={styles.dataImage}
                            source={require("../assets/ellipse-13.svg")}
                        />
                    </View>
                    <View style={styles.dataSection}>
                        <Text style={styles.dataTitle}>Seed Phase</Text>
                        <Text style={styles.dataValue}>100%</Text>
                        <Image
                            style={styles.dataImage}
                            source={require("../assets/ellipse-14.svg")}
                        />
                    </View>
                </View>

                <View style={styles.timeline}>
                    <View style={styles.timelineWeek}>
                        <Text style={styles.timelineWeekText}>week 1</Text>
                    </View>
                    <View style={styles.timelineWeek}>
                        <Text style={styles.timelineWeekText}>week 2</Text>
                    </View>
                    <View style={styles.timelineWeek}>
                        <Text style={styles.timelineWeekText}>week 3</Text>
                    </View>
                    <Image
                        style={styles.timelineLine}
                        source={require("../assets/line-1.svg")}
                    />
                    <Image
                        style={styles.timelineLine}
                        source={require("../assets/line-2.svg")}
                    />
                    <Image
                        style={styles.timelineLine}
                        source={require("../assets/line-3.svg")}
                    />
                </View>
            </View>
        );
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
        },
        header: {
            flexDirection: "row",
            justifyContent: "space-between",
        },
        title: {
            fontSize: 24,
            fontWeight: "bold",
            color: "#000000",
        },
        dropdownContainer: {
            flexDirection: "row",
        },
        dropdownButton: {
            backgroundColor: "#FFFFFF",
            borderRadius: 8,
            paddingVertical: 8,
            paddingHorizontal: 16,
            marginLeft: 16,
        },
        dropdownText: {
            fontSize: 14,
            fontWeight: "bold",
            color: "#000000",
        },
        selectedDropdownText: {
            color: "#FFFFFF",
            backgroundColor: "#000000",
        },
        content: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 40,
        },
        dataSection: {
            backgroundColor: "#FFFFFF",
            borderRadius: 8,
            padding: 16,
            width: "30%",
        },
        dataTitle: {
            fontSize: 14,
            fontWeight: "bold",
            color: "#000000",
        },});

    export default PlantActivity;
